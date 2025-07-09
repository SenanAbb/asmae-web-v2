import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function RegroupementFamilial() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const backgroundImageUrl = '/images/regroupement-familial.webp';

  return (
    <section className="service-section">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        aria-label={t('services_page_subfamily_2_2')}
      >
        <div className="hero-overlay" />
        <h1 className="hero-title">{t('services_page_subfamily_2_2')}</h1>
      </div>

      <div className="container">
        <nav className="nav-buttons">
          <button
            className="back-button"
            onClick={() =>
              navigate('/expertises', { state: { scrollToId: 'etrangers' } })
            }
            aria-label={t('back_to_services')}
          >
            ← {t('back_to_services')}
          </button>
          <button
            className="contact-button"
            onClick={() => navigate('/?scrollTo=contact')}
          >
            {t('contact_section_title')}
          </button>
        </nav>

        <h2 className="service-subtitle">
          {t('services_page_subfamily_2_2_title')}
        </h2>
        <p className="service-intro">
          {t('services_page_subfamily_2_2_subtitle')}
        </p>

        <ul className="service-list">
          {[1, 2, 3].map((num) => (
            <li key={num}>
              <strong>
                {t(`services_page_subfamily_2_2_list_${num}_title`)}
              </strong>
              {t(`services_page_subfamily_2_2_list_${num}_description`)}
            </li>
          ))}
        </ul>

        <h2 className="service-conclusion-title">
          {t('services_page_subfamily_2_2_footer_title')}
        </h2>
      </div>
    </section>
  );
}
