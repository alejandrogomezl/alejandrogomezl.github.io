import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

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
              <a href="mailto:info@alejandrogl.es" className="info-icon">
                <Mail size={24} />
              </a>
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
            ref={form}
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="to_name" value="Alejandro" />
            <div className="form-group">
              <input 
                name="from_name"
                type="text" 
                placeholder={t('contact.form.namePlaceholder')} 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                name="from_mail"
                type="email" 
                placeholder={t('contact.form.emailPlaceholder')} 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                name="subject"
                type="text" 
                placeholder={t('contact.form.subjectPlaceholder')} 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                placeholder={t('contact.form.messagePlaceholder')} 
                rows="5" 
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`submit-btn ${status}`} 
              disabled={status === 'sending'}
            >
              {status === 'idle' && (
                <>
                  <span>{t('contact.form.send')}</span>
                  <Send size={18} />
                </>
              )}
              {status === 'sending' && (
                <>
                  <span>{t('contact.form.sending')}</span>
                  <Loader2 size={18} className="animate-spin" />
                </>
              )}
              {status === 'success' && (
                <>
                  <span>{t('contact.form.success')}</span>
                  <CheckCircle size={18} />
                </>
              )}
              {status === 'error' && (
                <>
                  <span>{t('contact.form.error')}</span>
                  <AlertCircle size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
