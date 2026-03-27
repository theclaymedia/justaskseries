import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { WhyNowSection } from '../components/WhyNowSection';
import { PreOrderIncludesSection } from '../components/PreOrderIncludesSection';
import { WorkshopSection } from '../components/WorkshopSection';
import { AboutBookSection } from '../components/AboutBookSection';
import { PairingSection } from '../components/PairingSection';
import { PricingSection } from '../components/PricingSection';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { Footer } from '../components/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-body text-charcoal-800 selection:bg-brick-200 selection:text-brick-900">
      <Navbar />
      {/* mt-20: Pushes the content down so it starts AFTER the navbar.
          [&>section]:py-10: Keeps the space between all other sections tight.
      */}
      <main className="mt-20 [&>section]:py-10 md:[&>section]:py-16">
        <HeroSection />
        <WhyNowSection />
        <PreOrderIncludesSection />
        <WorkshopSection />
        <AboutBookSection />
        <PairingSection />
        <PricingSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
