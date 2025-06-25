import { useTranslation } from 'react-i18next';
import './WelcomeSection.css';
import { Button } from '../../../components/Button/Button';

export const WelcomeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="welcome-section">
      <div className="container">
        <div className="welcome-content">
          <div className="welcome-text">
            <h2>
              {t('welcome_section_title')}{' '}
              <span className="name">{t('name')}</span>
            </h2>
            <h3>{t('welcome_section_subtitle')}</h3>
            <p>{t('welcome_section_description_1')}</p>
            <p>{t('welcome_section_description_2')}</p>
            <p>{t('welcome_section_description_3')}</p>

            <Button
              text={t('welcome_section_button')}
              type="primary"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
          <img src="/images/asmae-nobg.webp" alt="Asmae" loading="lazy" />
        </div>
      </div>
    </section>
  );
};
