import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
      setScrolled(true); // fondo blanco al salir de home
      return;
    }

    setScrolled(window.scrollY > 0);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Ejecutar una vez al volver a la home
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">
          {scrolled ? (
            <img src="/images/logo-color.webp" alt="Logo" />
          ) : (
            <img
              src="/images/logo-negro.webp"
              alt="Logo"
              style={{ filter: 'invert(1)' }}
            />
          )}
        </Link>
        <ul>
          <li>
            <Link to="/">{t('navbar_home_label')}</Link>
          </li>
          <li>
            <Link to="/cabinet">{t('navbar_about_label')}</Link>
          </li>
          <li>
            <Link to="/services">{t('navbar_expertises_label')}</Link>
          </li>
          <li>
            <Link to={'/?scrollTo=contact'}>{t('navbar_contact_label')}</Link>
          </li>
        </ul>
        <div className="right">
          <LanguageSelector />
          <HamburgerIcon />
        </div>
      </div>
    </nav>
  );
}
