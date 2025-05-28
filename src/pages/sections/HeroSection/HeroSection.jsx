import { useTranslation } from 'react-i18next';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from 'react-icons/ai';

import './HeroSection.css';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <video src="videos/hero-video.mp4" autoPlay loop muted playsinline>
        <source src="videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="black-overlay"></div>
      <div className="content">
        <div className="title">
          <p>{t('hero_subtitle')}</p>
          <h1>Asmae Kirimov</h1>
          <div className="separator"></div>
          <div className="social-links">
            <Link to="https://www.facebook.com/" target="_blank">
              <AiFillFacebook size={28} />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <AiFillInstagram size={28} />
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank">
              <AiFillLinkedin size={28} />
            </Link>

            {/* !! TO CHANGE EMAIL */}
            <Link to="mailto:asmae@example.com" target="_blank">
              <AiFillMail size={28} />
            </Link>

            <a href="mailto:asmae@example.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <img src="images/asmae-nobg.webp" alt="Asmae" />
      </div>
    </section>
  );
};
