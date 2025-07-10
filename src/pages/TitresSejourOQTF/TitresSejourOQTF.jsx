import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function TitresSejourOQTF() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const backgroundImageUrl = '/images/titres-sejour-oqtf.webp';

  return (
    <section className="service-section">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        aria-label={t('services_page_subfamily_2_4')}
      >
        <div className="hero-overlay" />
        <h1 className="hero-title">{t('services_page_subfamily_2_4')}</h1>
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
          {t('services_page_subfamily_2_4_title')}
        </h2>
        <p className="service-intro">
          {t('services_page_subfamily_2_4_subtitle')}
        </p>

        <ul className="service-list">
          {[1, 2, 3].map((num) => (
            <li key={num}>
              <strong>
                {t(`services_page_subfamily_2_4_list_${num}_title`)}
              </strong>
              {num === 1 ? (
                <p>
                  {t(`services_page_subfamily_2_4_list_${num}_description_1`)}
                  <br />
                  {t(`services_page_subfamily_2_4_list_${num}_description_2`)}
                </p>
              ) : (
                <p>
                  {t(`services_page_subfamily_2_4_list_${num}_description`)}
                </p>
              )}
            </li>
          ))}
        </ul>

        <h2 className="service-conclusion-title">
          {t('services_page_subfamily_2_4_footer_title')}
        </h2>
      </div>
    </section>
  );
}
