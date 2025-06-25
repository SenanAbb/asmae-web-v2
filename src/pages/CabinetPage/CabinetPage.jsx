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
        <div className="additional-info">
          <div className="info-block">
            <h2>
              Une formation spécialisée en droit européen et international
            </h2>
            <p>
              Titulaire d’un Master en droit européen et international, j’ai
              complété ma formation à l’École des avocats Aliénor de Bordeaux.
              Ce parcours universitaire m’a permis d’acquérir une solide
              maîtrise des enjeux juridiques à l’échelle nationale et
              internationale. Il constitue le socle de mes compétences,
              notamment dans l’accompagnement des entreprises dans leurs projets
              transfrontaliers. Cette spécialisation m’offre également une
              compréhension fine des problématiques juridiques liées à la
              mobilité des personnes.
            </p>
          </div>

          <div className="info-block">
            <h2>Un parcours professionnel riche et diversifié</h2>
            <p>
              Avant de fonder mon propre cabinet à Pau, j’ai exercé au sein de
              cabinets d’avocats, de l’administration française et d’une
              juridiction administrative. Ces expériences variées m’ont permis
              d’aborder le droit tant du point de vue du conseil que du
              contentieux, et de me familiariser avec les attentes concrètes des
              justiciables comme des institutions. Cette diversité me permet
              aujourd’hui d’adopter une approche pragmatique, réactive et
              adaptée à chaque situation.
            </p>
          </div>

          <div className="info-block">
            <h2>Une structure indépendante au service de vos droits</h2>
            <p>
              En créant mon cabinet, j’ai fait le choix de vous proposer une
              relation directe, personnalisée et transparente. Je suis votre
              unique interlocutrice, disponible pour vous écouter et défendre
              vos intérêts avec rigueur. Ma démarche repose sur la confiance, la
              clarté et l’efficacité. Basée à Pau, j’interviens aussi bien
              localement qu’à distance, grâce à des procédures dématérialisées
              lorsque cela est possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
