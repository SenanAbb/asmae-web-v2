import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  AiOutlineArrowRight,
  AiFillBank,
  AiOutlineGlobal,
  AiOutlineUser,
} from 'react-icons/ai';
import './ServicesPage.css';
import React from 'react';

const servicesData = [
  {
    familyKey: 'services_page_family_1',
    familyDesc: 'services_page_family_1_description',
    icon: AiFillBank,
    color: 'primary',
    links: [
      {
        to: '/expertises/developpement-strategie',
        labelKey: 'services_page_subfamily_1_1',
      },
      {
        to: '/expertises/acquisitions-cessions',
        labelKey: 'services_page_subfamily_1_2',
      },
      {
        to: '/expertises/droit-commercial',
        labelKey: 'services_page_subfamily_1_3',
      },
      {
        to: '/expertises/droit-fiscal-patrimonial',
        labelKey: 'services_page_subfamily_1_4',
      },
    ],
  },
  {
    familyKey: 'services_page_family_2',
    familyDesc: 'services_page_family_2_description',
    icon: AiOutlineGlobal,
    color: 'secondary',
    links: [
      { to: '/expertises/visa', labelKey: 'services_page_subfamily_2_1' },
      {
        to: '/expertises/regroupement-familial',
        labelKey: 'services_page_subfamily_2_2',
      },
      { to: '/expertises/asile-CNDA', labelKey: 'services_page_subfamily_2_3' },
      {
        to: '/expertises/sejour-OQTF',
        labelKey: 'services_page_subfamily_2_4',
      },
    ],
  },
  {
    familyKey: 'services_page_family_3',
    familyDesc: 'services_page_family_3_description',
    icon: AiOutlineUser,
    color: 'primary-light',
    links: [
      {
        to: '/expertises/procedure-disciplinaire',
        labelKey: 'services_page_subfamily_3_1',
      },
      {
        to: '/expertises/harcelement-moral',
        labelKey: 'services_page_subfamily_3_2',
      },
      {
        to: '/expertises/maladie-accident',
        labelKey: 'services_page_subfamily_3_3',
      },
    ],
  },
];

export default function ServicesPage() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Trigger animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const slideInVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const shouldAnimate = hasLoaded || isInView;

  return (
    <section
      className="services-page"
      ref={ref}
      role="main"
      aria-label={t('services_page_title')}
    >
      {/* Background Elements */}
      <div className="background-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
        <div className="bg-pattern"></div>
      </div>

      <div className="container">
        {/* Header Section */}
        <motion.div
          className="page-header"
          variants={containerVariants}
          initial="hidden"
          animate={shouldAnimate ? 'visible' : 'hidden'}
        >
          <motion.div className="header-content" variants={fadeInUpVariants}>
            <div className="logo-container">
              <img
                src="/images/logo-color.webp"
                alt="Logo"
                className="brand-logo"
              />
            </div>
            <h1 className="page-title">{t('services_page_main_title')}</h1>
            <p className="page-subtitle">{t('services_page_main_subtitle')}</p>
            <div className="title-decoration"></div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={shouldAnimate ? 'visible' : 'hidden'}
        >
          {servicesData.map(
            ({ familyKey, familyDesc, icon, color, links }, index) => (
              <motion.div
                key={familyKey}
                className={`service-group ${color}`}
                variants={fadeInUpVariants}
                transition={{ delay: index * 0.2 }}
              >
                <div className="service-header">
                  <div className="icon-wrapper">
                    {React.createElement(icon, { className: 'service-icon' })}
                  </div>
                  <div className="header-content">
                    <h2 className="service-title">{t(familyKey)}</h2>
                    <p className="service-description">{t(familyDesc)}</p>
                  </div>
                  <div className="service-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="service-content">
                  <motion.ul
                    className="services-list"
                    variants={containerVariants}
                  >
                    {links.map(({ to, labelKey }, linkIndex) => (
                      <motion.li
                        key={to}
                        variants={slideInVariants}
                        transition={{ delay: linkIndex * 0.1 }}
                      >
                        <Link className="service-link" to={to}>
                          <span className="link-text">{t(labelKey)}</span>
                          <AiOutlineArrowRight className="link-arrow" />
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                <div className="service-decoration"></div>
              </motion.div>
            )
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="cta-section"
          variants={fadeInUpVariants}
          initial="hidden"
          animate={shouldAnimate ? 'visible' : 'hidden'}
        >
          <div className="cta-content">
            <div className="cta-header">
              <h3>{t('services_page_cta_title')}</h3>
              <p>{t('services_page_cta_subtitle')}</p>
            </div>
            <div className="cta-actions">
              <a href="tel:+33641228153" className="cta-button primary">
                {t('services_page_cta_call')}
              </a>
              <a
                href="mailto:asmaekirimov.avocat@gmail.com"
                className="cta-button secondary"
              >
                {t('services_page_cta_email')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
