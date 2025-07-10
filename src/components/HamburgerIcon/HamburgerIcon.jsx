import { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './HamburgerIcon.css';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

export const HamburgerIcon = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const inputRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
    if (inputRef.current) {
      inputRef.current.checked = false;
    }
  };

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    setScrolled(window.scrollY > 0);

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  const handleToggle = () => {
    setOpen(!open);
    if (inputRef.current) {
      inputRef.current.checked = !open;
    }
  };

  const navItems = [
    { to: '/', label: t('navbar_home_label') },
    { to: '/cabinet', label: t('navbar_about_label') },
    { to: '/expertises', label: t('navbar_expertises_label') },
    { to: '/?scrollTo=contact', label: t('navbar_contact_label') },
    { to: '/honoraires', label: t('navbar_honoraires_label') },
  ];

  return (
    <div className="hamburger-container">
      {/* Language Selector */}
      <div className="language-selector-wrapper">
        <LanguageSelector />
      </div>

      {/* Hamburger Menu */}
      <div className={`menuToggle ${scrolled ? 'ham-scrolled' : ''}`}>
        <motion.div
          className="hamburger-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleToggle}
        >
          <input type="checkbox" ref={inputRef} readOnly checked={open} />
          <span
            className={`line line1 ${open ? 'open' : ''} ${
              !scrolled ? 'not-scrolled' : ''
            }`}
          ></span>
          <span
            className={`line line2 ${open ? 'open' : ''} ${
              !scrolled ? 'not-scrolled' : ''
            }`}
          ></span>
          <span
            className={`line line3 ${open ? 'open' : ''} ${
              !scrolled ? 'not-scrolled' : ''
            }`}
          ></span>
        </motion.div>

        {/* Menu Overlay */}
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop */}
              <motion.div
                className="menu-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={handleClose}
              />

              {/* Menu Panel */}
              <motion.div
                className="menu-panel"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {/* Menu Header */}
                <motion.div
                  className="menu-header"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <img
                    src="/images/logo-color.webp"
                    alt="Logo"
                    className="menu-logo"
                  />
                </motion.div>

                {/* Menu Content */}
                <motion.ul
                  className="menu-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.to}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    >
                      <Link
                        to={item.to}
                        onClick={handleClose}
                        className={`menu-link ${
                          location.pathname === item.to ? 'active' : ''
                        }`}
                      >
                        <span className="menu-link-text">{item.label}</span>
                        <div className="menu-link-arrow">→</div>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Menu Footer */}
                <motion.div
                  className="menu-footer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="contact-info">
                    <p>{t('navbar_cta_label')}</p>
                    <a href="tel:+33641228153" className="phone-link">
                      (+33) 6 41 22 81 53
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
