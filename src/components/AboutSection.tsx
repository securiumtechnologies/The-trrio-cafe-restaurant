import React from 'react';
import { Heart, ShieldCheck, DollarSign, Award, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface AboutSectionProps {
  onViewMenu: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onViewMenu }) => {
  const values = [
    {
      title: 'Quality Ingredients',
      icon: <Award size={24} className="text-[#C1592A]" />,
      desc: 'Fresh local produce, fragrant basmati, and hand-ground spices in every single kitchen preparation.'
    },
    {
      title: 'Warm Hospitality',
      icon: <Heart size={24} className="text-[#C1592A]" />,
      desc: 'Generous service designed to make every diner feel like a honored guest in our home.'
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
    <section id="about" className="py-24 bg-[#F4EFE6] border-b border-[#2B211C]/5 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Images Stack */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-[#2B211C]/10 max-w-md mx-auto lg:max-w-none">
              <img
                src={BUSINESS_INFO.heroImage}
                alt="The TRRio Cafe Dining Ambience"
                className="w-full h-[380px] object-cover"
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
              Our Story & Ethos
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#2B211C] font-bold mb-6 leading-tight">
              A vibrant culinary destination rooted in Salkia, Howrah.
            </h2>

            <p className="text-sm sm:text-base text-[#2B211C]/80 leading-relaxed mb-4">
              At <strong className="text-[#2B211C]">The TRRio Cafe & Restaurant</strong> (দি তৃতীয় ক্যাফে & রেস্টুরেন্ট), food is an expression of warmth and community. Located conveniently on GT Road in Salkia, we bring together rich Bengali culinary traditions, wok-tossed Indo-Chinese comfort food, and modern artisanal cafe creations under one roof.
            </p>

            <p className="text-sm sm:text-base text-[#2B211C]/80 leading-relaxed mb-6">
              Whether you are stopping by for a quiet afternoon cold coffee, sharing a steaming Dum Biryani with family, or grabbing a quick drive-through dinner, our kitchen is dedicated to quality, flavor, and heartfelt hospitality.
            </p>

            <button
              onClick={onViewMenu}
              className="px-6 py-3 rounded-md bg-[#2B211C] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider hover:bg-[#C1592A] transition-colors duration-300 inline-flex items-center space-x-2 group"
            >
              <span>See What's Cooking</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Values Row */}
        <div className="pt-8 border-t border-[#2B211C]/10">
          <div className="text-center mb-10">
            <h3 className="font-serif-display text-2xl font-bold text-[#2B211C]">
              What Defines The TRRio
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#FAF7F2] p-6 rounded-xl border border-[#2B211C]/10 shadow-xs hover:shadow-md transition-shadow"
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

      </div>
    </section>
  );
};
