import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles, Maximize2 } from 'lucide-react';
import { BUSINESS_INFO, INSTAGRAM_POSTS } from '../data/restaurantData';
import { ImageModal } from './ImageModal';

export const InstagramSection: React.FC = () => {
  const [selectedPostModal, setSelectedPostModal] = useState<{
    image: string;
    title: string;
    subtitle: string;
    caption: string;
  } | null>(null);

  return (
    <section className="py-24 bg-[#F4EFE6] border-b border-[#2B211C]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest font-semibold text-[#C1592A] mb-2">
              <Instagram size={14} />
              <span>{BUSINESS_INFO.instagramHandle}</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#2B211C] font-bold">
              Follow Our Table & Atmosphere
            </h2>
            <p className="text-xs sm:text-sm text-[#2B211C]/70 mt-1">
              Click any photo to view our official Instagram stories, highlights, and viral food posts.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#2B211C] text-[#FAF7F2] hover:bg-[#C1592A] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs hover:shadow-md shrink-0"
          >
            <Instagram size={16} />
            <span>Visit @the_trrio_cafe</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Poster Showcase + Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Poster Showcase (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF7F2] p-4 sm:p-6 rounded-2xl border border-[#2B211C]/10 shadow-md">
            <div
              className="relative rounded-xl overflow-hidden border border-[#2B211C]/10 group cursor-pointer"
              onClick={() =>
                setSelectedPostModal({
                  image: BUSINESS_INFO.instaPosterImage,
                  title: 'The TRRio Cafe & Restaurant',
                  subtitle: 'Official Poster',
                  caption: '349 & 350/1, GT Rd, Salkia, Howrah, West Bengal 711106. Dine-in, Drive-through & No-contact delivery.',
                })
              }
            >
              <img
                src={BUSINESS_INFO.instaPosterImage}
                alt="The TRRio Cafe & Restaurant Official Instagram Poster"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B211C]/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 text-white">
                <div>
                  <div className="flex items-center space-x-1 text-amber-400 text-xs font-bold mb-1">
                    <Sparkles size={14} />
                    <span>Official Social Poster</span>
                  </div>
                  <p className="text-xs text-white/90">
                    The TRRio Cafe & Restaurant — 4.8★ Rated on Google (336 Reviews)
                  </p>
                  <span className="inline-flex items-center space-x-1 mt-2 text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                    <Maximize2 size={12} />
                    <span>Click to enlarge photo</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Feed Posts (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() =>
                  setSelectedPostModal({
                    image: post.image,
                    title: 'The TRRio Instagram Moments',
                    subtitle: post.date,
                    caption: post.caption,
                  })
                }
                className="group relative bg-[#FAF7F2] rounded-xl overflow-hidden border border-[#2B211C]/10 shadow-xs hover:shadow-md transition-all duration-300 aspect-square block cursor-pointer"
              >
                <img
                  src={post.image}
                  alt="Instagram post preview"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#2B211C]/75 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                  <div className="flex items-center space-x-3 text-xs font-semibold">
                    <div className="flex items-center space-x-1">
                      <Heart size={14} className="fill-white" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle size={14} className="fill-white" />
                      <span>{post.comments}</span>
                    </div>
                  </div>

                  <p className="text-xs line-clamp-3 leading-relaxed text-white/90 font-light">
                    {post.caption}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase font-bold text-amber-300/80 tracking-wider">
                      {post.date}
                    </div>
                    <Maximize2 size={12} className="text-white/80" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPostModal && (
        <ImageModal
          isOpen={!!selectedPostModal}
          onClose={() => setSelectedPostModal(null)}
          imageSrc={selectedPostModal.image}
          title={selectedPostModal.title}
          subtitle={selectedPostModal.subtitle}
          description={selectedPostModal.caption}
          type="instagram"
        />
      )}
    </section>
  );
};

