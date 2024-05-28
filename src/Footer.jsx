import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Made in React.js. Deployed via GitHub Pages</p>
      </div>
    </footer>
  );
};

export default Footer;
