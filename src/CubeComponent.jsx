import React, { useEffect } from 'react';

const CubeComponent = () => {
    useEffect(() => {
        const events = new Events();
        let userPrefix;

        const prefix = (() => {
            const styles = window.getComputedStyle(document.documentElement, '');
            const pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1];
            const dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
            userPrefix = {
                dom: dom,
                lowercase: pre,
                css: '-' + pre + '-',
                js: pre[0].toUpperCase() + pre.substr(1)
            };
        })();

        function bindEvent(element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else {
                element.attachEvent('on' + type, handler);
            }
        }

        function Events() {
            this.events = {};
        }

        events.add = function (obj) {
            obj.events = {};
        };
        events.implement = function (fn) {
            fn.prototype = Object.create(Events.prototype);
        };

        Events.prototype.on = function (name, fn) {
            const events = this.events[name];
            if (events === undefined) {
                this.events[name] = [fn];
                this.emit('event:on', fn);
            } else {
                if (events.indexOf(fn) === -1) {
                    events.push(fn);
                    this.emit('event:on', fn);
                }
            }
            return this;
        };
        Events.prototype.once = function (name, fn) {
            const events = this.events[name];
            fn.once = true;
            if (!events) {
                this.events[name] = [fn];
                this.emit('event:once', fn);
            } else {
                if (events.indexOf(fn) === -1) {
                    events.push(fn);
                    this.emit('event:once', fn);
                }
            }
            return this;
        };
        Events.prototype.emit = function (name, args) {
            const events = this.events[name];
            if (events) {
                let i = events.length;
                while (i--) {
                    if (events[i]) {
                        events[i].call(this, args);
                        if (events[i].once) {
                            delete events[i];
                        }
                    }
                }
            }
            return this;
        };
        Events.prototype.unbind = function (name, fn) {
            if (name) {
                const events = this.events[name];
                if (events) {
                    if (fn) {
                        const i = events.indexOf(fn);
                        if (i !== -1) {
                            delete events[i];
                        }
                    } else {
                        delete this.events[name];
                    }
                }
            } else {
                delete this.events;
                this.events = {};
            }
            return this;
        };

        function Viewport(data) {
            events.add(this);

            const self = this;

            this.element = data.element;
            this.fps = data.fps;
            this.sensivity = data.sensivity;
            this.sensivityFade = data.sensivityFade;
            this.touchSensivity = data.touchSensivity;
            this.speed = data.speed;

            this.lastX = 0;
            this.lastY = 0;
            this.mouseX = 0;
            this.mouseY = 0;
            this.distanceX = 0;
            this.distanceY = 0;
            this.positionX = 1122;
            this.positionY = 136;
            this.torqueX = 0;
            this.torqueY = 0;

            this.down = false;
            this.upsideDown = false;

            this.previousPositionX = 0;
            this.previousPositionY = 0;

            this.currentSide = 0;
            this.calculatedSide = 0;

            bindEvent(document, 'mousedown', function () {
                self.down = true;
            });

            bindEvent(document, 'mouseup', function () {
                self.down = false;
            });

            bindEvent(document, 'keyup', function () {
                self.down = false;
            });

            bindEvent(document, 'mousemove', function (e) {
                self.mouseX = e.pageX;
                self.mouseY = e.pageY;
            });

            bindEvent(document, 'touchstart', function (e) {
                self.down = true;
                if (e.touches) {
                    e = e.touches[0];
                }
                self.mouseX = e.pageX / self.touchSensivity;
                self.mouseY = e.pageY / self.touchSensivity;
                self.lastX = self.mouseX;
                self.lastY = self.mouseY;
            });

            bindEvent(document, 'touchmove', function (e) {
                if (e.preventDefault) {
                    e.preventDefault();
                }

                if (e.touches.length === 1) {
                    if (e.touches) {
                        e = e.touches[0];
                    }
                    self.mouseX = e.pageX / self.touchSensivity;
                    self.mouseY = e.pageY / self.touchSensivity;
                }
            });

            bindEvent(document, 'touchend', function () {
                self.down = false;
            });

            setInterval(this.animate.bind(this), this.fps);
        }

        events.implement(Viewport);

        Viewport.prototype.animate = function () {
            this.distanceX = this.mouseX - this.lastX;
            this.distanceY = this.mouseY - this.lastY;

            this.lastX = this.mouseX;
            this.lastY = this.mouseY;

            if (this.down) {
                this.torqueX =
                    this.torqueX * this.sensivityFade +
                    (this.distanceX * this.speed - this.torqueX) * this.sensivity;
                this.torqueY =
                    this.torqueY * this.sensivityFade +
                    (this.distanceY * this.speed - this.torqueY) * this.sensivity;
            }

            if (Math.abs(this.torqueX) > 0.1) {
                if (this.upsideDown) {
                    this.positionX -= this.torqueX;
                } else {
                    this.positionX += this.torqueX;
                }
            }

            if (Math.abs(this.torqueY) > 0.1) {
                this.positionY += this.torqueY;
            }

            if (this.positionY > 360) {
                this.positionY -= 360;
            } else if (this.positionY < 0) {
                this.positionY += 360;
            }

            if (this.positionX > 360) {
                this.positionX -= 360;
            } else if (this.positionX < 0) {
                this.positionX += 360;
            }

            if (this.positionY > 90 && this.positionY < 270) {
                if (!this.upsideDown) {
                    this.upsideDown = true;
                }
            } else {
                if (this.upsideDown) {
                    this.upsideDown = false;
                }
            }

            if (this.upsideDown) {
                this.calculatedSide =
                    Math.floor((this.positionX + 180) / 90 + 2) % 4;
            } else {
                this.calculatedSide =
                    Math.floor(this.positionX / 90) % 4;
            }

            if (this.calculatedSide !== this.currentSide) {
                this.currentSide = this.calculatedSide;
                this.emit('sideChange');
            }

            this.element.style[
                userPrefix.js + 'Transform'
            ] =
                'rotateX(' + this.positionY + 'deg) rotateY(' + this.positionX + 'deg)';
        };

        const viewport = new Viewport({
            element: document.getElementsByClassName('cube')[0],
            fps: 1000 / 30,
            sensivity: 0.1,
            sensivityFade: 0.93,
            speed: 2,
            touchSensivity: 1.5
        });

        viewport.on('sideChange', function () {
            const activeSide = document.querySelector(
                'div.cube > div:nth-child(' + ((viewport.currentSide + 1) % 6 + 1) + ')'
            );
            if (activeSide) {
                const currentActive = document.querySelector('.cube-image.active');
                if (currentActive) {
                    currentActive.classList.remove('active');
                }
                activeSide.querySelector('.cube-image').classList.add('active');
            }
        });
    }, []);

    return (
        <div id="wrapper">
            <div className="titles3">
                <h2>Roll!</h2>
            </div>
            <div className="viewport">
                <div className="cube">
                    <div>
                        <div className="cube-image">1</div>
                    </div>
                    <div>
                        <div className="cube-image">2</div>
                    </div>
                    <div>
                        <div className="cube-image">3</div>
                    </div>
                    <div>
                        <div className="cube-image">4</div>
                    </div>
                    <div>
                        <div className="cube-image">5</div>
                    </div>
                    <div>
                        <div className="cube-image">6</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CubeComponent;
