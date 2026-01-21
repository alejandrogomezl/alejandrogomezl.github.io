import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="info-item">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div>
                <h3>Email Me</h3>
                <a href="mailto:hello@example.com">hello@example.com</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div>
                <h3>Location</h3>
                <p>Madrid, Spain</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <div>
                <h3>Call Me</h3>
                <p>+34 123 456 789</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
