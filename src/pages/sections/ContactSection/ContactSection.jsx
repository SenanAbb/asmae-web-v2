import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../components/Button/Button';
import './ContactSection.css';

export const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const isFormValid = Object.values(formData).every((val) => val.trim() !== '');

  const getApiBaseURL = () => {
    return import.meta.env.DEV
      ? import.meta.env.VITE_DEV_API_BASE_URL
      : import.meta.env.VITE_PROD_API_BASE_URL;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setSending(true);
    setError(null);

    try {
      const res = await fetch(`${getApiBaseURL()}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSent(true);
        setFormData({
          name: '',
          lastname: '',
          phone: '',
          email: '',
          message: '',
        });
      } else if (res.status === 429) {
        setError(t('contact_section_form_error_too_many_requests'));
      } else {
        setError(t('contact_section_form_error'));
      }
    } catch (error) {
      console.error(error);
      setError(t('contact_section_form_error'));
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    if (sending) {
      setTimeout(() => {
        setSending(false);
      }, 3000);
    }

    if (sent) {
      setTimeout(() => {
        setSent(false);
      }, 3000);
    }

    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [sending, sent, error]);

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="flex">
          <form onSubmit={handleSubmit}>
            <h2>{t('contact_section_title')}</h2>

            <div className="field-group">
              <div className="group">
                <label htmlFor="name">
                  {t('contact_section_form_name_label')} <span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>

              <div className="group">
                <label htmlFor="lastname">
                  {t('contact_section_form_lastname_label')} <span>*</span>
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="field-group">
              <div className="group">
                <label htmlFor="phone">
                  {t('contact_section_form_phone_label')} <span>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>

              <div className="group">
                <label htmlFor="email">
                  {t('contact_section_form_email_label')} <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="message">
                {t('contact_section_form_message_label')} <span>*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <Button
              text={
                sending
                  ? t('contact_section_form_button_loading')
                  : t('contact_section_form_button')
              }
              type="primary"
              disabled={!isFormValid || sending}
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {sent && (
              <p style={{ color: 'green' }}>
                {t('contact_section_form_success')}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
