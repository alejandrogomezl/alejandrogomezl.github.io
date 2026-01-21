import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.span 
          className="greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm
        </motion.span>
        
        <motion.h1 
          className="name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Alejandro Gomez
        </motion.h1>
        
        <motion.h2 
          className="role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Software Engineer
        </motion.h2>
        
        <motion.p 
          className="description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Building scalable, high-performance web applications with modern technologies. 
          Focused on creating exceptional user experiences.
        </motion.p>

        <motion.div 
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#projects" className="btn btn-primary">View Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </motion.div>

        <motion.div 
          className="social-links"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={24} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={24} /></a>
          <a href="mailto:email@example.com" className="social-icon"><Mail size={24} /></a>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.div>

      <div className="hero-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
    </section>
  );
};

export default Hero;
