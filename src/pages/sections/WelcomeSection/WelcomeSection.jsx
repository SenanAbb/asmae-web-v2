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
            <p>{t('welcome_section_description')}</p>

            <ul className="benefits">
              <li>{t('welcome_section_benefit_1')}</li>
              <li>{t('welcome_section_benefit_2')}</li>
              <li>{t('welcome_section_benefit_3')}</li>
            </ul>

            <Button
              text={t('welcome_section_button')}
              type="primary"
              onClick={() => {}}
            />
          </div>
          <img src="/images/asmae-nobg.webp" alt="Asmae" loading="lazy" />
        </div>
      </div>
    </section>
  );
};
