import { useTranslation } from 'react-i18next';

export default function AcquisitionsCessions() {
  const { t } = useTranslation();

  return (
    <section className="service-section">
      <div className="container">
        <h1 className="service-title">{t('services_page_subfamily_1_2')}</h1>
        <h2 className="service-subtitle">
          {t('services_page_subfamily_1_title')}
        </h2>
        <h3 className="service-intro">
          {t('services_page_subfamily_2_subtitle')}
        </h3>

        <ul className="service-list">
          <li>
            <strong>{t('services_page_subfamily_2_list_1_title')}</strong>
            {t('services_page_subfamily_2_list_1_description')}
          </li>
          <li>
            <strong>{t('services_page_subfamily_2_list_2_title')}</strong>
            {t('services_page_subfamily_2_list_2_description')}
          </li>
          <li>
            <strong>{t('services_page_subfamily_2_list_3_title')}</strong>
            {t('services_page_subfamily_2_list_3_description')}
          </li>
        </ul>

        <h2 className="service-conclusion-title">
          {t('services_page_subfamily_2_footer_title')}
        </h2>
        <p className="service-conclusion-text">
          {t('services_page_subfamily_2_footer_description')}
        </p>
      </div>
    </section>
  );
}
