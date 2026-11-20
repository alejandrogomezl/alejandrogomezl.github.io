import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Briefcase, Puzzle, Plug, Bot, Server, Check } from 'lucide-react';
import './Projects.css';

const odooAreas = [
  { key: 'consulting', icon: Briefcase, tech: ["Sales", "Purchase", "Inventory", "MRP", "Accounting", "HR"] },
  { key: 'modules', icon: Puzzle, tech: ["Python", "ORM", "OWL", "QWeb", "XML", "PostgreSQL"] },
  { key: 'integrations', icon: Plug, tech: ["REST", "XML-RPC", "JSON-RPC", "Webhooks", "Cron"] },
  { key: 'ai', icon: Bot, tech: ["MCP", "OpenAI", "RAG", "LLM"] },
  { key: 'devops', icon: Server, tech: ["Docker", "Doodba", "OCA", "Nginx", "CI/CD"] }
];

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

        <motion.div
          className="odoo-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={`${base}project-odoo.svg`} alt="" className="odoo-intro-image" />
          <div>
            <h3 className="subsection-title">{t('projects.odoo.title')}</h3>
            <p className="odoo-intro-text">{t('projects.odoo.description')}</p>
          </div>
        </motion.div>

        <div className="odoo-grid">
          {odooAreas.map((area, index) => {
            const Icon = area.icon;
            const highlights = t(`projects.odoo.areas.${area.key}.highlights`, { returnObjects: true });

            return (
              <motion.div
                key={area.key}
                className="odoo-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="odoo-card-header">
                  <div className="odoo-card-icon"><Icon size={22} /></div>
                  <h4 className="odoo-card-title">{t(`projects.odoo.areas.${area.key}.title`)}</h4>
                </div>
                <p className="odoo-card-desc">{t(`projects.odoo.areas.${area.key}.description`)}</p>
                <ul className="odoo-highlights">
                  {Array.isArray(highlights) && highlights.map((item, i) => (
                    <li key={i}><Check size={16} />{item}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {area.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.h3
          className="subsection-title other-projects-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('projects.otherTitle')}
        </motion.h3>

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
