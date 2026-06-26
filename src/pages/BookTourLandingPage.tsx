import React from 'react';
import { BookTourNavbar } from '../components/booktour/BookTourNavbar';
import { BookTourHero } from '../components/booktour/BookTourHero';
import { BookTourWhyMattersSection } from '../components/booktour/BookTourWhyMattersSection';
import { BookTourWhatYouGetSection } from '../components/booktour/BookTourWhatYouGetSection';
import { BookTourScheduleSection } from '../components/booktour/BookTourScheduleSection';
import { BookTourGuidesReserveSection } from '../components/booktour/BookTourGuidesReserveSection';
import { BookTourJourneySection } from '../components/booktour/BookTourJourneySection';
import { BookTourFinalCtaSection } from '../components/booktour/BookTourFinalCtaSection';
import { Footer } from '../components/Footer';

export function BookTourLandingPage() {
  return (
    <div className="min-h-screen bg-white font-body text-charcoal-800 selection:bg-green-200 selection:text-green-900">
      <BookTourNavbar />
      <main>
        <BookTourHero />
        <BookTourWhyMattersSection />
        <BookTourWhatYouGetSection />
        <BookTourScheduleSection />
        <BookTourGuidesReserveSection />
        <BookTourJourneySection />
        <BookTourFinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
