import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Skills.css';

// Отдельный компонент для категории навыков
const SkillCategory = ({ category }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      className={`skill-category ${isVisible ? 'animated' : ''}`}
      ref={ref}
    >
      <h2 className="category-title">{category.category}</h2>
      <div className="skills-list">
        {category.skills.map((skill, skillIndex) => (
          <div className="skill-item" key={skillIndex}>
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className={`skill-progress ${isVisible ? 'animated' : ''}`}
                style={{ width: isVisible ? `${skill.level}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      category: 'Тестирование',
      skills: [
        { name: 'Ручное тестирование', level: 95 },
        { name: 'Автоматизация тестирования', level: 85 },
        { name: 'API тестирование', level: 80 },
        { name: 'Нагрузочное тестирование', level: 75 },
        { name: 'Безопасность', level: 70 },
      ]
    },
    {
      category: 'Языки программирования',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 70 },
        { name: 'SQL', level: 75 },
        { name: 'Bash', level: 65 },
      ]
    },
    {
      category: 'Фреймворки и инструменты',
      skills: [
        { name: 'Selenium', level: 85 },
        { name: 'Pytest', level: 90 },
        { name: 'Robot Framework', level: 75 },
        { name: 'Jenkins', level: 70 },
        { name: 'Docker', level: 65 },
        { name: 'Git', level: 80 },
      ]
    },
    {
      category: 'Методологии',
      skills: [
        { name: 'Agile/Scrum', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'TDD', level: 70 },
      ]
    },
  ];

  return (
    <div className="skills-container">
      <h1 className="section-title">Навыки</h1>
      <p className="section-subtitle">Мои технические и профессиональные компетенции</p>

      <div className="skills-content">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Skills;