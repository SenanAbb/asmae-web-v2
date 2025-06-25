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
        <h2 className="title">{t('advantages_section_title')}</h2>
        <p className="subtitle">{t('advantages_section_subtitle')}</p>

        <div className="strengths-grid">
          <div className="strength-card">
            <AiOutlineFieldTime className="icon" />
            <h3 className="card-title">
              {t('advantages_section_item_1_title')}
            </h3>
            <p className="card-text">
              {t('advantages_section_item_1_description')}
            </p>
          </div>

          <div className="strength-card">
            <AiOutlineUser className="icon" />
            <h3 className="card-title">
              {t('advantages_section_item_2_title')}
            </h3>
            <p className="card-text">
              {t('advantages_section_item_2_description')}
            </p>
          </div>

          <div className="strength-card">
            <AiOutlineEye className="icon" />
            <h3 className="card-title">
              {t('advantages_section_item_3_title')}
            </h3>
            <p className="card-text">
              {t('advantages_section_item_3_description')}
            </p>
          </div>

          <div className="strength-card">
            <AiOutlineThunderbolt className="icon" />
            <h3 className="card-title">
              {t('advantages_section_item_4_title')}
            </h3>
            <p className="card-text">
              {t('advantages_section_item_4_description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
