import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Settings } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      icon: <Layout size={24} />,
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"]
    },
    {
      title: t('skills.backend'),
      icon: <Database size={24} />,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    },
    {
      title: t('skills.tools'),
      icon: <Settings size={24} />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"]
    },
    {
      title: t('skills.core'),
      icon: <Code2 size={24} />,
      skills: ["Data Structures", "Algorithms", "System Design", "OOP", "Functional Programming"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('skills.title')}
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="skill-header">
                <div className="skill-icon">{category.icon}</div>
                <h3 className="skill-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
