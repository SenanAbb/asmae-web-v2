import { useTranslation } from 'react-i18next';

export default function FonctionPublique() {
  const { t } = useTranslation();

  return (
    <section className="service-section">
      <div className="container">
        <h1 className="service-title">{t('services_page_family_3')}</h1>
        <h2 className="service-intro">
          {t('services_page_family_3_text_1')}
        </h2>

        <ul className="service-list">
          <li>{t('services_page_family_3_list_1')}</li>
          <li>{t('services_page_family_3_list_2')}</li>
          <li>{t('services_page_family_3_list_3')}</li>
          <li>{t('services_page_family_3_list_4')}</li>
          <li>{t('services_page_family_3_list_5')}</li>
          <li>{t('services_page_family_3_list_6')}</li>
          <li>{t('services_page_family_3_list_7')}</li>
          <li>{t('services_page_family_3_list_8')}</li>
        </ul>

        <p className="service-conclusion-text">
          {t('services_page_family_3_footer')}
        </p>
      </div>
    </section>
  );
}
