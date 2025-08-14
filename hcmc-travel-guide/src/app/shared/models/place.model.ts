export interface Location {
  address: string;
  district: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  directions: {
    en: string;
    vi: string;
  };
}

export interface OpeningHours {
  open: string;
  close: string;
  breakTime?: {
    start: string;
    end: string;
  };
}

export interface PriceRange {
  min: number;
  max: number;
  currency: 'VND' | 'USD';
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  author: string;
  date: Date;
  language: 'en' | 'vi';
}

export type PlaceCategory = 
  | 'food'           // Ăn uống
  | 'entertainment'  // Giải trí
  | 'accommodation'  // Chỗ ở
  | 'transportation' // Phương tiện
  | 'attraction'     // Điểm tham quan
  | 'shopping';      // Mua sắm

export interface Place {
  id: string;
  name: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
  shortDescription: {
    en: string;
    vi: string;
  };
  category: PlaceCategory[];
  location: Location;
  openingHours: OpeningHours;
  priceRange?: PriceRange;
  images: string[];
  rating: number;
  reviews: Review[];
  tips: {
    en: string[];
    vi: string[];
  };
  facilities: {
    parking: boolean;
    wifi: boolean;
    restroom: boolean;
    airConditioned: boolean;
  };
  contactInfo?: {
    phone?: string;
    email?: string;
    website?: string;
    socialMedia?: {
      facebook?: string;
      instagram?: string;
    };
  };
  // Specific fields for food places
  cuisine?: {
    type: string[];
    specialties: {
      en: string[];
      vi: string[];
    };
    dietaryOptions: {
      vegetarian: boolean;
      vegan: boolean;
      halal: boolean;
    };
    popularDishes: Array<{
      name: {
        en: string;
        vi: string;
      };
      description: {
        en: string;
        vi: string;
      };
      price: number;
      image?: string;
    }>;
  };
  // Specific fields for accommodation
  accommodation?: {
    type: 'hotel' | 'hostel' | 'apartment' | 'homestay';
    roomTypes: Array<{
      name: {
        en: string;
        vi: string;
      };
      capacity: number;
      amenities: string[];
      price: PriceRange;
    }>;
    checkIn: string;
    checkOut: string;
    policies: {
      en: string[];
      vi: string[];
    };
  };
  // Specific fields for transportation
  transportation?: {
    type: 'bus' | 'taxi' | 'bike' | 'train' | 'grab' | 'rental';
    routes?: string[];
    operatingHours: OpeningHours;
    bookingInfo?: {
      en: string;
      vi: string;
    };
    paymentMethods: string[];
  };
  // Specific fields for attractions
  attraction?: {
    type: 'cultural' | 'historical' | 'modern' | 'nature' | 'religious';
    bestTimeToVisit: {
      en: string;
      vi: string;
    };
    duration: number; // in minutes
    ticketing?: {
      required: boolean;
      price?: PriceRange;
      whereToBook?: string;
    };
  };
} 