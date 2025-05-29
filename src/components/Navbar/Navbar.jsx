import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { HamburgerIcon } from '../HamburgerIcon/HamburgerIcon';
import './Navbar.css';

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  console.log(scrolled);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">
          <img src="/images/logo-color.webp" alt="Logo" />
        </Link>
        <ul>
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
        </ul>
        <div className="right">
          <LanguageSelector />
          <HamburgerIcon />
        </div>
      </div>
    </nav>
  );
}
