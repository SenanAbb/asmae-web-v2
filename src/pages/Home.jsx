import { ExpertisesSection } from './sections/ExpertisesSection/ExpertisesSection';
import { HeroSection } from './sections/HeroSection/HeroSection';
import { InformationSection } from './sections/InformationSection/InformationSection';
import { WelcomeSection } from './sections/WelcomeSection/WelcomeSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ExpertisesSection />
      <InformationSection />
    </>
  );
}
