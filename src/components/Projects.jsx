import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, payment gateway, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and drag-and-drop interface.",
    tech: ["Next.js", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
    image: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"
  },
  {
    title: "Finance Dashboard",
    description: "Data visualization dashboard for tracking personal expenses and investments.",
    tech: ["Vue.js", "D3.js", "Express"],
    github: "#",
    live: "#",
    image: "linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
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
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
