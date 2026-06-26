import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { MainPage } from './pages/MainPage';
import { MentorLaunchWorkshopsPage } from './pages/MentorLaunchWorkshopsPage';
import { BookTourLandingPage } from './pages/BookTourLandingPage';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/book" element={<LandingPage />} />
        <Route path="/mentor-launch-workshops" element={<MentorLaunchWorkshopsPage />} />
        <Route path="/book-tour" element={<BookTourLandingPage />} />
      </Routes>
    </BrowserRouter>);

}