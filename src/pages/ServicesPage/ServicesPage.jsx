import { useTranslation } from 'react-i18next';
import './ServicesPage.css';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <section className="services-page">
      <div className="container">
        <h1>{t('services_page_title')}</h1>
        <p className="services-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit...
        </p>

        <div className="services-group">
          <h2 className="services-family">{t('services_page_family_1')}</h2>
          <ul className="services-list">
            <li>
              <Link
                className="service-link"
                to="/services/developpement-strategie"
              >
                {t('services_page_subfamily_1_1')}
              </Link>
            </li>
            <li>
              <Link
                className="service-link"
                to="/services/acquisitions-cessions"
              >
                {t('services_page_subfamily_1_2')}
              </Link>
            </li>
            <li>
              <Link className="service-link" to="/services/droit-commercial">
                {t('services_page_subfamily_1_3')}
              </Link>
            </li>
            <li>
              <Link
                className="service-link"
                to="/services/droit-fiscal-patrimonial"
              >
                {t('services_page_subfamily_1_4')}
              </Link>
            </li>
          </ul>
        </div>

        <div className="services-group">
          <h2 className="services-family">
            <Link className="service-link" to="/services/droit-etrangers">
              {t('services_page_family_2')}
            </Link>
          </h2>
        </div>

        <div className="services-group">
          <h2 className="services-family">
            <Link className="service-link" to="/services/fonction-publique">
              {t('services_page_family_3')}
            </Link>
          </h2>
        </div>
      </div>
    </section>
  );
}
