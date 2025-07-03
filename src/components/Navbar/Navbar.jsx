import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { HamburgerIcon } from '../HamburgerIcon/HamburgerIcon';
import './Navbar.css';

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(isHome ? window.scrollY > 10 : true);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  const navItems = [
    { to: '/', label: t('navbar_home_label') },
    { to: '/cabinet', label: t('navbar_about_label') },
    { to: '/expertises', label: t('navbar_expertises_label') },
    // { to: '/honoraires', label: t('navbar_honoraires_label') },
    { to: '/?scrollTo=contact', label: t('navbar_contact_label') },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          <motion.div
            className="logo-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {scrolled ? (
              <img
                src="/images/logo-color.webp"
                alt="Logo"
                className="logo-image"
              />
            ) : (
              <img
                src="/images/logo-negro.webp"
                alt="Logo"
                className="logo-image logo-inverted"
                style={{ filter: 'invert(1)' }}
              />
            )}
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <motion.li
              key={item.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={item.to}
                className={`nav-link ${
                  location.pathname === item.to ? 'active' : ''
                }`}
              >
                <span className="nav-text">{item.label}</span>
                <div className="nav-underline"></div>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="navbar-right">
          <motion.div
            className="language-wrapper"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <LanguageSelector />
          </motion.div>
          <motion.div
            className="hamburger-wrapper"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <HamburgerIcon />
          </motion.div>
        </div>
      </div>

      {/* Background blur effect */}
      <div className="navbar-backdrop"></div>
    </motion.nav>
  );
}
