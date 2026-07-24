import React from 'react';
import { Hero } from '../components/Hero';
import { IntroStrip } from '../components/IntroStrip';
import { HighlightsRow } from '../components/HighlightsRow';
import { SignatureTeaser } from '../components/SignatureTeaser';
import { InstagramSection } from '../components/InstagramSection';
import { MapPin, Phone, ArrowRight, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface HomePageProps {
  onOpenReserve: () => void;
  onOpenOrder: () => void;
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenReserve,
  onOpenOrder,
  onNavigate,
}) => {
  return (
    <div className="animate-fade-in">
      {/* 1. Hero Section */}
      <Hero
        onOpenReserve={onOpenReserve}
        onViewMenu={() => onNavigate('menu')}
      />

      {/* 2. Intro Strip */}
      <IntroStrip />

      {/* 3. Highlights Row */}
      <HighlightsRow />

      {/* 4. Signature Dishes Teaser */}
      <SignatureTeaser onViewFullMenu={() => onNavigate('menu')} />

      {/* 5. Quick Visit Teaser */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#2B211C]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F4EFE6] rounded-2xl p-8 sm:p-12 border border-[#2B211C]/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C1592A] block mb-2">
                Visit Us in Salkia
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#2B211C] mb-3">
                Ready for a memorable meal?
              </h2>
              <p className="text-xs sm:text-sm text-[#2B211C]/75 leading-relaxed mb-4">
                Join us on GT Road for a cozy dining experience, or call ahead for drive-through pickup and doorstep delivery.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#2B211C]">
                <div className="flex items-center space-x-1.5">
                  <MapPin size={16} className="text-[#C1592A]" />
                  <span>349 & 350/1, GT Rd, Salkia</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Phone size={16} className="text-[#C1592A]" />
                  <span>{BUSINESS_INFO.phone}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={onOpenReserve}
                className="px-6 py-3.5 rounded-lg bg-[#C1592A] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#a6481f] transition-all shadow-xs flex items-center justify-center space-x-2"
              >
                <Calendar size={15} />
                <span>Reserve Table</span>
              </button>
              <button
                onClick={() => onNavigate('visit')}
                className="px-6 py-3.5 rounded-lg border border-[#2B211C]/30 text-[#2B211C] hover:bg-[#2B211C] hover:text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center space-x-2"
              >
                <span>View Full Details</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Instagram Table & Poster Showcase */}
      <InstagramSection />
    </div>
  );
};
