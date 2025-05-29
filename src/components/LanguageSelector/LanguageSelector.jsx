import { useTranslation } from 'react-i18next';
import { AiOutlineGlobal } from 'react-icons/ai';
import { useEffect } from 'react';
import './LanguageSelector.css';

export default function LanguageSelector() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Idioma del navegador, puede venir con region: ej: "es-ES"
    const browserLang = navigator.language.split('-')[0];

    // Idiomas soportados
    const supportedLanguages = ['en', 'es', 'fr'];

    // Si el idioma del navegador está soportado, úsalo, si no, usa 'fr' por defecto
    const langToUse = supportedLanguages.includes(browserLang)
      ? browserLang
      : 'fr';

    // Cambiar idioma sólo si no es el mismo para evitar render innecesario
    if (i18n.language !== langToUse) {
      i18n.changeLanguage(langToUse);
    }
  }, [i18n]);

  return (
    <div className="language-selector">
      <span className="icon">
        <AiOutlineGlobal size={20} />{' '}
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
