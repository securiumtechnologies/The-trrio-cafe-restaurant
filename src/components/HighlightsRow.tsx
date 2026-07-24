import React from 'react';
import { UtensilsCrossed, Car, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const HighlightsRow: React.FC = () => {
  const highlightIcons = [
    <UtensilsCrossed size={28} className="text-[#C1592A]" key="dinein" />,
    <Car size={28} className="text-[#C1592A]" key="drive" />,
    <ShieldCheck size={28} className="text-[#C1592A]" key="delivery" />,
    <Heart size={28} className="text-[#C1592A]" key="lgbtq" />,
  ];

  return (
    <section className="py-16 bg-[#F4EFE6] border-b border-[#2B211C]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C1592A]">
            Thoughtful Hospitality
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl text-[#2B211C] font-bold mt-1">
            Designed Around Your Comfort
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_INFO.serviceOptions.map((item, index) => (
            <div
              key={item.title}
              className="bg-[#FAF7F2] p-6 rounded-xl border border-[#2B211C]/10 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="p-3.5 bg-[#F4EFE6] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                {highlightIcons[index]}
              </div>
              <h3 className="font-serif-display text-lg font-bold text-[#2B211C] mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-[#2B211C]/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
