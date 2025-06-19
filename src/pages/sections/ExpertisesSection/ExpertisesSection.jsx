import { useTranslation } from 'react-i18next';
import { Button } from '../../../components/Button/Button';
import './ExpertisesSection.css';
import { useNavigate } from 'react-router-dom';
import CardSlider from '../../../components/CardSlider/CardSlider';

export const ExpertisesSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const expertises = [
    {
      title: t('expertises_section_title_1'),
      subtitle: t('expertises_section_subtitle_1'),
      description: t('expertises_section_description_1'),
      image: '/images/societe.webp',
    },
    {
      title: t('expertises_section_title_2'),
      subtitle: t('expertises_section_subtitle_2'),
      description: t('expertises_section_description_2'),
      image: '/images/etrangers.webp',
    },
    {
      title: t('expertises_section_title_3'),
      subtitle: t('expertises_section_subtitle_3'),
      description: t('expertises_section_description_3'),
      image: '/images/publique.webp',
    },
  ];

  return (
    <section className="expertises-section">
      <div className="container">
        <div className="expertises-container">
          {expertises.map((expertise, index) => (
            <article
              key={index}
              className="expertise"
              onClick={() => navigate('/services')}
            >
              <img src={expertise.image} alt="Expertise" loading="lazy" />
              <div className="overlay"></div>
              <div className="expertise-content">
                <h2>{expertise.title}</h2>
                <div className="hide-content">
                  <h3>{expertise.subtitle}</h3>
                  <p>{expertise.description}</p>
                  <Button
                    text={t('expertises_section_button')}
                    type="primary"
                    onClick={() => navigate('/services')}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
        <CardSlider
          slides={expertises.map((expertise) => ({
            ...expertise,
            onClick: () => navigate('/services'),
            button: (
              <Button
                text={t('expertises_section_button')}
                type="primary"
                onClick={() => navigate('/services')}
              />
            ),
          }))}
        />
      </div>
    </section>
  );
};
