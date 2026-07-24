import React from 'react';
import { Heart, ShieldCheck, DollarSign, Award, ArrowRight, Star, Quote } from 'lucide-react';
import { BUSINESS_INFO, REVIEWS } from '../data/restaurantData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenReserve: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenReserve }) => {
  const values = [
    {
      title: 'Quality Ingredients',
      icon: <Award size={24} className="text-[#C1592A]" />,
      desc: 'Fresh local produce, fragrant basmati, and hand-ground spices in every single kitchen preparation.'
    },
    {
      title: 'Warm Hospitality',
      icon: <Heart size={24} className="text-[#C1592A]" />,
      desc: 'Generous service designed to make every diner feel like an honored guest in our home.'
    },
    {
      title: 'LGBTQ+ Friendly',
      icon: <ShieldCheck size={24} className="text-[#C1592A]" />,
      desc: 'A safe, respectful, and inclusive sanctuary where everyone can unwind and belong.'
    },
    {
      title: 'Accessible Pricing',
      icon: <DollarSign size={24} className="text-[#C1592A]" />,
      desc: 'Premium dining standards at honest, accessible rates (₹200–1,200 per person).'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#FAF7F2] min-h-screen animate-fade-in">
      {/* Page Header */}
      <div className="bg-[#2B211C] text-[#FAF7F2] py-16 px-4 sm:px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#F29F67] block mb-2">
            Hospitality & Ethos
          </span>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-sm sm:text-base text-[#FAF7F2]/80 max-w-2xl mx-auto leading-relaxed font-light">
            Discover the story behind Salkia's favorite neighborhood dining sanctuary on GT Road.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Images Stack */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-[#2B211C]/10">
              <img
                src={BUSINESS_INFO.heroImage}
                alt="The TRRio Cafe Dining Ambience"
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Overlapping secondary image card */}
            <div className="absolute -bottom-8 -right-4 sm:bottom-[-20px] sm:right-4 z-20 w-48 sm:w-60 rounded-xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] hidden sm:block">
              <img
                src={BUSINESS_INFO.drinksImage}
                alt="Handcrafted Coffee and Drinks"
                className="w-full h-40 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Rating floating tag */}
            <div className="absolute top-4 left-4 z-20 bg-[#FAF7F2]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#2B211C]/10 shadow-lg">
              <div className="font-serif-display text-2xl font-bold text-[#2B211C]">
                4.8 ★
              </div>
              <div className="text-[11px] text-[#2B211C]/70">
                336 Verified Google Reviews
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:pl-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C1592A] block mb-2">
              Salkia's Culinary Haven
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#2B211C] font-bold mb-6 leading-tight">
              Honest flavors, thoughtful details, and an open table for all.
            </h2>

            <p className="text-sm sm:text-base text-[#2B211C]/80 leading-relaxed mb-4">
              At <strong className="text-[#2B211C]">The TRRio Cafe & Restaurant</strong> (দি তৃতীয় ক্যাফে & রেস্টুরেন্ট), hospitality is centered around quiet comfort and generous culinary standards. Located along the bustling GT Road in Salkia, Howrah, our space brings together local Bengali dining roots, Indo-Chinese favorites, clay-oven tandoor specials, and modern cafe creations.
            </p>

            <p className="text-sm sm:text-base text-[#2B211C]/80 leading-relaxed mb-6">
              Whether you are meeting friends over a fresh Hazelnut Cappuccino, enjoying a quiet weekend family lunch with Dum Biryani, or driving through for a quick bite, every visit is served with warmth and unpretentious care.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('menu')}
                className="px-6 py-3 rounded-md bg-[#2B211C] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider hover:bg-[#C1592A] transition-colors duration-300 inline-flex items-center space-x-2 group"
              >
                <span>Explore Full Menu</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenReserve}
                className="px-6 py-3 rounded-md border border-[#2B211C]/30 text-[#2B211C] font-semibold text-xs uppercase tracking-wider hover:bg-[#2B211C] hover:text-[#FAF7F2] transition-colors duration-300"
              >
                Reserve a Table
              </button>
            </div>
          </div>

        </div>

        {/* Values Row */}
        <div className="py-12 border-t border-[#2B211C]/10 mb-16">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C1592A] block mb-1">
              Core Principles
            </span>
            <h3 className="font-serif-display text-3xl font-bold text-[#2B211C]">
              What Defines The TRRio
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#F4EFE6] p-6 rounded-xl border border-[#2B211C]/10 shadow-xs hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="mb-3.5">{v.icon}</div>
                <h4 className="font-serif-display text-lg font-bold text-[#2B211C] mb-2">
                  {v.title}
                </h4>
                <p className="text-xs text-[#2B211C]/70 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Google Reviews */}
        <div className="bg-[#F4EFE6] rounded-2xl p-8 sm:p-12 border border-[#2B211C]/10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h3 className="font-serif-display text-3xl font-bold text-[#2B211C]">
              Words From Our Diners
            </h3>
            <p className="text-xs text-[#2B211C]/70 mt-1">
              Over 336 Google reviews with a 4.8 star average rating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#FAF7F2] p-6 rounded-xl border border-[#2B211C]/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <Quote size={24} className="text-[#C1592A]/40 mb-3" />
                  <p className="text-xs text-[#2B211C]/80 italic leading-relaxed mb-4">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-[#2B211C]/10 flex items-center justify-between">
                  <span className="font-semibold text-xs text-[#2B211C]">
                    {rev.author}
                  </span>
                  <span className="text-[10px] text-[#2B211C]/50">
                    {rev.timeAgo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
