import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">Дорохов Даниил</h1>
          <h2 className="home-subtitle">QA Engineer / Python Developer</h2>
          <p className="home-description">
            Опытный инженер по тестированию ПО с более чем 3-летним опытом работы в IT-индустрии.
            Специализируюсь на автоматизированном и ручном тестировании, разработке на Python и создании
            Telegram-ботов.
          </p>
          <div className="home-buttons">
            <Link to="/contact" className="btn btn-primary">
              Связаться со мной
            </Link>
            <div className="resume-downloads">
              <a
                href="/Dorokhov_Daniil_QA_ru.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Резюме RU
              </a>
              <a
                href="/Dorokhov_Daniil_QA_eng.pdf"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume EN
              </a>
            </div>
          </div>
          <div className="home-social">
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
        <div className="home-image">
          {/* Здесь можно добавить твое фото */}
          <div className="image-placeholder">
            <i className="fas fa-user-circle"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;