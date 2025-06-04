import { Separator } from '../components/Separator/Separator';
import { ContactSection } from './sections/ContactSection/ContactSection';
import { ExpertisesSection } from './sections/ExpertisesSection/ExpertisesSection';
import { HeroSection } from './sections/HeroSection/HeroSection';
import { InformationSection } from './sections/InformationSection/InformationSection';
import { ReviewsSection } from './sections/ReviewsSection/ReviewsSection';
import { WelcomeSection } from './sections/WelcomeSection/WelcomeSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <Separator />
      <ExpertisesSection />
      <Separator />
      <InformationSection />
      <Separator />
      <ReviewsSection />
      <Separator />
      <ContactSection />
    </>
  );
}
