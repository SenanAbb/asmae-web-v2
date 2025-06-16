import { useTranslation } from 'react-i18next';

export default function DroitCommercial() {
  const { t } = useTranslation();

  return (
    <section className="service-section">
      <div className="container">
        <h1 className="service-title">{t('services_page_subfamily_1_3')}</h1>
        <h2 className="service-subtitle">
          {t('services_page_subfamily_3_title')}
        </h2>
        <h3 className="service-intro">
          {t('services_page_subfamily_3_subtitle')}
        </h3>

        <ul className="service-list">
          <li>
            <strong>{t('services_page_subfamily_3_list_1_title')}</strong>
            {t('services_page_subfamily_3_list_1_description')}
          </li>
          <li>
            <strong>{t('services_page_subfamily_3_list_2_title')}</strong>
            {t('services_page_subfamily_3_list_2_description')}
          </li>
          <li>
            <strong>{t('services_page_subfamily_3_list_3_title')}</strong>
            {t('services_page_subfamily_3_list_3_description')}
          </li>
          <li>
            <strong>{t('services_page_subfamily_3_list_4_title')}</strong>
            {t('services_page_subfamily_3_list_4_description')}
          </li>
          <li>
            <strong>{t('services_page_subfamily_3_list_5_title')}</strong>
            {t('services_page_subfamily_3_list_5_description')}
          </li>
          <li>
            <strong>{t('services_page_subfamily_3_list_6_title')}</strong>
            {t('services_page_subfamily_3_list_6_description')}
          </li>
          <li>
            <strong>{t('services_page_subfamily_3_list_7_title')}</strong>
            {t('services_page_subfamily_3_list_7_description')}
          </li>
        </ul>

        <h2 className="service-conclusion-title">
          {t('services_page_subfamily_3_footer_title')}
        </h2>
      </div>
    </section>
  );
}
