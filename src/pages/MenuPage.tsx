import React, { useState, useMemo } from 'react';
import { ExternalLink, Search, Coffee, Utensils, Sparkles, Filter, Calendar, Maximize2 } from 'lucide-react';
import { MENU_ITEMS, BUSINESS_INFO } from '../data/restaurantData';
import { MenuType, FoodFilter, MenuItem } from '../types';
import { ImageModal } from '../components/ImageModal';

interface MenuPageProps {
  onOpenReserve: () => void;
  onOpenOrder: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onOpenReserve, onOpenOrder }) => {
  const [activeType, setActiveType] = useState<MenuType>('food');
  const [foodFilter, setFoodFilter] = useState<FoodFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Type match
      if (item.type !== activeType) return false;

      // Food Veg/Non-Veg Filter
      if (activeType === 'food') {
        if (foodFilter === 'veg' && !item.isVeg) return false;
        if (foodFilter === 'non-veg' && item.isVeg) return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        const matchesDesc = item.description?.toLowerCase().includes(query) || false;
        return matchesName || matchesCat || matchesDesc;
      }

      return true;
    });
  }, [activeType, foodFilter, selectedCategory, searchQuery]);

  // Available categories for current type
  const availableCategories = useMemo(() => {
    const cats = new Set<string>();
    MENU_ITEMS.filter((i) => i.type === activeType).forEach((i) => cats.add(i.category));
    return Array.from(cats);
  }, [activeType]);

  return (
    <div className="pt-24 pb-20 bg-[#FAF7F2] min-h-screen animate-fade-in">
      {/* Header Banner */}
      <div className="bg-[#2B211C] text-[#FAF7F2] py-16 px-4 sm:px-6 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#F29F67] block mb-2">
            The TRRio Culinary Offerings
          </span>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold mb-4">
            Our Menu & Photos
          </h1>
          <p className="text-sm sm:text-base text-[#FAF7F2]/80 max-w-2xl mx-auto leading-relaxed mb-6 font-light">
            Explore our handcrafted selection of Bengali delicacies, wok-tossed Indo-Chinese, clay-oven kebabs, and artisanal cafe brews. Click any photo to view in high resolution!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={BUSINESS_INFO.zomatoMenuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#E23744] hover:bg-[#c92c38] px-5 py-2.5 rounded-full transition-all shadow-md"
            >
              <span>View Prices & Order on Zomato</span>
              <ExternalLink size={14} />
            </a>

            <button
              onClick={onOpenReserve}
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#2B211C] bg-[#FAF7F2] hover:bg-white px-5 py-2.5 rounded-full transition-all shadow-md cursor-pointer"
            >
              <Calendar size={14} />
              <span>Reserve a Table</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top-Level Type Selector: Food | Beverages */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-xl bg-[#F4EFE6] border border-[#2B211C]/10 shadow-inner">
            <button
              onClick={() => {
                setActiveType('food');
                setSelectedCategory('all');
              }}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeType === 'food'
                  ? 'bg-[#2B211C] text-[#FAF7F2] shadow-sm'
                  : 'text-[#2B211C]/70 hover:text-[#2B211C]'
              }`}
            >
              <Utensils size={16} />
              <span>Food</span>
            </button>
            <button
              onClick={() => {
                setActiveType('beverages');
                setSelectedCategory('all');
              }}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeType === 'beverages'
                  ? 'bg-[#2B211C] text-[#FAF7F2] shadow-sm'
                  : 'text-[#2B211C]/70 hover:text-[#2B211C]'
              }`}
            >
              <Coffee size={16} />
              <span>Beverages</span>
            </button>
          </div>
        </div>

        {/* Food Filter: All | Veg | Non-Veg */}
        {activeType === 'food' && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex space-x-2 bg-[#FAF7F2] p-1 border border-[#2B211C]/10 rounded-full">
              <button
                onClick={() => setFoodFilter('all')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  foodFilter === 'all'
                    ? 'bg-[#C1592A] text-white shadow-xs'
                    : 'text-[#2B211C]/70 hover:text-[#2B211C]'
                }`}
              >
                All Food
              </button>
              <button
                onClick={() => setFoodFilter('veg')}
                className={`flex items-center space-x-1.5 px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  foodFilter === 'veg'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-[#2B211C]/70 hover:text-emerald-700'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Veg Only</span>
              </button>
              <button
                onClick={() => setFoodFilter('non-veg')}
                className={`flex items-center space-x-1.5 px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  foodFilter === 'non-veg'
                    ? 'bg-[#C1592A] text-white shadow-xs'
                    : 'text-[#2B211C]/70 hover:text-[#C1592A]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#C1592A]" />
                <span>Non-Veg</span>
              </button>
            </div>
          </div>
        )}

        {/* Search Bar & Category Quick Tabs */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:w-72">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#2B211C]/40" />
            <input
              type="text"
              placeholder={`Search ${activeType}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#F4EFE6] border border-[#2B211C]/15 rounded-lg text-sm text-[#2B211C] placeholder-[#2B211C]/40 focus:outline-hidden focus:border-[#C1592A]"
            />
          </div>

          <div className="flex-1 w-full overflow-x-auto pb-1 flex items-center space-x-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#2B211C] text-[#FAF7F2]'
                  : 'bg-[#F4EFE6] text-[#2B211C]/70 hover:bg-[#2B211C]/10'
              }`}
            >
              All Categories
            </button>
            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2B211C] text-[#FAF7F2]'
                    : 'bg-[#F4EFE6] text-[#2B211C]/70 hover:bg-[#2B211C]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid / List */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#F4EFE6] rounded-2xl overflow-hidden border border-[#2B211C]/10 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Food Image Header */}
                  {item.image && (
                    <div
                      className="relative h-48 w-full overflow-hidden bg-[#2B211C]/5 cursor-pointer"
                      onClick={() => setSelectedItemForModal(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2B211C]/70 via-transparent to-black/20 opacity-90 group-hover:opacity-100 transition-opacity" />

                      {/* Zoom hint button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedItemForModal(item);
                        }}
                        className="absolute top-3 right-3 p-2 rounded-full bg-[#FAF7F2]/80 hover:bg-white text-[#2B211C] shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200"
                        title="View Photo"
                      >
                        <Maximize2 size={14} />
                      </button>

                      {/* Price Tag Overlay */}
                      {item.price && (
                        <div className="absolute bottom-3 left-3 bg-[#2B211C]/90 text-[#FAF7F2] font-serif-display font-bold text-sm px-2.5 py-1 rounded-md backdrop-blur-xs border border-white/10 shadow-xs">
                          {item.price}
                        </div>
                      )}

                      {/* Signature / Popular badge on image */}
                      {item.isSignature ? (
                        <div className="absolute top-3 left-3 bg-[#C1592A] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs flex items-center space-x-1">
                          <Sparkles size={11} />
                          <span>House Special</span>
                        </div>
                      ) : item.isPopular ? (
                        <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs">
                          Popular
                        </div>
                      ) : null}
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2 gap-2">
                      <h3 className="font-serif-display text-lg font-bold text-[#2B211C] group-hover:text-[#C1592A] transition-colors leading-snug">
                        {item.name}
                      </h3>

                      {/* Veg/Non-Veg Tag */}
                      {item.type === 'food' && (
                        <span
                          className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-bold border shrink-0 ${
                            item.isVeg
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                              : 'bg-amber-50 text-[#C1592A] border-amber-200'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.isVeg ? 'bg-emerald-600' : 'bg-[#C1592A]'
                            }`}
                          />
                          <span>{item.isVeg ? 'VEG' : 'NON-VEG'}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#2B211C]/60 bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#2B211C]/5">
                        {item.category}
                      </span>
                      {!item.image && item.price && (
                        <span className="font-serif-display text-sm font-bold text-[#2B211C]">
                          {item.price}
                        </span>
                      )}
                    </div>

                    {item.description && (
                      <p className="text-xs text-[#2B211C]/75 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer Action: Order on Zomato Link */}
                <div className="px-5 pb-5 pt-2 border-t border-[#2B211C]/5 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedItemForModal(item)}
                    className="text-[11px] font-semibold text-[#2B211C]/70 hover:text-[#C1592A] transition-colors flex items-center space-x-1 cursor-pointer"
                  >
                    <span>View Photo</span>
                  </button>

                  <a
                    href={BUSINESS_INFO.zomatoMenuUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[11px] font-bold uppercase tracking-wider text-[#E23744] hover:underline"
                  >
                    <span>Zomato Order</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-[#F4EFE6] rounded-2xl max-w-md mx-auto p-6 border border-[#2B211C]/10">
            <Filter size={32} className="mx-auto text-[#2B211C]/30 mb-3" />
            <h3 className="font-serif-display text-xl font-bold text-[#2B211C] mb-1">
              No menu items match your filter
            </h3>
            <p className="text-xs text-[#2B211C]/60 mb-4">
              Try adjusting your search terms or clearing the veg/non-veg filter.
            </p>
            <button
              onClick={() => {
                setFoodFilter('all');
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 text-xs font-semibold rounded bg-[#2B211C] text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Image Lightbox Modal */}
      {selectedItemForModal && (
        <ImageModal
          isOpen={!!selectedItemForModal}
          onClose={() => setSelectedItemForModal(null)}
          imageSrc={selectedItemForModal.image || BUSINESS_INFO.heroImage}
          title={selectedItemForModal.name}
          subtitle={selectedItemForModal.category}
          description={selectedItemForModal.description}
          price={selectedItemForModal.price}
          isVeg={selectedItemForModal.isVeg}
          type={selectedItemForModal.type}
          zomatoUrl={BUSINESS_INFO.zomatoMenuUrl}
        />
      )}
    </div>
  );
};

