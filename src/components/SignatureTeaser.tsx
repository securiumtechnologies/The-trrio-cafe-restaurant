import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';

interface SignatureTeaserProps {
  onViewFullMenu: () => void;
}

export const SignatureTeaser: React.FC<SignatureTeaserProps> = ({ onViewFullMenu }) => {
  const signatures = MENU_ITEMS.filter((item) => item.isSignature || item.isPopular).slice(0, 6);

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#2B211C]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest font-semibold text-[#C1592A] mb-2">
              <Flame size={14} />
              <span>Salkia’s Favorites</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#2B211C] font-bold">
              Signature Dishes & Drinks
            </h2>
          </div>
          <button
            onClick={onViewFullMenu}
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-sm font-semibold text-[#C1592A] hover:text-[#2B211C] transition-colors group"
          >
            <span>Explore Complete Menu</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatures.map((dish) => (
            <div
              key={dish.id}
              onClick={onViewFullMenu}
              className="bg-[#F4EFE6] rounded-xl overflow-hidden border border-[#2B211C]/10 shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer group flex flex-col"
            >
              {/* Optional Photo or Fallback Graphic */}
              <div className="relative h-48 overflow-hidden bg-[#2B211C]/10">
                <img
                  src={
                    dish.image ||
                    (dish.type === 'beverages'
                      ? 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop'
                      : dish.isVeg
                      ? 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop'
                      : 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop')
                  }
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#2B211C] shadow-xs">
                  {dish.category}
                </div>

                {/* Veg/Non-Veg Tag */}
                {dish.type === 'food' && (
                  <div className="absolute top-3 right-3 bg-[#FAF7F2]/90 backdrop-blur-xs px-2 py-1 rounded-md flex items-center space-x-1.5 shadow-xs">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        dish.isVeg ? 'bg-emerald-600' : 'bg-[#C1592A]'
                      }`}
                    />
                    <span className="text-[10px] font-bold text-[#2B211C]">
                      {dish.isVeg ? 'VEG' : 'NON-VEG'}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-[#2B211C] group-hover:text-[#C1592A] transition-colors mb-2">
                    {dish.name}
                  </h3>
                  {dish.description && (
                    <p className="text-xs text-[#2B211C]/75 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-[#2B211C]/10 flex items-center justify-between text-xs font-semibold text-[#C1592A]">
                  <span>View in Menu</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
