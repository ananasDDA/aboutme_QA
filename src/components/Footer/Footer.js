import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-copyright">
            &copy; {currentYear} Дорохов Даниил. Все права защищены.
          </div>
          <div className="footer-links">
            <a href="https://github.com/ananasDDA" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://t.me/ananasDDA" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="mailto:doroshov.daniil69@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;