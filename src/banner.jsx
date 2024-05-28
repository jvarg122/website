import React from 'react';

const Banner = ({ title, subtitle }) => {
  return (
    <section id="banner" className="banner">
        
      <ul className="background">
        <li style={{animationDelay: '1s'}}></li>
        <li style={{animationDelay: '5s'}}></li>
        <li style={{animationDelay: '4s'}}></li>
        <li style={{animationDelay: '13s'}}></li>
        <li style={{animationDelay: '4s'}}></li>
        <li style={{animationDelay: '4s'}}></li>
        <li style={{animationDelay: '6s'}}></li>
        <li style={{animationDelay: '7s'}}></li>
        <li style={{animationDelay: '2s'}}></li>
        <li style={{animationDelay: '16s'}}></li>
      </ul>
      <div className="banner-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default Banner;
