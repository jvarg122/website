import React from 'react';
import cplusplus from './assets/cplusplus.png';
import python from './assets/python.png';
import javascript from './assets/javascript.png';
import HTML from './assets/HTML.png';
import git from './assets/git.png';
import react from './assets/react.png';

function Skills() {
  const gridItems = [
    { src: cplusplus, alt: 'C++', name: 'C++' },
    { src: python, alt: 'Python', name: 'Python' },
    { src: javascript, alt: 'JavaScript', name: 'JavaScript' },
    { src: HTML, alt: 'HTML', name: 'HTML/CSS' },
    { src: react, alt: 'React', name: 'React' },
    { src: git, alt: 'Git', name: 'Git' },
  ];

  return (
    <main>
      <section id="education">
        <div className="titles2">
          <h2>Education</h2>
        </div>
        <div className="education">
          <p><strong>B.S. Computer Science</strong> - University of California, Riverside</p> 
          <p>(2020 - 2024)</p>
        </div>

        <div className="titles2">
          <h2>Skills</h2>
        </div>
        <div className="skills">
          <div className="grid-container2">
            {gridItems.map((item, index) => (
              <div key={index} className="grid-item2">
                <img src={item.src} alt={item.alt} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;
