/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './HamburgerIcon.css';
import { Link } from 'react-router-dom';

export const HamburgerIcon = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const inputRef = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setOpen(!open);
    inputRef.current.checked = !open;
  };

  return (
    <div className={`menuToggle ${scrolled ? 'ham-scrolled' : ''}`}>
      <input
        type="checkbox"
        ref={inputRef}
        readOnly
        checked={open}
        onClick={handleToggle}
      />
      <span></span>
      <span></span>
      <span></span>

      {/* Expansión circular */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            initial={{ translateX: '100%' }}
            animate={{ translateX: 0 }}
            exit={{ translateX: '100%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <motion.img src="/images/logo-negro.webp" alt="Logo" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido */}
      <AnimatePresence>
        {open && (
          <motion.ul
            className="menuContent"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: { delay: 0.6 },
            }}
            exit={{ opacity: 0, translateY: 20 }}
          >
            <li>
              <Link to="#">{t('navbar_home_label')}</Link>
            </li>
            <li>
              <Link to="#">{t('navbar_about_label')}</Link>
            </li>
            <li>
              <Link to="#">{t('navbar_expertises_label')}</Link>
            </li>
            <li>
              <Link to="#">{t('navbar_contact_label')}</Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
