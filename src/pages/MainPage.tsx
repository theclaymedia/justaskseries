import React from 'react';
import { MainNavbar } from '../components/main/MainNavbar';
import { MainHero } from '../components/main/MainHero';
import { ValuePropsSection } from '../components/main/ValuePropsSection';
import { JamsPortalSection } from '../components/main/JamsPortalSection';
import { ContentSection } from '../components/main/ContentSection';
import { MentorBenefitsSection } from '../components/main/MentorBenefitsSection';
import { TestimonialsSection } from '../components/main/TestimonialsSection';
import { ContentIncludesSection } from '../components/main/ContentIncludesSection';
import { LeadersSection } from '../components/main/LeadersSection';
import { ContactSection } from '../components/main/ContactSection';
import { Footer } from '../components/Footer';

export function MainPage() {
  return (
    <div className="min-h-screen bg-white font-body text-charcoal-800 selection:bg-brick-200 selection:text-brick-900">
      <MainNavbar />
      
      {/* mt-20: Prevents the Hero from going under the fixed Navbar.
          [&>section]:py-12: Forces all sections to have a tighter vertical gap.
          md:[&>section]:py-20: Slightly more breathing room on desktop, but still tighter than default.
      */}
      <main className="mt-20 [&>section]:py-12 md:[&>section]:py-20">
        <MainHero />
        <ValuePropsSection />
        <JamsPortalSection />
        <ContentSection />
        <MentorBenefitsSection />
        <TestimonialsSection />
        <ContentIncludesSection />
        <LeadersSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
