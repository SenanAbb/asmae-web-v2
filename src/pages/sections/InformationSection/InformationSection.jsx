import { useTranslation } from 'react-i18next';
import './InformationSection.css';
import { AiFillMail, AiFillPhone } from 'react-icons/ai';
import { BsFillPinMapFill } from 'react-icons/bs';

export const InformationSection = () => {
  const { t } = useTranslation();

  return (
    <section className="information-section">
      <div className="container">
        <h2>{t('information_section_title')}</h2>
        <div className="information-content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2903.8163170685216!2d-0.3741877!3d43.2971682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5649a14ecc3449%3A0x639aef6cf383aa82!2sAsmae%20KIRIMOV!5e0!3m2!1ses!2ses!4v1748599617919!5m2!1ses!2ses"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="contact-info">
            <img src="/images/logo-color.webp" alt="Logo" />
            <div className="info">
              <AiFillPhone size={36} />
              <div className="text">
                <span>{t('information_section_phone_title')}</span>
                <p>(+33) 6 41 22 81 53</p>
              </div>
            </div>
            <div className="info">
              <AiFillMail size={36} />
              <div className="text">
                <span>{t('information_section_email_title')}</span>
                <p>asmaekirimov.avocat@gmail.com</p>
              </div>
            </div>
            <div className="info">
              <BsFillPinMapFill size={36} />
              <div className="text">
                <span>{t('information_section_address_title')}</span>
                <p>22 rue des Cordeliers, 64 000 Pau</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
