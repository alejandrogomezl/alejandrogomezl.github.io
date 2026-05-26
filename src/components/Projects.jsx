import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();
  const [expandedProject, setExpandedProject] = useState(null);

  const base = import.meta.env.BASE_URL;

  const projects = [
    {
      title: t('projects.vandio.title'),
      description: t('projects.vandio.description'),
      tech: ["Next.js", "TypeScript", "AI", "WhatsApp API"],
      github: null,
      live: "https://vandio.es/",
      image: `${base}project-vandio.svg`
    },
    {
      title: t('projects.rutas.title'),
      description: t('projects.rutas.description'),
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      github: null,
      live: null,
      image: `${base}project-rutas.svg`
    },
    {
      title: t('projects.odoo.title'),
      description: t('projects.odoo.description'),
      tech: ["Python", "PostgreSQL", "XML", "JavaScript"],
      github: null,
      live: null,
      image: `${base}project-odoo.svg`
    },
    {
      title: t('projects.nebstala.title'),
      description: t('projects.nebstala.description'),
      tech: ["Python", "Odoo", "MQTT", "Node.js"],
      github: null,
      live: null,
      image: `${base}project-nebstala.svg`
    },
    {
      title: t('projects.homelab.title'),
      description: t('projects.homelab.description'),
      tech: ["Docker", "Proxmox", "Nginx", "Linux"],
      github: null,
      live: null,
      image: `${base}project-homelab.svg`
    },
    {
      title: t('projects.unitree.title'),
      description: t('projects.unitree.description'),
      tech: ["C++", "ROS2", "Python", "IoT"],
      github: null,
      live: null,
      image: `${base}project-unitree.svg`
    },
    {
      title: t('projects.meshtastic.title'),
      description: t('projects.meshtastic.description'),
      tech: ["LoRa", "C++", "Python", "IoT"],
      github: null,
      live: null,
      image: `${base}project-meshtastic.svg`
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
          {projects.map((project, index) => {
            const isExpanded = expandedProject === index;

            return (
            <motion.div
              key={index}
              className={`project-card ${isExpanded ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              onClick={() => setExpandedProject(isExpanded ? null : index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setExpandedProject(isExpanded ? null : index);
                }
              }}
            >
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              <div className="card-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <ChevronDown className="project-toggle-icon" size={20} />
                </div>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                {project.live && (
                  <div className="card-links" onClick={(e) => e.stopPropagation()}>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-icon" title="View Live">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
