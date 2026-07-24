import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { OrderOnlineModal } from './components/OrderOnlineModal';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { VisitPage } from './pages/VisitPage';

export default function App() {
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [activePage, setActivePage] = useState<string>('home');

  // Handle URL hash sync or initial page load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'menu', 'about', 'visit'].includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    setActivePage(page);
    window.location.hash = page;
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B211C] flex flex-col selection:bg-[#C1592A] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenReserve={() => setReserveModalOpen(true)}
        onOpenOrder={() => setOrderModalOpen(true)}
        activePage={activePage}
        onNavigate={navigateTo}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomePage
            onOpenReserve={() => setReserveModalOpen(true)}
            onOpenOrder={() => setOrderModalOpen(true)}
            onNavigate={navigateTo}
          />
        )}

        {activePage === 'menu' && (
          <MenuPage
            onOpenReserve={() => setReserveModalOpen(true)}
            onOpenOrder={() => setOrderModalOpen(true)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenReserve={() => setReserveModalOpen(true)}
          />
        )}

        {activePage === 'visit' && (
          <VisitPage
            onOpenReserve={() => setReserveModalOpen(true)}
            onOpenOrder={() => setOrderModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenReserve={() => setReserveModalOpen(true)}
        onOpenOrder={() => setOrderModalOpen(true)}
        onNavigate={navigateTo}
      />

      {/* Interactive Modals */}
      <ReservationModal
        isOpen={reserveModalOpen}
        onClose={() => setReserveModalOpen(false)}
      />

      <OrderOnlineModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />
    </div>
  );
}
