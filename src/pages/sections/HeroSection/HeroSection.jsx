import { useTranslation } from 'react-i18next';
import { AiFillLinkedin, AiFillMail, AiFillPhone } from 'react-icons/ai';

import './HeroSection.css';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <video src="videos/hero-video.mp4" autoPlay loop muted playsInline>
        <source src="videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="black-overlay"></div>
      <div className="content">
        <div className="title">
          <h1>
            <span>{t('hero_subtitle')}</span> Asmae Kirimov
          </h1>
          <div className="separator"></div>
          <div className="social-links">
            <Link to="https://www.linkedin.com/" target="_blank">
              <AiFillLinkedin size={40} />
            </Link>
            <Link to="mailto:asmaekirimov.avocat@gmail.com" target="_blank">
              <AiFillMail size={40} />
            </Link>
            <Link to="tel:+33 6 41 22 81 53" target="_blank">
              <AiFillPhone size={40} />
            </Link>

            <a href="mailto:asmae@example.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
