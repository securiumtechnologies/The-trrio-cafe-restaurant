import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';
import { ReservationFormData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '13:00',
    guests: 2,
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#FAF7F2] rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#2B211C]/10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#2B211C]/60 hover:text-[#2B211C] hover:bg-[#2B211C]/5 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C1592A]">
                Table Reservation
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#2B211C] mt-1">
                Book Your Table
              </h3>
              <p className="text-xs text-[#2B211C]/70 mt-1">
                Reserve your spot at The TRRio Cafe & Restaurant in Salkia, Howrah.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2B211C] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Debabrata Mukherjee"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F4EFE6] border border-[#2B211C]/15 rounded-lg text-xs text-[#2B211C] focus:outline-hidden focus:border-[#C1592A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2B211C] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9830012345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F4EFE6] border border-[#2B211C]/15 rounded-lg text-xs text-[#2B211C] focus:outline-hidden focus:border-[#C1592A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2B211C] mb-1">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2B211C]/40" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-[#F4EFE6] border border-[#2B211C]/15 rounded-lg text-xs text-[#2B211C] focus:outline-hidden focus:border-[#C1592A]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2B211C] mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2B211C]/40" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-[#F4EFE6] border border-[#2B211C]/15 rounded-lg text-xs text-[#2B211C] focus:outline-hidden focus:border-[#C1592A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2B211C] mb-1">
                    Time (Opens 12 PM)
                  </label>
                  <div className="relative">
                    <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2B211C]/40" />
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-[#F4EFE6] border border-[#2B211C]/15 rounded-lg text-xs text-[#2B211C] focus:outline-hidden focus:border-[#C1592A]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2B211C] mb-1">
                  Special Notes / Occasion
                </label>
                <textarea
                  rows={2}
                  placeholder="Birthday celebration, high chair needed, dietary preferences..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F4EFE6] border border-[#2B211C]/15 rounded-lg text-xs text-[#2B211C] focus:outline-hidden focus:border-[#C1592A]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-[#C1592A] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#a6481f] transition-all shadow-xs"
              >
                Confirm Reservation Request
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-[#2B211C]/10 text-center">
              <span className="text-[11px] text-[#2B211C]/60 block mb-1">
                Prefer to reserve over the phone?
              </span>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#C1592A] hover:underline"
              >
                <Phone size={14} />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="font-serif-display text-2xl font-bold text-[#2B211C] mb-2">
              Reservation Confirmed!
            </h3>
            <p className="text-xs text-[#2B211C]/80 leading-relaxed mb-6 max-w-sm mx-auto">
              Thank you, <strong className="text-[#2B211C]">{formData.name}</strong>. We look forward to welcoming you and your party of {formData.guests} on {formData.date} at {formData.time}.
            </p>

            <div className="bg-[#F4EFE6] p-4 rounded-xl border border-[#2B211C]/10 text-xs text-left mb-6 space-y-1">
              <div><strong>Name:</strong> {formData.name}</div>
              <div><strong>Phone:</strong> {formData.phone}</div>
              <div><strong>Date & Time:</strong> {formData.date} @ {formData.time}</div>
              <div><strong>Location:</strong> 349 & 350/1, GT Rd, Salkia, Howrah</div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-[#2B211C] text-white text-xs uppercase tracking-wider font-semibold"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
