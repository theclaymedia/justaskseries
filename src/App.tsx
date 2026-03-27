import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { MainPage } from './pages/MainPage';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/book" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>);

}