import React from 'react';
import { X, ExternalLink, Phone, Car, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface OrderOnlineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderOnlineModal: React.FC<OrderOnlineModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#FAF7F2] rounded-2xl max-w-md w-full p-6 sm:p-8 border border-[#2B211C]/10 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#2B211C]/60 hover:text-[#2B211C] hover:bg-[#2B211C]/5 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="mb-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C1592A]">
            Takeout & Delivery
          </span>
          <h3 className="font-serif-display text-2xl font-bold text-[#2B211C] mt-1">
            Order From The TRRio
          </h3>
          <p className="text-xs text-[#2B211C]/70 mt-1">
            Choose your preferred ordering method below.
          </p>
        </div>

        <div className="space-y-4">
          
          {/* Zomato Delivery */}
          <a
            href={BUSINESS_INFO.zomatoMainUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#F4EFE6] border border-[#2B211C]/10 hover:border-[#C1592A] hover:bg-[#FAF7F2] transition-all flex items-center justify-between group shadow-xs hover:shadow-md"
          >
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-[#E23744] text-white rounded-lg font-bold text-xs uppercase">
                Zomato
              </div>
              <div>
                <div className="text-sm font-bold text-[#2B211C] group-hover:text-[#C1592A] transition-colors">
                  Order on Zomato
                </div>
                <div className="text-[11px] text-[#2B211C]/60">
                  Doorstep delivery in Howrah & Kolkata
                </div>
              </div>
            </div>
            <ExternalLink size={16} className="text-[#2B211C]/40 group-hover:text-[#C1592A]" />
          </a>

          {/* Drive-Through / Pickup Direct Call */}
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="p-4 rounded-xl bg-[#F4EFE6] border border-[#2B211C]/10 hover:border-[#C1592A] hover:bg-[#FAF7F2] transition-all flex items-center justify-between group shadow-xs hover:shadow-md"
          >
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-[#2B211C] text-[#FAF7F2] rounded-lg">
                <Car size={18} />
              </div>
              <div>
                <div className="text-sm font-bold text-[#2B211C] group-hover:text-[#C1592A] transition-colors">
                  Drive-Through / Direct Takeaway
                </div>
                <div className="text-[11px] text-[#2B211C]/60">
                  Call {BUSINESS_INFO.phone} for quick pickup on GT Road
                </div>
              </div>
            </div>
            <Phone size={16} className="text-[#2B211C]/40 group-hover:text-[#C1592A]" />
          </a>

          {/* Direct WhatsApp / Phone Info */}
          <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#2B211C]/10 text-xs">
            <div className="flex items-center space-x-2 font-bold text-[#2B211C] mb-1">
              <ShoppingBag size={15} className="text-[#C1592A]" />
              <span>No-Contact Packaging Guarantee</span>
            </div>
            <p className="text-[#2B211C]/75 text-[11px] leading-relaxed">
              All orders are prepared with strict hygiene standards in tamper-evident sealed packaging for your health and peace of mind.
            </p>
          </div>

        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#2B211C]/60 hover:text-[#2B211C] uppercase tracking-wider"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
