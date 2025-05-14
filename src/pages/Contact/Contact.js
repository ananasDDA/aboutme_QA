import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1 className="section-title">Контакты</h1>
      <p className="section-subtitle">Как со мной связаться</p>

      <div className="contacts-content">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p><a href="mailto:dorokhov.daniil69@gmail.com">dorokhov.daniil69@gmail.com</a></p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fab fa-telegram"></i>
            <div>
              <h3>Telegram</h3>
              <p><a href="https://t.me/ananasDDA" target="_blank" rel="noopener noreferrer">@ananasDDA</a></p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fab fa-github"></i>
            <div>
              <h3>GitHub</h3>
              <p><a href="https://github.com/ananasDDA" target="_blank" rel="noopener noreferrer">github.com/ananasDDA</a></p>
            </div>
          </div>
        </div>

        <div className="telegram-bot-section">
          <h2 className="bot-title">Мой pet-проект</h2>
          <p className="telegram-bot-intro">
            У меня также есть небольшой pet-проект, с которым можно ознакомиться по ссылке:
          </p>

          <a href="https://t.me/the_best_resume_bot" target="_blank" rel="noopener noreferrer" className="telegram-bot-card">
            <div className="telegram-bot-content">
              <div className="telegram-bot-icon">
                <i className="fab fa-telegram-plane"></i>
              </div>
              <div className="telegram-bot-info">
                <p className="telegram-bot-description">
                  Это бот-резюме, здесь вы сможете узнать обо мне и моих проектах
                </p>
                <span className="telegram-bot-name">@the_best_resume_bot</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;