import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Utensils, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReserve: () => void;
  onOpenOrder: () => void;
  activePage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReserve,
  onOpenOrder,
  activePage,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Menu', page: 'menu' },
    { label: 'About Us', page: 'about' },
    { label: 'Visit Us', page: 'visit' },
  ];

  const handleNavClick = (page: string) => {
    setMobileMenuOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSolidHeader = scrolled || activePage !== 'home';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolidHeader
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#2B211C]/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex flex-col text-left focus:outline-hidden cursor-pointer"
          >
            <span className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-[#2B211C] group-hover:text-[#C1592A] transition-colors">
              The TRRio
            </span>
            <span className="font-bengali text-xs tracking-wider text-[#2B211C]/70 -mt-1">
              {BUSINESS_INFO.bengaliName}
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activePage === link.page;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 cursor-pointer ${
                    isActive ? 'text-[#C1592A]' : 'text-[#2B211C]/80 hover:text-[#C1592A]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C1592A] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenOrder}
              className="px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-md border border-[#2B211C]/20 text-[#2B211C] hover:bg-[#2B211C] hover:text-[#FAF7F2] transition-all duration-200"
            >
              Order Online
            </button>
            <button
              onClick={onOpenReserve}
              className="px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-md bg-[#C1592A] text-white hover:bg-[#a6481f] shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenReserve}
              className="px-3 py-1.5 text-xs font-semibold rounded bg-[#C1592A] text-white"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#2B211C] hover:bg-[#E5DDD3]/50 focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#2B211C]/10 px-4 pt-3 pb-6 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-4 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.page)}
                className={`text-lg font-serif-display font-medium text-left py-1 border-b border-[#2B211C]/5 transition-colors ${
                  activePage === link.page ? 'text-[#C1592A] font-bold' : 'text-[#2B211C] hover:text-[#C1592A]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full py-2.5 text-xs uppercase tracking-wider font-semibold rounded border border-[#2B211C]/30 text-[#2B211C] flex items-center justify-center space-x-2"
              >
                <Utensils size={14} />
                <span>Order Online</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReserve();
                }}
                className="w-full py-2.5 text-xs uppercase tracking-wider font-semibold rounded bg-[#C1592A] text-white flex items-center justify-center space-x-2 shadow-xs"
              >
                <Calendar size={14} />
                <span>Reserve a Table</span>
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full py-2.5 text-xs uppercase tracking-wider font-semibold rounded bg-[#2B211C] text-[#FAF7F2] flex items-center justify-center space-x-2"
              >
                <Phone size={14} />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
