import {
  AiOutlineEye,
  AiOutlineFieldTime,
  AiOutlineThunderbolt,
  AiOutlineUser,
} from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import './AdvantagesSection.css';

export const AdvantagesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="cabinet-strengths">
      <div className="container">
        {/* Header con logo */}
        <div className="section-header">
          <div className="logo-container">
            <img src="/images/logo-color.webp" alt="Logo" className="brand-logo" />
          </div>
          <h2 className="title">{t('advantages_section_title')}</h2>
          <p className="subtitle">{t('advantages_section_subtitle')}</p>
        </div>

        {/* Grid de ventajas */}
        <div className="strengths-grid">
          <div className="strength-card card-1">
            <div className="card-header">
              <div className="icon-wrapper">
                <AiOutlineFieldTime className="icon" />
              </div>
              <div className="card-number">01</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">
                {t('advantages_section_item_1_title')}
              </h3>
              <p className="card-text">
                {t('advantages_section_item_1_description')}
              </p>
            </div>
            <div className="card-decoration"></div>
          </div>

          <div className="strength-card card-2">
            <div className="card-header">
              <div className="icon-wrapper">
                <AiOutlineUser className="icon" />
              </div>
              <div className="card-number">02</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">
                {t('advantages_section_item_2_title')}
              </h3>
              <p className="card-text">
                {t('advantages_section_item_2_description')}
              </p>
            </div>
            <div className="card-decoration"></div>
          </div>

          <div className="strength-card card-3">
            <div className="card-header">
              <div className="icon-wrapper">
                <AiOutlineEye className="icon" />
              </div>
              <div className="card-number">03</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">
                {t('advantages_section_item_3_title')}
              </h3>
              <p className="card-text">
                {t('advantages_section_item_3_description')}
              </p>
            </div>
            <div className="card-decoration"></div>
          </div>

          <div className="strength-card card-4">
            <div className="card-header">
              <div className="icon-wrapper">
                <AiOutlineThunderbolt className="icon" />
              </div>
              <div className="card-number">04</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">
                {t('advantages_section_item_4_title')}
              </h3>
              <p className="card-text">
                {t('advantages_section_item_4_description')}
              </p>
            </div>
            <div className="card-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
