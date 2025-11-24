import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Requirements from '../components/Requirements';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/callToAction';

interface HomeProps {
  onApplyClick: () => void;
}

export default function Home({ onApplyClick }: HomeProps) {
  return (
    <div>
      <Hero onApplyClick={onApplyClick} />
      <Features />
      <HowItWorks />
      <Requirements />
      <Testimonials />
      <CallToAction onApplyClick={onApplyClick} />
    </div>
  );
}
