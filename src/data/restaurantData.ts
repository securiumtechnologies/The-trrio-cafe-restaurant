import { MenuItem, Review, InstagramPost } from '../types';

import heroAmbience from '../assets/images/trrio_hero_ambience_1784866194366.jpg';
import signatureDish from '../assets/images/trrio_signature_dish_1784866209204.jpg';
import refreshingDrinks from '../assets/images/trrio_refreshing_drinks_1784866220419.jpg';
import instaPoster from '../assets/images/trrio_insta_poster_1784866233280.jpg';

import kolkataFishFry from '../assets/images/kolkata_fish_fry_1784867344806.jpg';
import muttonKosha from '../assets/images/mutton_kosha_1784867356329.jpg';
import drumsOfHeaven from '../assets/images/drums_of_heaven_1784867373290.jpg';
import paneerTikkaMasala from '../assets/images/paneer_tikka_masala_1784867384874.jpg';
import prawnMalaiCurry from '../assets/images/prawn_malai_curry_1784867396679.jpg';

import cheeseGarlicBread from '../assets/images/cheese_garlic_bread_1784867619804.jpg';
import dalMakhaniJeeraRice from '../assets/images/dal_makhani_jeera_rice_1784867631634.jpg';
import cornCheeseBalls from '../assets/images/corn_cheese_balls_1784867641867.jpg';
import vegPrimaveraPasta from '../assets/images/veg_primavera_pasta_1784867652641.jpg';
import mushroomDuplex from '../assets/images/mushroom_duplex_1784867663411.jpg';
import malaiKofta from '../assets/images/malai_kofta_1784867674816.jpg';
import butterNaanRoti from '../assets/images/butter_naan_roti_1784867686286.jpg';
import butterChickenGravy from '../assets/images/butter_chicken_gravy_1784867695918.jpg';

import blueLagoonMocktail from '../assets/images/blue_lagoon_mocktail_1784868253521.jpg';
import kitkatThickShake from '../assets/images/kitkat_thick_shake_1784868265201.jpg';
import roseFalooda from '../assets/images/rose_falooda_1784868276610.jpg';
import coldCoffeeIcecream from '../assets/images/cold_coffee_icecream_1784868295279.jpg';
import virginMojitoMocktail from '../assets/images/virgin_mojito_mocktail_1784868471701.jpg';

export const BUSINESS_INFO = {
  name: 'The TRRio Cafe & Restaurant',
  bengaliName: 'দি তৃতীয় ক্যাফে & রেস্টুরেন্ট',
  category: 'Restaurant / Cafe',
  rating: 4.8,
  reviewCount: 336,
  priceRange: '₹200–1,200 per person',
  address: '349 & 350/1, GT Rd, Salkia, Howrah, West Bengal 711106',
  plusCode: 'J82R+4H Howrah, West Bengal',
  phone: '091998 90999',
  phoneClean: '+919199890999',
  serviceOptions: [
    { title: 'Dine-in', desc: 'Cozy ambient seating with climate control' },
    { title: 'Drive-through', desc: 'Quick & convenient pickup on GT Road' },
    { title: 'No-contact delivery', desc: 'Hygenic contactless door step delivery' },
    { title: 'LGBTQ+ Friendly', desc: 'An inclusive, welcoming space for everyone' }
  ],
  hoursNote: 'Opens 12 PM daily',
  fullHours: [
    { day: 'Monday', hours: '12:00 PM – 11:00 PM' },
    { day: 'Tuesday', hours: '12:00 PM – 11:00 PM' },
    { day: 'Wednesday', hours: '12:00 PM – 11:00 PM' },
    { day: 'Thursday', hours: '12:00 PM – 11:00 PM' },
    { day: 'Friday', hours: '12:00 PM – 11:30 PM' },
    { day: 'Saturday', hours: '12:00 PM – 11:30 PM' },
    { day: 'Sunday', hours: '12:00 PM – 11:30 PM' }
  ],
  zomatoMenuUrl: 'https://www.zomato.com/kolkata/the-trrio-cafe-restaurant-1-salkia-howrah/menu',
  zomatoMainUrl: 'https://www.zomato.com/kolkata/the-trrio-cafe-restaurant-1-salkia-howrah',
  instagramUrl: 'https://www.instagram.com/the.trrio.cafeandrestaurant/?hl=en',
  instagramHandle: '@the.trrio.cafeandrestaurant',
  heroImage: heroAmbience,
  signatureImage: signatureDish,
  drinksImage: refreshingDrinks,
  instaPosterImage: instaPoster
};

export const MENU_ITEMS: MenuItem[] = [
  // --- FOOD -> VEG ---
  {
    id: 'veg-1',
    name: 'Crispy Chilli Babycorn',
    category: 'Starters & Appetizers',
    type: 'food',
    isVeg: true,
    description: 'Golden fried tender baby corn tossed in a spicy, garlic-infused Indo-Chinese glaze.',
    isPopular: true,
    isSignature: true,
    price: '₹210',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'veg-2',
    name: 'Paneer Tikka Butter Masala',
    category: 'Main Course',
    type: 'food',
    isVeg: true,
    description: 'Char-broiled cottage cheese cubes simmered in a velvet tomato cream sauce.',
    isPopular: true,
    isSignature: true,
    price: '₹280',
    image: paneerTikkaMasala
  },
  {
    id: 'veg-3',
    name: 'Cheese Garlic Bread',
    category: 'Starters & Appetizers',
    type: 'food',
    isVeg: true,
    description: 'Artisanal loaf baked with garlic herb butter and melted mozzarella cheese.',
    isPopular: false,
    price: '₹160',
    image: cheeseGarlicBread
  },
  {
    id: 'veg-4',
    name: 'Veg Club Sandwich',
    category: 'Cafe Bites',
    type: 'food',
    isVeg: true,
    description: 'Triple-decker toasted sandwich filled with garden fresh veggies, cheese, and house mayo.',
    isPopular: false,
    price: '₹140',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'veg-5',
    name: 'Cream of Mushroom Soup',
    category: 'Soups & Salads',
    type: 'food',
    isVeg: true,
    description: 'Rich and velvety button mushroom broth garnished with fresh thyme and truffle oil touch.',
    isPopular: false,
    price: '₹150',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'veg-6',
    name: 'Paneer Butter Masala',
    category: 'Main Course',
    type: 'food',
    isVeg: true,
    description: 'Classic North Indian rich gravy with tender cottage cheese cooked in butter and cashew sauce.',
    isPopular: true,
    price: '₹260',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'veg-7',
    name: 'Veg Hakka Noodles',
    category: 'Indo-Chinese',
    type: 'food',
    isVeg: true,
    description: 'Wok-tossed noodles with shredded cabbage, bell peppers, carrots, and light soy seasoning.',
    isPopular: true,
    price: '₹180',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'veg-8',
    name: 'Dal Makhani with Jeera Rice',
    category: 'Main Course',
    type: 'food',
    isVeg: true,
    description: 'Slow-cooked black lentils overnight in butter and cream served with fragrant cumin rice.',
    isPopular: true,
    isSignature: true,
    price: '₹240',
    image: dalMakhaniJeeraRice
  },
  {
    id: 'veg-9',
    name: 'Loaded Nachos',
    category: 'Cafe Bites',
    type: 'food',
    isVeg: true,
    description: 'Crunchy tortilla chips topped with melted cheese sauce, salsa, jalapeños, and sour cream.',
    isPopular: false,
    price: '₹190',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'veg-10',
    name: 'Veg Fried Rice',
    category: 'Indo-Chinese',
    type: 'food',
    isVeg: true,
    description: 'Aromatic basmati rice stir-fried with diced garden vegetables and spring onions.',
    isPopular: false,
    price: '₹170',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'veg-11',
    name: 'Corn Cheese Ball',
    category: 'Starters & Appetizers',
    type: 'food',
    isVeg: true,
    description: 'Deep-fried golden croquettes filled with sweet corn and oozing processed cheese.',
    isPopular: false,
    price: '₹190',
    image: cornCheeseBalls
  },
  {
    id: 'veg-12',
    name: 'Veg Primavera Pasta',
    category: 'Italian',
    type: 'food',
    isVeg: true,
    description: 'Penne pasta tossed in a creamy parmesan basil sauce with seasonal grilled vegetables.',
    isPopular: false,
    price: '₹230',
    image: vegPrimaveraPasta
  },
  {
    id: 'veg-13',
    name: 'Mushroom Duplex',
    category: 'Starters & Appetizers',
    type: 'food',
    isVeg: true,
    description: 'Stuffed mushroom caps with spicy cheese filling, golden crumb fried to perfection.',
    isPopular: false,
    price: '₹220',
    image: mushroomDuplex
  },
  {
    id: 'veg-14',
    name: 'Malai Kofta',
    category: 'Main Course',
    type: 'food',
    isVeg: true,
    description: 'Melt-in-mouth cottage cheese and potato dumplings in a rich cardamom-infused cream gravy.',
    isPopular: true,
    price: '₹270',
    image: malaiKofta
  },
  {
    id: 'veg-15',
    name: 'Butter Naan & Tandoori Roti',
    category: 'Breads',
    type: 'food',
    isVeg: true,
    description: 'Freshly baked in clay tandoor oven brushed with pure white butter.',
    isPopular: false,
    price: '₹50',
    image: butterNaanRoti
  },

  // --- FOOD -> NON-VEG ---
  {
    id: 'nonveg-1',
    name: 'TRRio Special Chicken Biryani',
    category: 'Main Course',
    type: 'food',
    isVeg: false,
    description: 'Fragrant Kolkata-style long-grain basmati rice Dum-cooked with succulent chicken, spiced potato, and boiled egg.',
    isPopular: true,
    isSignature: true,
    price: '₹320',
    image: signatureDish
  },
  {
    id: 'nonveg-2',
    name: 'Chicken Drums of Heaven',
    category: 'Starters & Appetizers',
    type: 'food',
    isVeg: false,
    description: 'Crispy fried lollipop chicken tossed in a spicy, tangy schezwan honey reduction.',
    isPopular: true,
    isSignature: true,
    price: '₹280',
    image: drumsOfHeaven
  },
  {
    id: 'nonveg-3',
    name: 'Mutton Kosha',
    category: 'Main Course',
    type: 'food',
    isVeg: false,
    description: 'Authentic Bengali slow-roasted tender mutton in a dark, rich mustard oil onion gravy.',
    isPopular: true,
    isSignature: true,
    price: '₹390',
    image: muttonKosha
  },
  {
    id: 'nonveg-4',
    name: 'Chicken Tikka Kebab',
    category: 'Tandoor Specials',
    type: 'food',
    isVeg: false,
    description: 'Boneless chicken chunks marinated in hung curd, mustard oil, and ground spices clay-oven grilled.',
    isPopular: true,
    price: '₹290',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'nonveg-5',
    name: 'BBQ Chicken Wings',
    category: 'Starters & Appetizers',
    type: 'food',
    isVeg: false,
    description: 'Smoky oven-glazed chicken wings coated in house sweet and spicy barbecue glaze.',
    isPopular: false,
    price: '₹260',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'nonveg-6',
    name: 'Fish Fry (Kolkata Style Bhetki)',
    category: 'Starters & Appetizers',
    type: 'food',
    isVeg: false,
    description: 'Fresh Bhetki fish fillet marinated in cilantro-garlic master paste, crumb fried and served with Kasundi.',
    isPopular: true,
    isSignature: true,
    price: '₹240',
    image: kolkataFishFry
  },
  {
    id: 'nonveg-7',
    name: 'Chicken Hakka Noodles',
    category: 'Indo-Chinese',
    type: 'food',
    isVeg: false,
    description: 'Classic wok-tossed noodles with tender chicken strips, egg drops, and fresh scallions.',
    isPopular: true,
    price: '₹210',
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'nonveg-8',
    name: 'Mutton Rogan Josh',
    category: 'Main Course',
    type: 'food',
    isVeg: false,
    description: 'Classic Kashmiri tender mutton braised in an aromatic fennel-cardamom gravy.',
    isPopular: false,
    price: '₹410',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'nonveg-9',
    name: 'Egg Devil',
    category: 'Starters & Appetizers',
    type: 'food',
    isVeg: false,
    description: 'Traditional Bengali Dimer Devil - hard-boiled eggs wrapped in spiced minced meat, golden fried.',
    isPopular: false,
    price: '₹160',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'nonveg-10',
    name: 'Butter Chicken Gravy',
    category: 'Main Course',
    type: 'food',
    isVeg: false,
    description: 'Shredded tandoori chicken simmered in a smooth velvet cream and tomato kasuri methi gravy.',
    isPopular: true,
    price: '₹310',
    image: butterChickenGravy
  },
  {
    id: 'nonveg-11',
    name: 'Chili Chicken Gravy',
    category: 'Indo-Chinese',
    type: 'food',
    isVeg: false,
    description: 'Diced chicken fried and tossed in green chillies, capsicum, soy sauce, and scallions.',
    isPopular: true,
    price: '₹260',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'nonveg-12',
    name: 'Prawn Malai Curry',
    category: 'Main Course',
    type: 'food',
    isVeg: false,
    description: 'Juicy jumbo prawns cooked gently in coconut milk, cinnamon, and subtle Bengali spices.',
    isPopular: true,
    isSignature: true,
    price: '₹420',
    image: prawnMalaiCurry
  },

  // --- BEVERAGES ---
  {
    id: 'bev-1',
    name: 'Hazelnut Cappuccino',
    category: 'Hot Beverages',
    type: 'beverages',
    description: 'Freshly pulled espresso shot with steamed milk foam infused with hazelnut syrup.',
    isPopular: true,
    isSignature: true,
    price: '₹150',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bev-2',
    name: 'Cold Coffee with Ice Cream',
    category: 'Cold Beverages',
    type: 'beverages',
    description: 'Blended espresso, chilled milk, dark cocoa, topped with a scoop of vanilla ice cream.',
    isPopular: true,
    isSignature: true,
    price: '₹170',
    image: coldCoffeeIcecream
  },
  {
    id: 'bev-3',
    name: 'Blue Lagoon Mocktail',
    category: 'Mocktails',
    type: 'beverages',
    description: 'Vibrant blue curaçao syrup, fresh lime juice, mint leaves, and sparkling sprite.',
    isPopular: true,
    isSignature: true,
    price: '₹160',
    image: blueLagoonMocktail
  },
  {
    id: 'bev-4',
    name: 'Virgin Mojito',
    category: 'Mocktails',
    type: 'beverages',
    description: 'Classic muddled fresh mint leaves, lime wedges, simple syrup, topped with club soda.',
    isPopular: true,
    price: '₹140',
    image: virginMojitoMocktail
  },
  {
    id: 'bev-5',
    name: 'Masala Chai',
    category: 'Hot Beverages',
    type: 'beverages',
    description: 'Traditional Assam milk tea brewed with cardamom, ginger, cloves, and cinnamon.',
    isPopular: true,
    price: '₹60',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bev-6',
    name: 'Peach Iced Tea',
    category: 'Cold Beverages',
    type: 'beverages',
    description: 'Hand-brewed black tea infused with natural peach nectar served over crushed ice.',
    isPopular: false,
    price: '₹130',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bev-7',
    name: 'Chocolate Freakshake',
    category: 'Shakes & Desserts',
    type: 'beverages',
    description: 'Over-the-top thick chocolate milkshake loaded with brownie chunks, chocolate syrup, and whipped cream.',
    isPopular: true,
    price: '₹220',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bev-8',
    name: 'KitKat Thick Shake',
    category: 'Shakes & Desserts',
    type: 'beverages',
    description: 'Blended KitKat wafers with rich chocolate ice cream and milk topped with crispy KitKat bars.',
    isPopular: true,
    price: '₹190',
    image: kitkatThickShake
  },
  {
    id: 'bev-9',
    name: 'Fresh Lime Soda',
    category: 'Cold Beverages',
    type: 'beverages',
    description: 'Sweet or salted freshly squeezed lime juice topped with sparkling soda water.',
    isPopular: false,
    price: '₹90',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bev-10',
    name: 'Rose Falooda',
    category: 'Shakes & Desserts',
    type: 'beverages',
    description: 'Aromatic rose syrup, basil seeds, falooda noodles, chilled milk topped with ice cream and nuts.',
    isPopular: true,
    price: '₹180',
    image: roseFalooda
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Debabrata Mukherjee',
    rating: 5,
    timeAgo: '2 weeks ago',
    comment: 'The TRRio is hands down the best dining spot in Salkia GT Road! The Biryani and Drums of Heaven are absolute must-try dishes. Amazing ambiance, polite staff, and super clean space.'
  },
  {
    id: 'rev-2',
    author: 'Priyanka Das',
    rating: 5,
    timeAgo: '1 month ago',
    comment: 'Love the cozy vibe and warmth. Very inclusive and welcoming environment. The Hazelnut Cappuccino and Crispy Chilli Babycorn made our evening memorable!'
  },
  {
    id: 'rev-3',
    author: 'Suman Banerjee',
    rating: 5,
    timeAgo: '2 months ago',
    comment: 'A true hidden gem in Howrah. Reasonable pricing for the high quality of food and aesthetics. Fast service and easy parking right on GT Road.'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    caption: 'Evening lights and sizzling biryani at The TRRio Cafe & Restaurant 🕯️✨ Visit us on GT Road Salkia!',
    image: signatureDish,
    likes: 248,
    comments: 18,
    date: '2 DAYS AGO'
  },
  {
    id: 'ig-2',
    caption: 'Beat the Howrah heat with our signature Blue Lagoon & Cold Coffee with Vanilla Ice Cream 🍹☕',
    image: refreshingDrinks,
    likes: 312,
    comments: 24,
    date: '4 DAYS AGO'
  },
  {
    id: 'ig-3',
    caption: 'Cozy corners, warm conversations, and good food. Your favorite neighborhood spot in Howrah 🌿❤️',
    image: heroAmbience,
    likes: 420,
    comments: 31,
    date: '1 WEEK AGO'
  },
  {
    id: 'ig-4',
    caption: 'Official Poster 4.8★ rated with 336+ reviews on Google! Thank you Salkia for all the love 🎉',
    image: instaPoster,
    likes: 580,
    comments: 49,
    date: '2 WEEKS AGO'
  }
];
