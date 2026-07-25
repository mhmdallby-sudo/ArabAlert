import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AlertSettings from './pages/AlertSettings';
import ColorManager from './pages/ColorManager';
import FontManager from './pages/FontManager';
import DonationAnimation from './pages/DonationAnimation';
import Preview from './pages/Preview';
import Clock from './components/Clock';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [alertSettings, setAlertSettings] = useState({
    title: 'تبرع جديد!',
    message: 'شكراً على التبرع {name}',
    duration: 5,
    sound: true,
    animation: 'popIn',
    position: 'top-right'
  });

  const [colors, setColors] = useState({
    primary: '#ff006e',
    secondary: '#8338ec',
    background: '#1a1a2e',
    text: '#ffffff',
    accent: '#ffbe0b'
  });

  const [fonts, setFonts] = useState({
    title: 'Arial',
    message: 'Arial',
    titleSize: 32,
    messageSize: 20
  });

  const [donation, setDonation] = useState({
    animationType: 'coins',
    speed: 'normal',
    particleCount: 20,
    sound: true
  });

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'alerts':
        return <AlertSettings alertSettings={alertSettings} setAlertSettings={setAlertSettings} />;
      case 'colors':
        return <ColorManager colors={colors} setColors={setColors} />;
      case 'fonts':
        return <FontManager fonts={fonts} setFonts={setFonts} />;
      case 'donation':
        return <DonationAnimation donation={donation} setDonation={setDonation} />;
      case 'preview':
        return <Preview alertSettings={alertSettings} colors={colors} fonts={fonts} />;
      case 'clock':
        return <Clock />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="main-content">
        <div className="page-container">
          {renderPage()}
        </div>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
