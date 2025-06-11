import { useTranslation } from 'react-i18next';
import './CabinetPage.css';

export default function CabinetPage() {
  const { t } = useTranslation();

  return (
    <section className="cabinet-page">
      <div className="container">
        <div className="flex">
          <div className="left">
            <h1>
              <span>{t('hero_subtitle')}</span> {t('name')}
            </h1>
            <div className="description">
              <p>{t('cabinet_page_description_1')}</p>
              <p>{t('cabinet_page_description_2')}</p>
              <p>{t('cabinet_page_description_3')}</p>
            </div>
          </div>
          <img src="/images/asmae-cabinet-image.webp" alt="Asmae" />
        </div>
      </div>
    </section>
  );
}
