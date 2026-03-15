import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MaleSection from './pages/MaleSection';
import FemaleSection from './pages/FemaleSection';
import ZumbaSection from './pages/ZumbaSection';
import StrengthTraining from './pages/StrengthTraining';
import CalorieMeter from './pages/CalorieMeter';
import JoinSection from './pages/JoinSection';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gymBlack text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/male/*" element={<MaleSection />} />
            <Route path="/female/*" element={<FemaleSection />} />
            <Route path="/zumba" element={<ZumbaSection />} />
            <Route path="/strength" element={<StrengthTraining />} />
            <Route path="/calories" element={<CalorieMeter />} />
            <Route path="/join" element={<JoinSection />} />
          </Routes>
        </main>
        <footer className="py-8 border-t border-white border-opacity-10 text-center text-gray-500">
          <p>&copy; 2026 Gym Freaks. Build Your Power.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
