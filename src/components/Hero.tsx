import React from 'react';
import { Star, MapPin, Clock, ArrowRight, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReserve: () => void;
  onViewMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReserve, onViewMenu }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Photography with Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={BUSINESS_INFO.heroImage}
          alt="The TRRio Cafe & Restaurant Interior Ambience"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B211C] via-[#2B211C]/75 to-[#2B211C]/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-[#FAF7F2]">
        {/* Rating & Location Eyebrow */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-[#FAF7F2]/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6 text-xs sm:text-sm">
          <div className="flex items-center space-x-1.5 text-amber-400 font-semibold">
            <Star size={16} className="fill-amber-400" />
            <span>{BUSINESS_INFO.rating}</span>
            <span className="text-white/70 font-normal">({BUSINESS_INFO.reviewCount} reviews)</span>
          </div>
          <span className="text-white/40">•</span>
          <span className="text-white/90 font-medium">{BUSINESS_INFO.priceRange}</span>
          <span className="text-white/40 hidden sm:inline">•</span>
          <div className="hidden sm:flex items-center space-x-1 text-white/90">
            <MapPin size={14} className="text-[#C1592A]" />
            <span>Salkia, Howrah</span>
          </div>
        </div>

        {/* Bengali Accent Title */}
        <div className="font-bengali text-xl sm:text-2xl md:text-3xl text-amber-200/90 tracking-wide mb-2">
          {BUSINESS_INFO.bengaliName}
        </div>

        {/* English Main Headline */}
        <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          The TRRio <br className="hidden sm:inline" />
          <span className="text-[#F29F67] italic font-normal">Cafe & Restaurant</span>
        </h1>

        {/* Subtitle / Value proposition */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#FAF7F2]/90 font-light leading-relaxed mb-8">
          Salkia’s cherished culinary hideaway on GT Road. Serving freshly crafted Bengali delicacies, authentic Indo-Chinese, clay-oven kebabs, and handcrafted artisanal coffees.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <button
            onClick={onOpenReserve}
            className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-[#C1592A] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#a6481f] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 group"
          >
            <span>Reserve a Table</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onViewMenu}
            className="w-full sm:w-auto px-8 py-3.5 rounded-md border-2 border-white/40 text-white font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-[#2B211C] backdrop-blur-xs transition-all duration-300"
          >
            View Menu
          </button>
        </div>

        {/* Hours Note */}
        <div className="inline-flex items-center space-x-2 text-xs sm:text-sm text-white/80 bg-black/30 backdrop-blur-xs px-3 py-1.5 rounded-md">
          <Clock size={14} className="text-[#F29F67]" />
          <span>Hours: {BUSINESS_INFO.hoursNote}</span>
        </div>
      </div>

      {/* Down Arrow Scroll Cue */}
      <a
        href="#intro"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce p-2"
        aria-label="Scroll to content"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};
