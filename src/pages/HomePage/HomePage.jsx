import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ContactSection } from '../sections/ContactSection/ContactSection';
import { ExpertisesSection } from '../sections/ExpertisesSection/ExpertisesSection';
import { HeroSection } from '../sections/HeroSection/HeroSection';
import { InformationSection } from '../sections/InformationSection/InformationSection';
import { ReviewsSection } from '../sections/ReviewsSection/ReviewsSection';
import { WelcomeSection } from '../sections/WelcomeSection/WelcomeSection';
import { AdvantagesSection } from '../sections/AdvantagesSection/AdvantagesSection';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scrollTo');
    window.history.replaceState(null, '', '/');

    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ExpertisesSection />
      <AdvantagesSection />
      <InformationSection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
