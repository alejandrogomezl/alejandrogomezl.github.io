import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Globe } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I am a passionate Software Engineer with a strong foundation in building modern web applications. 
            My journey in tech is driven by a curiosity to understand how things work and a desire to create 
            solutions that make a difference.
          </p>
          <p className="about-text">
            With expertise in both frontend and backend development, I enjoy tackling complex problems 
            and turning ideas into robust, scalable software. I thrive in collaborative environments 
            and am always eager to learn new technologies.
          </p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="about-visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="code-window">
            <div className="window-header">
              <div className="window-dot dot-red"></div>
              <div className="window-dot dot-yellow"></div>
              <div className="window-dot dot-green"></div>
              <span className="window-title">developer.json</span>
            </div>
            <div className="window-content">
              <pre>
                <code>
<span className="json-key">"name"</span>: <span className="json-string">"Alejandro Gomez"</span>,
<br/>
<span className="json-key">"role"</span>: <span className="json-string">"Software Engineer"</span>,
<br/>
<span className="json-key">"location"</span>: <span className="json-string">"Madrid, Spain"</span>,
<br/>
<span className="json-key">"traits"</span>: [
<br/>
  <span className="json-string">"Creative"</span>,
<br/>
  <span className="json-string">"Problem Solver"</span>,
<br/>
  <span className="json-string">"Detail Oriented"</span>
<br/>
],
<br/>
<span className="json-key">"hobbies"</span>: [
<br/>
  <span className="json-string">"Coding"</span>,
<br/>
  <span className="json-string">"Gaming"</span>,
<br/>
  <span className="json-string">"Design"</span>
<br/>
]</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
