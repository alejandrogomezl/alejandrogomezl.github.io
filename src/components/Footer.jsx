import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">
          © {new Date().getFullYear()} Alejandro Gomez. All rights reserved.
        </p>
        <p className="built-with">
          Built with <span className="react">React</span> & <Heart size={14} className="heart-icon" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
