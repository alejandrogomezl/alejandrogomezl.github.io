import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: t('projects.taskApp.title'),
      description: t('projects.taskApp.description'),
      tech: ["Next.js", "Firebase", "Tailwind"],
      github: "#",
      live: "#",
      image: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"
    },
    {
      title: t('projects.finance.title'),
      description: t('projects.finance.description'),
      tech: ["Vue.js", "D3.js", "Express"],
      github: "#",
      live: "#",
      image: "linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('projects.title')}
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card-image" style={{ background: project.image }}>
                <Folder size={48} color="rgba(255,255,255,0.8)" />
              </div>
              
              <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="card-links">
                  <a href={project.github} className="link-icon" title="View Code">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="link-icon" title="View Live">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
