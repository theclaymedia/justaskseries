import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { MainPage } from './pages/MainPage';
import { MentorLaunchWorkshopsPage } from './pages/MentorLaunchWorkshopsPage';
import { BookTourLandingPage } from './pages/BookTourLandingPage';

// Reset scroll to the top whenever the route changes (react-router v6 keeps
// the previous scroll position by default, so cross-page links could land
// mid-page). Honors in-page hash links by leaving those to the browser.
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/book" element={<LandingPage />} />
        <Route path="/mentor-launch-workshops" element={<MentorLaunchWorkshopsPage />} />
        <Route path="/book-tour" element={<BookTourLandingPage />} />
      </Routes>
    </BrowserRouter>);

}