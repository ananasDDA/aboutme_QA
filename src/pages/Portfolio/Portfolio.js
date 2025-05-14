import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Автоматизированное тестирование API',
      category: 'automation',
      image: '/images/portfolio/project1.jpg',
      description: 'Фреймворк для автоматизированного тестирования REST API с использованием Python и Pytest.',
      technologies: ['Python', 'Pytest', 'Requests', 'Allure'],
      link: 'https://github.com/ananasDDA/api-testing-framework'
    },
    {
      id: 2,
      title: 'Telegram-бот для мониторинга',
      category: 'development',
      image: '/images/portfolio/project2.jpg',
      description: 'Бот для мониторинга состояния серверов и отправки уведомлений в случае проблем.',
      technologies: ['Python', 'Telegram API', 'Docker', 'PostgreSQL'],
      link: 'https://github.com/ananasDDA/monitoring-bot'
    },
    {
      id: 3,
      title: 'Тестирование производительности веб-приложения',
      category: 'testing',
      image: '/images/portfolio/project3.jpg',
      description: 'Проект по тестированию производительности и нагрузочному тестированию веб-приложения.',
      technologies: ['JMeter', 'Grafana', 'InfluxDB', 'Bash'],
      link: 'https://github.com/ananasDDA/performance-testing'
    },
    {
      id: 4,
      title: 'UI автоматизация с Selenium',
      category: 'automation',
      image: '/images/portfolio/project4.jpg',
      description: 'Фреймворк для автоматизации тестирования пользовательского интерфейса с использованием Selenium и Python.',
      technologies: ['Python', 'Selenium', 'Page Object', 'Jenkins'],
      link: 'https://github.com/ananasDDA/selenium-ui-framework'
    },
    {
      id: 5,
      title: 'Утилита для работы с данными',
      category: 'development',
      image: '/images/portfolio/project5.jpg',
      description: 'Консольная утилита для обработки и анализа больших объемов данных.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Argparse'],
      link: 'https://github.com/ananasDDA/data-processor'
    },
    {
      id: 6,
      title: 'Тестирование мобильного приложения',
      category: 'testing',
      image: '/images/portfolio/project6.jpg',
      description: 'Проект по тестированию мобильного приложения для iOS и Android с использованием Appium.',
      technologies: ['Appium', 'Python', 'BDD', 'CI/CD'],
      link: 'https://github.com/ananasDDA/mobile-testing'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="portfolio-container">
      <h1 className="section-title">Портфолио</h1>
      <p className="section-subtitle">Мои проекты и работы</p>

      <div className="portfolio-filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Все
        </button>
        <button
          className={`filter-btn ${filter === 'automation' ? 'active' : ''}`}
          onClick={() => setFilter('automation')}
        >
          Автоматизация
        </button>
        <button
          className={`filter-btn ${filter === 'development' ? 'active' : ''}`}
          onClick={() => setFilter('development')}
        >
          Разработка
        </button>
        <button
          className={`filter-btn ${filter === 'testing' ? 'active' : ''}`}
          onClick={() => setFilter('testing')}
        >
          Тестирование
        </button>
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map(project => (
          <div className="portfolio-item" key={project.id}>
            <div className="portfolio-img">
              <img src={project.image} alt={project.title} />
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="portfolio-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>Проекты не найдены. Попробуйте изменить фильтр.</p>
        </div>
      )}
    </div>
  );
};

export default Portfolio;