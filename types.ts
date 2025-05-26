
export interface NavItem {
  name: string;
  href: string;
}

export interface Service {
  id: string;
  icon: React.ReactNode;
  name: string;
  description: string;
  price: string;
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    tiktok?: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  image?: string; // Optional image for testimonial
}

export interface BusinessHour {
  days: string;
  time: string;
}

// Fix: Define BlogPost interface
export interface BlogPost {
  id: string;
  image: string;
  title: string;
  date: string;
  excerpt?: string;
}
