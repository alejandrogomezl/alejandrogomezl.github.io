import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="contact-subtitle">
            {t('contact.subtitle')}
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
                <h3>{t('contact.emailMe')}</h3>
                <a href="mailto:info@alejandrogl.es">info@alejandrogl.es</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div>
                <h3>{t('contact.location')}</h3>
                <p>Albacete, Spain</p>
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
              <input type="text" placeholder={t('contact.form.namePlaceholder')} required />
            </div>
            <div className="form-group">
              <input type="email" placeholder={t('contact.form.emailPlaceholder')} required />
            </div>
            <div className="form-group">
              <input type="text" placeholder={t('contact.form.subjectPlaceholder')} required />
            </div>
            <div className="form-group">
              <textarea placeholder={t('contact.form.messagePlaceholder')} rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <span>{t('contact.form.send')}</span>
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
