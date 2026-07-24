import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Calendar, Utensils, ChevronDown, ChevronUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface VisitSectionProps {
  onOpenReserve: () => void;
  onOpenOrder: () => void;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ onOpenReserve, onOpenOrder }) => {
  const [showFullHours, setShowFullHours] = useState(false);

  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${BUSINESS_INFO.name} ${BUSINESS_INFO.address}`
  )}`;

  return (
    <section id="visit" className="py-24 bg-[#FAF7F2] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C1592A] block mb-2">
            Find Our Door
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#2B211C] font-bold mb-4">
            Visit Us in Salkia
          </h2>
          <p className="text-sm sm:text-base text-[#2B211C]/75">
            Conveniently situated on GT Road in Howrah with easy drive-through access and cozy indoor dining.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact & Hours Info (5 cols) */}
          <div className="lg:col-span-5 bg-[#F4EFE6] p-6 sm:p-8 rounded-2xl border border-[#2B211C]/10 shadow-sm">
            
            {/* Address */}
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-[#FAF7F2] text-[#C1592A] rounded-xl border border-[#2B211C]/10 shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-serif-display text-lg font-bold text-[#2B211C]">
                  Location
                </h3>
                <p className="text-xs sm:text-sm text-[#2B211C]/80 leading-relaxed mt-1">
                  {BUSINESS_INFO.address}
                </p>
                <div className="mt-1 text-[11px] font-mono text-[#2B211C]/60">
                  Plus Code: {BUSINESS_INFO.plusCode}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 mb-6 pt-6 border-t border-[#2B211C]/10">
              <div className="p-3 bg-[#FAF7F2] text-[#C1592A] rounded-xl border border-[#2B211C]/10 shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-serif-display text-lg font-bold text-[#2B211C]">
                  Phone & Enquiries
                </h3>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="text-sm font-semibold text-[#C1592A] hover:underline block mt-0.5"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <p className="text-[11px] text-[#2B211C]/60 mt-1">
                  Tap to call for table availability or direct pick-up
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4 mb-6 pt-6 border-t border-[#2B211C]/10">
              <div className="p-3 bg-[#FAF7F2] text-[#C1592A] rounded-xl border border-[#2B211C]/10 shrink-0">
                <Clock size={22} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-display text-lg font-bold text-[#2B211C]">
                    Operating Hours
                  </h3>
                  <button
                    onClick={() => setShowFullHours(!showFullHours)}
                    className="text-xs font-semibold text-[#C1592A] hover:underline flex items-center space-x-1"
                  >
                    <span>{showFullHours ? 'Hide' : 'Full Schedule'}</span>
                    {showFullHours ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-[#2B211C]/80 mt-1 font-medium">
                  Opens 12 PM daily
                </p>

                {showFullHours && (
                  <div className="mt-3 bg-[#FAF7F2] p-3 rounded-lg border border-[#2B211C]/10 text-xs space-y-1.5 animate-fade-in">
                    {BUSINESS_INFO.fullHours.map((h) => (
                      <div key={h.day} className="flex justify-between text-[#2B211C]/80">
                        <span className="font-medium">{h.day}</span>
                        <span>{h.hours}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#2B211C]/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={onOpenReserve}
                className="w-full py-3 px-4 rounded-lg bg-[#C1592A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#a6481f] flex items-center justify-center space-x-2 shadow-xs transition-colors"
              >
                <Calendar size={15} />
                <span>Reserve Table</span>
              </button>

              <button
                onClick={onOpenOrder}
                className="w-full py-3 px-4 rounded-lg bg-[#2B211C] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider hover:bg-[#1f1713] flex items-center justify-center space-x-2 transition-colors"
              >
                <Utensils size={15} />
                <span>Order Online</span>
              </button>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg border border-[#2B211C]/20 text-[#2B211C] hover:bg-[#2B211C] hover:text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
              >
                <Navigation size={15} />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full py-3 px-4 rounded-lg border border-[#2B211C]/20 text-[#2B211C] hover:bg-[#2B211C] hover:text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
              >
                <Phone size={15} />
                <span>Call Now</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed + Local Story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Map Container */}
            <div className="bg-[#F4EFE6] rounded-2xl overflow-hidden border border-[#2B211C]/10 shadow-sm h-[380px] sm:h-[420px] relative">
              <iframe
                title="The TRRio Cafe & Restaurant Location Map"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.585507851605!2d88.34963557602354!3d22.594589232148785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277bd21c385b7%3A0xb35ecf36c568f6b9!2sGT%20Rd%2C%20Salkia%2C%20Howrah%2C%20West%20Bengal%20711106!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-90 grayscale-10 hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Mini SEO / Neighborhood Note */}
            <div className="bg-[#F4EFE6] p-6 rounded-2xl border border-[#2B211C]/10">
              <h4 className="font-serif-display text-lg font-bold text-[#2B211C] mb-2">
                Located on Historical GT Road, Salkia
              </h4>
              <p className="text-xs text-[#2B211C]/80 leading-relaxed">
                Whether you live nearby in Salkia, Howrah, or are traveling across the river from Central Kolkata, The TRRio Cafe & Restaurant offers convenient GT Road access. Parking is readily accessible for dine-in and drive-through pickups.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
