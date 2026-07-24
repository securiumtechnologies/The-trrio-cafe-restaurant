export type MenuType = 'food' | 'beverages';
export type FoodFilter = 'all' | 'veg' | 'non-veg';

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  type: MenuType;
  isVeg?: boolean;
  description?: string;
  isPopular?: boolean;
  isSignature?: boolean;
  price?: string;
  image?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  avatar?: string;
}

export interface InstagramPost {
  id: string;
  caption: string;
  image: string;
  likes: number;
  comments: number;
  date: string;
}

export interface ReservationFormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  specialRequests: string;
}
