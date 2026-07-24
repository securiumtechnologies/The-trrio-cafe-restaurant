import React from 'react';
import { MapPin, Phone, Instagram, ExternalLink, Calendar, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenReserve: () => void;
  onOpenOrder: () => void;
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReserve, onOpenOrder, onNavigate }) => {
  const handleNav = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2B211C] text-[#FAF7F2] pt-16 pb-12 border-t border-[#FAF7F2]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Bengali Title (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="font-serif-display text-3xl font-bold tracking-tight text-white mb-1">
              The TRRio
            </h3>
            <div className="font-bengali text-sm text-amber-200/80 mb-4">
              {BUSINESS_INFO.bengaliName}
            </div>
            <p className="text-xs text-[#FAF7F2]/70 leading-relaxed mb-6 max-w-sm">
              Salkia’s premier cafe & dining destination on GT Road. Welcoming you daily for authentic food, handcrafted beverages, and warm hospitality.
            </p>

            <div className="flex items-center space-x-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#C1592A] text-white transition-colors"
                aria-label="Instagram Page"
              >
                <Instagram size={18} />
              </a>
              <a
                href={BUSINESS_INFO.zomatoMenuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#E23744] text-white text-xs font-semibold tracking-wider flex items-center space-x-1.5 transition-colors"
              >
                <span>Zomato</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif-display text-lg font-bold text-white mb-4">
              Pages & Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/80">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#F29F67] transition-colors text-left"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('menu')}
                  className="hover:text-[#F29F67] transition-colors text-left"
                >
                  Food & Beverage Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#F29F67] transition-colors text-left"
                >
                  About Our Cafe
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('visit')}
                  className="hover:text-[#F29F67] transition-colors text-left"
                >
                  Location & Hours
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenReserve}
                  className="text-[#F29F67] hover:underline font-semibold"
                >
                  Reserve a Table →
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenOrder}
                  className="text-[#F29F67] hover:underline font-semibold"
                >
                  Order Online →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-3 text-xs text-[#FAF7F2]/80">
            <h4 className="font-serif-display text-lg font-bold text-white mb-4">
              Visit & Reach Us
            </h4>

            <div className="flex items-start space-x-2.5">
              <MapPin size={16} className="text-[#F29F67] shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address}</span>
            </div>

            <div className="flex items-center space-x-2.5">
              <Phone size={16} className="text-[#F29F67] shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="hover:underline font-medium">
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="pt-2 text-[#FAF7F2]/70">
              <strong className="text-white font-medium">Operating Hours:</strong> {BUSINESS_INFO.hoursNote}
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px]">
              {BUSINESS_INFO.serviceOptions.map((s) => (
                <span key={s.title} className="bg-white/10 px-2.5 py-1 rounded text-white/90">
                  {s.title}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF7F2]/50 gap-4">
          <div>
            © {new Date().getFullYear()} The TRRio Cafe & Restaurant (দি তৃতীয় ক্যাফে & রেস্টুরেন্ট). All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>Made with care for Howrah & Salkia food lovers</span>
            <Heart size={12} className="text-[#C1592A] fill-[#C1592A]" />
          </div>
        </div>

      </div>
    </footer>
  );
};
