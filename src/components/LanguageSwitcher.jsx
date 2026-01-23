import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="language-switcher-container">
      <div 
        className="language-toggle" 
        onClick={toggleLanguage}
        aria-label="Toggle Language"
      >
        <div className="language-labels">
          <span className={`lang-label ${i18n.language === 'en' ? 'active' : ''}`}>EN</span>
        </div>
        <div className={`toggle-track ${i18n.language}`}>
          <motion.div 
            className="toggle-pill"
            layout
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
          />
        </div>
        <div className="language-labels">
          <span className={`lang-label ${i18n.language === 'es' ? 'active' : ''}`}>ES</span>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
