import React from 'react';
import { VisitSection } from '../components/VisitSection';
import { InstagramSection } from '../components/InstagramSection';

interface VisitPageProps {
  onOpenReserve: () => void;
  onOpenOrder: () => void;
}

export const VisitPage: React.FC<VisitPageProps> = ({ onOpenReserve, onOpenOrder }) => {
  return (
    <div className="pt-24 pb-20 bg-[#FAF7F2] min-h-screen animate-fade-in">
      {/* Header */}
      <div className="bg-[#2B211C] text-[#FAF7F2] py-16 px-4 sm:px-6 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#F29F67] block mb-2">
            Location & Hours
          </span>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold mb-4">
            Visit Us
          </h1>
          <p className="text-sm sm:text-base text-[#FAF7F2]/80 max-w-2xl mx-auto leading-relaxed font-light">
            Located on GT Road in Salkia, Howrah. Join us for dine-in, drive-through pickup, or direct delivery.
          </p>
        </div>
      </div>

      {/* Main Visit Section & Map */}
      <VisitSection
        onOpenReserve={onOpenReserve}
        onOpenOrder={onOpenOrder}
      />

      {/* Instagram Feed & Poster */}
      <InstagramSection />
    </div>
  );
};
