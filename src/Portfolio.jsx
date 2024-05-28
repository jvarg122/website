import React, { useState } from 'react';
import githubLogo from './assets/github-logo.png';

import featherfriends from './assets/featherfriends.png';
import FitHub from './assets/FitHub.png';  // Corrected path
import RedditCrawl from './assets/RedditCrawl.png';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      src: FitHub,
      title: 'FitHub',
      description: 'Developed a full-stack workout tracker and leaderboard app.',
      githubLink: 'https://github.com/Fit-Friends/CS180_FitHub',
      technologies: 'HTML/CSS • JavaScript • React with Expo Go • Django REST Framework'
    },
    {
      src: RedditCrawl,
      title: 'RedditCrawl',
      description: 'A Reddit post collector and search engine I developed.',
      githubLink: 'https://github.com/jvarg122/RedditCrawl',
      technologies: 'Python • PRAW • PyLucene • Flask'
    },
    {
      src: featherfriends,
      title: 'Feather Friends',
      description: 'A bird-themed programming language I collaborated on.',
      githubLink: 'https://github.com/CitrusHappy/cs-152-feather-friends',
      technologies: 'C • Flex • Bison'
    }
  ];

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section id="experience">
      <div className="titles2">
        <h2>Portfolio</h2>
      </div>
      
      <div className="content-container">
        <div className="slideshow-container">
          <a className="prev" onClick={prevSlide}>&#10094;</a>
          <div className="slide active-slide">
            <img src={slides[slideIndex].src} alt={`Slide ${slideIndex + 1}`} />
          </div>
          <a className="next" onClick={nextSlide}>&#10095;</a>
        </div>
        <div className="project-info">
          <h3>{slides[slideIndex].title}</h3>
          <p>{slides[slideIndex].description}</p>
          <p className="technologies">{slides[slideIndex].technologies}</p>
          <a href={slides[slideIndex].githubLink} target="_blank" rel="noopener noreferrer" className="button" style={{ marginRight: '20px' }}>
            <button>
              GitHub
              <img src={githubLogo} alt="GitHub" className="social-logo" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
