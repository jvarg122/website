import React, { useState, useEffect } from 'react';
import menu from './assets/menu.png';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [responsive, setResponsive] = useState(false);

  const handleClick = (event, sectionId) => {
    event.preventDefault();
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    //Close
    setResponsive(false);
  };

  const toggleResponsive = () => {
    setResponsive(!responsive);
  };

  const handleScroll = () => {
    const sections = ['about', 'education', 'experience', 'interests', 'contact'];
    let currentSection = '';
    
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
          currentSection = section;
          break;
        }
      }
    }

    if (currentSection && currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (

    <header>
      <nav>
        <div className={`topnav ${responsive ? 'responsive' : ''}`} id="myTopnav">
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => handleClick(e, 'about')}
          >
            About
          </a>
          <a
            href="#education"
            className={activeSection === 'education' ? 'active' : ''}
            onClick={(e) => handleClick(e, 'education')}
          >
            Education/Skills
          </a>
          <a
            href="#experience"
            className={activeSection === 'experience' ? 'active' : ''}
            onClick={(e) => handleClick(e, 'experience')}
          >
            Portfolio
          </a>
          <a
            href="#interests"
            className={activeSection === 'interests' ? 'active' : ''}
            onClick={(e) => handleClick(e, 'interests')}
          >
            Interests
          </a>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => handleClick(e, 'contact')}
          >
            Contact
          </a>
          <a href="#about" className="icon" onClick={toggleResponsive}>
            <img src={menu} alt="Menu" style={{ width: '24px', height: '24px' }} />
          </a>
        </div>
      </nav>
    </header>
    
  );
}

export default Navbar;
