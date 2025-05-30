import { Link } from 'react-router-dom';
import './Footer.css';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { BsFillPinMapFill } from 'react-icons/bs';

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="description">
            <div className="description-content">
              <div className="title">
                <img src="/images/logo-negro.webp" alt="Logo negro" />
                <h4>Asmae Kirimov</h4>
              </div>
              <div className="description-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quibusdam.
                </p>
              </div>
              <div className="social">
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
              </div>
            </div>
            <p>&copy; {year} Asmae Kirimov</p>
          </div>
          <div className="links">
            <h4>{t('footer_section_links_label')}</h4>
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
          </div>
          <div className="contact">
            <h4>{t('footer_section_contact_label')}</h4>
            <ul>
              <li>
                <AiFillPhone size={28} /> <p>(+33) 6 41 22 81 53</p>
              </li>
              <li>
                <AiFillMail size={28} /> <p>asmaekirimov.avocat@gmail.com</p>
              </li>
              <li>
                <BsFillPinMapFill size={28} />
                <p> 22 rue des Cordeliers, 64 000 Pau</p>
              </li>
            </ul>
          </div>
          <div className="time">
            <h4>{t('footer_section_time_label')}</h4>
            <ul>
              <li>
                <p>{t('footer_section_monday_friday_label')}</p>
                <p>12:00 - 19:00</p>
              </li>
              <li>
                <p>{t('footer_section_saturday_label')}</p>
                <p>12:00 - 15:00</p>
              </li>
              <li>
                <p>{t('footer_section_sunday_label')}</p>
                <p>{t('footer_section_closed_label')}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
