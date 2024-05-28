import React, { useState, useEffect } from 'react';
import meImage from './assets/me.jpg';
import githubLogo from './assets/github-logo.png';
import linkedinLogo from './assets/linkedin-logo.png';
import resumePDF from './assets/resume.pdf'; 

const About = () => {
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeTimer = setTimeout(() => {
      setIsTyping(false); 
      const eraseTimer = setTimeout(() => {
        setTypingText(''); 
        setIsTyping(true); 
      }, 1000);
      return () => clearTimeout(eraseTimer);
    }, 10000);
    return () => clearTimeout(typeTimer);
  }, [isTyping]);

  useEffect(() => {
    const name = 'Josue Vargas | Welcome to my website!';
    if (isTyping) {
      const typingTimer = setTimeout(() => {
        setTypingText((prevText) => {
          if (prevText.length === name.length) return prevText;
          return name.substring(0, prevText.length + 1);
        });
      }, 100);
      return () => clearTimeout(typingTimer);
    }
  }, [typingText, isTyping]);

  const openResume = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <main>
      <section id="about">
        
          <div className="titles3">
            <h2>{typingText}|</h2>
          </div>
        
        <div className="about">
          <div className="profile-container">
            <img src={meImage} alt="Your Name" className="profile-image" />
            <div className="titles2">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="banner-text">
            <p>
              Hello! My name is <strong>Josue</strong> and I'm a 4th year <strong>Computer Science student</strong> at UCR. I'm deeply passionate about coding and software development, particularly in creating innovative solutions and enhancing user experience. I have a strong interest in both back-end development and front-end design, enjoying the blend of logic and creativity. In my spare time, I like to explore new programming languages and frameworks, always eager to expand my technical repertoire.
            </p>
          </div>
          <div className="social-buttons">
            <div className="button-group">
              <a href="https://github.com/jvarg122" target="_blank" rel="noopener noreferrer" className="button" style={{ marginRight: '20px' }}>
                <button>
                  GitHub
                  <img src={githubLogo} alt="GitHub" className="social-logo" />
                </button>
              </a>
              <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGu0FF5qtxA5QAAAY-03r-AyiyXQDUnzhExbCwiu-2k_cgPG6xwq0Pd1-LAg9UvjLe6u3lyBKnK8rttsXIMHs3v4ECjiD9G9ldidtIDaulpnuz4wIySeyZEIdug3a5XMvL34AI=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fjosue-vargas-7368791b9" target="_blank" rel="noopener noreferrer" className="button">
                <button>
                  LinkedIn
                  <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
                </button>
              </a>
            </div>
            <div className="resume-button">
              <button onClick={openResume} className="button">
                Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
