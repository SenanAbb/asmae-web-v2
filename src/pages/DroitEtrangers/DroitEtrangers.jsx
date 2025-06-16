import { useTranslation } from 'react-i18next';

export default function DroitEtrangers() {
  const { t } = useTranslation();

  return (
    <section className="service-section">
      <div className="container">
        <h1 className="service-title">{t('services_page_family_2')}</h1>
        <h2 className="service-subtitle">
          {t('services_page_family_2_text_1')}
        </h2>
        <h3 className="service-intro">{t('services_page_family_2_text_2')}</h3>

        <ul className="service-list">
          <li>{t('services_page_family_2_list_1')}</li>
          <li>{t('services_page_family_2_list_2')}</li>
          <li>{t('services_page_family_2_list_3')}</li>
          <li>{t('services_page_family_2_list_4')}</li>
          <li>{t('services_page_family_2_list_5')}</li>
          <li>{t('services_page_family_2_list_6')}</li>
        </ul>

        <p className="service-conclusion-text">
          {t('services_page_family_2_footer')}
        </p>
      </div>
    </section>
  );
}
