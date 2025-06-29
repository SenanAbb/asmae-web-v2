import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineGlobal, AiOutlineDown } from 'react-icons/ai';
import './LanguageSelector.css';

export default function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: t('language_selector_english_label') },
    { code: 'es', label: t('language_selector_spanish_label') },
    { code: 'fr', label: t('language_selector_french_label') },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="language-selector" ref={dropdownRef}>
      <motion.button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <div className="button-content">
          <AiOutlineGlobal className="globe-icon" size={18} />
          <span className="current-language">
            <span className="language-code">
              {currentLanguage.code.toUpperCase()}
            </span>
          </span>
          <motion.div
            className="dropdown-arrow"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <AiOutlineDown size={14} />
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="language-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="dropdown-content">
              {languages.map((language, index) => (
                <motion.button
                  key={language.code}
                  className={`language-option ${
                    language.code === i18n.language ? 'active' : ''
                  }`}
                  onClick={() => handleLanguageChange(language.code)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  whileHover={{ backgroundColor: 'rgba(37, 77, 50, 0.1)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="option-label">{language.label}</span>
                  <span className="option-code">
                    {language.code.toUpperCase()}
                  </span>
                  {language.code === i18n.language && (
                    <div className="active-indicator"></div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
