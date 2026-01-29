import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import RegistrationPage from './pages/RegistrationPage';

import PaymentSuccess from './pages/RegistrationSuccessful';
import SpeakerDetails from './pages/SpeakerDetails';
import Gallery from './pages/Gallery';
import Sponsors from './pages/Sponsors';
import HealthSummit from './pages/HealthSummit';
import AgricSummit from './pages/AgricSummit';
import Visas from './pages/Visas';
import CharterFlight from './pages/CharterFlight';
import Volunteers from './pages/Volunteers';
import Concierge from './pages/Concierge';


function App() {
  return (
    // <Router>
    <Router basename="/aacis">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/payment-successful" element={< PaymentSuccess />} />
        <Route path="/speaker-detail" element={< SpeakerDetails />} />
        <Route path="/gallery" element={< Gallery />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/health-summit" element={<HealthSummit />} />
        <Route path="/agric-summit" element={<AgricSummit />} />
        <Route path="/visas" element={<Visas />} />
        <Route path="/charter-flight" element={<CharterFlight />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/concierge" element={<Concierge />} />
      </Routes>
    </Router>
  );
}

export default App;
