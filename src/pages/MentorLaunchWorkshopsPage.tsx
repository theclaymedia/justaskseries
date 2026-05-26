import React from 'react';
import { WorkshopNavbar } from '../components/workshop/WorkshopNavbar';
import { WorkshopHero } from '../components/workshop/WorkshopHero';
import { WorkshopStepsSection } from '../components/workshop/WorkshopStepsSection';
import { WorkshopAboutSection } from '../components/workshop/WorkshopAboutSection';
import { MentoringSystemSection } from '../components/workshop/MentoringSystemSection';
import { PricingSection } from '../components/PricingSection';
import { LeadersSection } from '../components/main/LeadersSection';
import { WorkshopContactSection } from '../components/workshop/WorkshopContactSection';
import { Footer } from '../components/Footer';

export function MentorLaunchWorkshopsPage() {
  return (
    <div className="min-h-screen bg-white font-body text-charcoal-800 selection:bg-brick-200 selection:text-brick-900">
      <WorkshopNavbar />
      <main className="mt-20 [&>section]:py-12 md:[&>section]:py-20">
        <WorkshopHero />
        <WorkshopStepsSection />
        <WorkshopAboutSection />
        <MentoringSystemSection />
        <PricingSection />
        <LeadersSection />
        <WorkshopContactSection />
      </main>
      <Footer />
    </div>
  );
}
