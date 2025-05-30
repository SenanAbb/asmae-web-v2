import { useTranslation } from 'react-i18next';
import { AiOutlineGlobal } from 'react-icons/ai';
import './LanguageSelector.css';

export default function LanguageSelector() {
  const { t, i18n } = useTranslation();

  return (
    <div className="language-selector">
      <span className="icon">
        <AiOutlineGlobal size={20} />
      </span>
      <select
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">{t('language_selector_english_label')}</option>
        <option value="es">{t('language_selector_spanish_label')}</option>
        <option value="fr">{t('language_selector_french_label')}</option>
      </select>
    </div>
  );
}
