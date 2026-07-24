import React from 'react';
import { Sparkles } from 'lucide-react';

export const IntroStrip: React.FC = () => {
  return (
    <section id="intro" className="py-20 bg-[#FAF7F2] border-b border-[#2B211C]/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center space-x-2 text-[#C1592A] text-xs font-semibold uppercase tracking-widest mb-4">
          <Sparkles size={14} />
          <span>A Salkia Original</span>
          <Sparkles size={14} />
        </div>

        <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#2B211C] font-semibold leading-tight mb-6">
          Unpretentious flavor, quiet warmth, and a seat always waiting for you.
        </h2>

        <p className="text-base sm:text-lg text-[#2B211C]/80 font-light leading-relaxed max-w-3xl mx-auto">
          Tucked along GT Road in Salkia, Howrah, The TRRio Cafe & Restaurant was built to be a relaxed gathering place for friends, families, and solo coffee dreamers alike. From hearty biryanis and classic Kolkata fish fries to aromatic coffees and handcrafted cold brews, every dish is prepared with honest care in a calm, welcoming space.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="w-16 h-0.5 bg-[#C1592A]/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};
