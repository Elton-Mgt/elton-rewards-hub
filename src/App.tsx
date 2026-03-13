import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { Fuel } from 'lucide-react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { OffersPage } from './pages/OffersPage';
import { PartnerApplicationPage } from './pages/PartnerApplicationPage';
import { CardApplicationPage } from './pages/CardApplicationPage';
import { FaqPage } from './pages/FaqPage';

function AppContent() {
  const [cardActive, setCardActive] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [theme, setTheme] = useState<'white' | 'black'>('black');
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const simulatePurchase = () => {
    setCardActive(true);
    setDaysRemaining(30);
    toast.success("Plein effectué avec succès !", {
      icon: <Fuel className="w-5 h-5 text-green-500" />,
      description: "Vos réductions partenaires sont activées pour 30 jours.",
    });
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'white' ? 'black' : 'white');
  };

  const isDark = theme === 'black';

  return (
    <div className={`min-h-screen transition-colors duration-300 selection:bg-orange-100 selection:text-orange-900 ${isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
      <Toaster position="top-center" richColors theme={isDark ? 'dark' : 'light'} />
      <Navbar cardActive={cardActive} theme={theme} toggleTheme={toggleTheme} />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              cardActive={cardActive} 
              daysRemaining={daysRemaining} 
              simulatePurchase={simulatePurchase} 
              theme={theme} 
            />
          } 
        />
        <Route 
          path="/offres" 
          element={
            <OffersPage theme={theme} cardActive={cardActive} />
          } 
        />
        <Route 
          path="/postuler" 
          element={
            <PartnerApplicationPage theme={theme} />
          } 
        />
        <Route 
          path="/obtenir-carte" 
          element={
            <CardApplicationPage theme={theme} />
          } 
        />
        <Route 
          path="/faq" 
          element={
            <FaqPage theme={theme} />
          } 
        />
      </Routes>

      <Footer theme={theme} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}