import './ContactSection.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../components/Button/Button';

export const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const isFormValid = Object.values(formData).every((val) => val.trim() !== '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2>{t('contact_section_title')}</h2>
        <form>
          <div className="field-group">
            <input
              type="text"
              name="name"
              placeholder={t('contact_section_form_name_label')}
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder={t('contact_section_form_phone_label')}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder={t('contact_section_form_email_label')}
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder={t('contact_section_form_message_label')}
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <Button
            text={t('contact_section_form_button')}
            type="primary"
            disabled={!isFormValid}
          />
        </form>
      </div>
    </section>
  );
};
