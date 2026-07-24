import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, Utensils, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  subtitle?: string;
  description?: string;
  price?: string;
  isVeg?: boolean;
  type?: 'food' | 'beverages' | 'instagram' | 'general';
  zomatoUrl?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  subtitle,
  description,
  price,
  isVeg,
  type = 'general',
  zomatoUrl = BUSINESS_INFO.zomatoMenuUrl,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2B211C]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-[#FAF7F2] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#2B211C]/15 z-10 my-auto flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-[#2B211C]/70 text-white hover:bg-[#2B211C] transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Left Side: Full Image */}
        <div className="w-full md:w-1/2 bg-black flex items-center justify-center max-h-[350px] md:max-h-[500px] overflow-hidden group relative">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {price && (
            <div className="absolute bottom-3 left-3 bg-[#2B211C]/90 text-white font-serif-display font-bold text-lg px-3.5 py-1 rounded-lg backdrop-blur-xs shadow-md">
              {price}
            </div>
          )}
        </div>

        {/* Right Side: Details & Zomato / Action CTA */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              {type === 'food' && isVeg !== undefined && (
                <span
                  className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded text-[10px] font-bold border ${
                    isVeg
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      : 'bg-amber-50 text-[#C1592A] border-amber-200'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isVeg ? 'bg-emerald-600' : 'bg-[#C1592A]'
                    }`}
                  />
                  <span>{isVeg ? 'VEG DISH' : 'NON-VEG DISH'}</span>
                </span>
              )}

              {subtitle && (
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C1592A] bg-[#F4EFE6] px-2.5 py-0.5 rounded-full">
                  {subtitle}
                </span>
              )}
            </div>

            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#2B211C] mb-3">
              {title}
            </h3>

            {description && (
              <p className="text-xs sm:text-sm text-[#2B211C]/80 leading-relaxed mb-6">
                {description}
              </p>
            )}

            <div className="p-3.5 bg-[#F4EFE6] rounded-xl border border-[#2B211C]/10 text-xs text-[#2B211C]/80 space-y-1 mb-6">
              <div className="font-bold text-[#2B211C] flex items-center space-x-1.5">
                <Sparkles size={14} className="text-[#C1592A]" />
                <span>The TRRio Culinary Guarantee</span>
              </div>
              <p className="text-[11px] text-[#2B211C]/70">
                Freshly prepared upon order with authentic spices at our Salkia, Howrah kitchen.
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-[#2B211C]/10 flex flex-col gap-2.5">
            <a
              href={zomatoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#E23744] hover:bg-[#c92c38] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md transition-all"
            >
              <Utensils size={15} />
              <span>Order on Zomato</span>
              <ExternalLink size={14} />
            </a>

            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl border border-[#2B211C]/20 text-[#2B211C] text-xs font-semibold uppercase tracking-wider hover:bg-[#2B211C] hover:text-white transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
