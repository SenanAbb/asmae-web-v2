import { useTranslation } from 'react-i18next';
import './ServicesPage.css';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    familyKey: 'services_page_family_1',
    familyDesc: 'services_page_family_1_description',
    links: [
      {
        to: '/services/developpement-strategie',
        labelKey: 'services_page_subfamily_1_1',
      },
      {
        to: '/services/acquisitions-cessions',
        labelKey: 'services_page_subfamily_1_2',
      },
      {
        to: '/services/droit-commercial',
        labelKey: 'services_page_subfamily_1_3',
      },
      {
        to: '/services/droit-fiscal-patrimonial',
        labelKey: 'services_page_subfamily_1_4',
      },
    ],
  },
  {
    familyKey: 'services_page_family_2',
    familyDesc: 'services_page_family_2_description',
    links: [
      { to: '/services/visa', labelKey: 'services_page_subfamily_2_1' },
      {
        to: '/services/regroupement-familial',
        labelKey: 'services_page_subfamily_2_2',
      },
      { to: '/services/asile-CNDA', labelKey: 'services_page_subfamily_2_3' },
      { to: '/services/sejour-OQTF', labelKey: 'services_page_subfamily_2_4' },
    ],
  },
  {
    familyKey: 'services_page_family_3',
    familyDesc: 'services_page_family_3_description',
    links: [
      {
        to: '/services/procedure-disciplinaire',
        labelKey: 'services_page_subfamily_3_1',
      },
      {
        to: '/services/harcelement-moral',
        labelKey: 'services_page_subfamily_3_2',
      },
      {
        to: '/services/maladie-accident',
        labelKey: 'services_page_subfamily_3_3',
      },
    ],
  },
];

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <section
      className="services-page"
      role="main"
      aria-label={t('services_page_title')}
    >
      <div className="container">
        <h1>{t('services_page_title')}</h1>
        <p className="services-description">{t('services_page_description')}</p>

        {servicesData.map(({ familyKey, familyDesc, links }) => (
          <div className="services-group" key={familyKey}>
            <h2 className="services-family">{t(familyKey)}</h2>
            <div className="services-content">
              <p className="family-description">{t(familyDesc)}</p>
              <ul className="services-list">
                {links.map(({ to, labelKey }) => (
                  <li key={to}>
                    <Link className="service-link" to={to}>
                      {t(labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
