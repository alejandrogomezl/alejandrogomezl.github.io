import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">
          © {new Date().getFullYear()} Alejandro Gomez. {t('footer.rights')}
        </p>
        <p className="built-with">
          {t('footer.builtWith')} <span className="react">React</span> & <Heart size={14} className="heart-icon" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
