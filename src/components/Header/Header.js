import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="name">Дорохов Даниил</span>
          <span className="position">QA Engineer</span>
        </Link>

        <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>
                Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experience" className={`nav-link ${isActive('/experience')}`} onClick={closeMenu}>
                Опыт работы
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className={`nav-link ${isActive('/skills')}`} onClick={closeMenu}>
                Навыки
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;