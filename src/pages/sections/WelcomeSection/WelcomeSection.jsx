import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import './WelcomeSection.css';
import { Button } from '../../../components/Button/Button';

export const WelcomeSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

  const slideInLeftVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const slideInRightVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
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

  const titleVariants = {
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

  const underlineVariants = {
    hidden: {
      width: '0%',
    },
    visible: {
      width: '100%',
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.8,
      },
    },
  };

  return (
    <section className="welcome-section" ref={ref}>
      <div className="container">
        {/* Background Elements */}
        <div className="background-elements">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
          <div className="bg-circle circle-3"></div>
          <div className="bg-pattern"></div>
        </div>

        <motion.div
          className="welcome-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Text Content */}
          <motion.div className="welcome-text" variants={slideInLeftVariants}>
            <motion.h2 className="main-title" variants={titleVariants}>
              <motion.span className="title-line" variants={fadeInUpVariants}>
                {t('welcome_section_title')}
              </motion.span>
              <span className="name-highlight">
                <motion.span className="name" variants={fadeInUpVariants}>
                  {t('welcome_section_name')}
                </motion.span>
                <motion.div
                  className="name-underline"
                  variants={underlineVariants}
                ></motion.div>
              </span>
            </motion.h2>

            <motion.h3 className="subtitle" variants={fadeInUpVariants}>
              {t('welcome_section_subtitle')}
            </motion.h3>

            <motion.div
              className="description-content"
              variants={containerVariants}
            >
              <motion.div
                className="description-item"
                variants={fadeInUpVariants}
              >
                <div className="item-icon">
                  <div className="icon-dot"></div>
                </div>
                <p className="description-text">
                  {t('welcome_section_description_1')}
                </p>
              </motion.div>

              <motion.div
                className="description-item"
                variants={fadeInUpVariants}
              >
                <div className="item-icon">
                  <div className="icon-dot"></div>
                </div>
                <p className="description-text">
                  {t('welcome_section_description_2')}
                </p>
              </motion.div>

              <motion.div
                className="description-item"
                variants={fadeInUpVariants}
              >
                <div className="item-icon">
                  <div className="icon-dot"></div>
                </div>
                <p className="description-text">
                  {t('welcome_section_description_3')}
                </p>
              </motion.div>
            </motion.div>

            <motion.div className="cta-section" variants={buttonVariants}>
              <Button
                text={t('welcome_section_button')}
                type="primary"
                className="hero-button"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div className="welcome-image" variants={slideInRightVariants}>
            <div className="image-container">
              <motion.div className="image-frame" variants={fadeInUpVariants}>
                <img
                  src="/images/asmae-nobg.webp"
                  alt="Asmae"
                  loading="lazy"
                  className="profile-image"
                />
                <div className="image-overlay"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
