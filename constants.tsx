
import React from 'react';
// Fix: Import BlogPost type
import { NavItem, Service, Artist, Testimonial, BusinessHour, BlogPost } from './types';

export const NAV_LINKS: NavItem[] = [
  { name: 'Beranda', href: '#' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Layanan', href: '#services' },
  { name: 'Misi Kami', href: '#mission' },
  // { name: 'Blog', href: '#blog' }, // Dihapus
  { name: 'Hubungi Kami', href: '#contact' },
];

export const SOCIAL_ICON_SIZE = "w-5 h-5";

export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || SOCIAL_ICON_SIZE} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Facebook">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || SOCIAL_ICON_SIZE} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Twitter">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || SOCIAL_ICON_SIZE} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Instagram">
    <path fillRule="evenodd" d="M12.315 2.32a.75.75 0 01.75.75V5.25h.002a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75V3.07a.75.75 0 01.75-.75zM4.5 6.375A1.875 1.875 0 002.625 8.25v7.5A1.875 1.875 0 004.5 17.625h15A1.875 1.875 0 0021.375 15.75v-7.5A1.875 1.875 0 0019.5 6.375h-15zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM17.25 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
     <path d="M12 13.875a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" />
  </svg>
);

export const TiktokIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || SOCIAL_ICON_SIZE} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TikTok">
        <path d="M21.427 9.603c.05.338.073.685.073 1.037 0 5.342-4.324 9.666-9.667 9.666-5.342 0-9.667-4.324-9.667-9.667C2.166 5.302 5.64 1.5 10.333 1.5c.96 0 1.88.14 2.729.4L13.75 4.1c-.469-.11-.958-.18-1.417-.18-3.354 0-6.375 2.23-7.229 5.28h2.917c.094-.938.3-1.833.604-2.603L7.25 9.322v5.104c0 .728.583 1.312 1.313 1.312h4.583c.219 0 .417-.083.584-.188.771-.48 1.313-1.292 1.313-2.208V5.343l1.875-1.073c.5.77.854 1.646 1.02 2.583h2.792Z"/>
    </svg>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.46 4.418a1 1 0 01-.364 1.118l-2.475 1.857A11.035 11.035 0 008.448 15.552l1.857-2.475a1 1 0 011.118-.364l4.418 1.46A1 1 0 0119 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
  </svg>
);

export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
);

export const LocationMarkerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
  </svg>
);

export const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
  </svg>
);

export const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export const MustacheIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg className={className || "w-8 h-8"} style={style} viewBox="0 0 200 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10 30 Q20 0, 50 25 T90 25 Q100 0, 110 30 Q100 60, 90 35 T50 35 Q20 60, 10 30 M110 30 Q120 0, 150 25 T190 25 Q200 0, 190 30 Q200 60, 190 35 T150 35 Q120 60, 110 30 Z" />
  </svg>
);

export const BeardTrimmingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-12 h-12"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Ikon Potong Jenggot">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7h16M4 7c0 2.667 2.667 4 4 4s4-1.333 4-4M4 7V5c0-1.105.895-2 2-2h8c1.105 0 2 .895 2 2v2m0 0c0 2.667-2.667 4-4 4s-4-1.333-4-4m8 0h-2m2 0v2c0 .552-.448 1-1 1h-4c-.552 0-1-.448-1-1v-2m6 4v4M6 15v4m0-4h12m-6 4h.01M6 19h12"/>
  </svg>
);

export const CleanShaveIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || "w-12 h-12"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Ikon Cukur Bersih">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2L8 6v2h8V6l-4-4zM6 10v7c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-7H6zM4 10h16M9 14h6"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 6.5l-9 9m0-9l9 9"/>
    </svg>
);

export const HairCutIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-12 h-12"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Ikon Potong Rambut">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.636 5.636a9 9 0 1012.728 0M12 3v0M12 21v0M3 12h0M21 12h0M17 7l-10 10M7 7l10 10"/>
    <circle cx="7" cy="7" r="1.5" stroke="none" fill="currentColor" />
    <circle cx="17" cy="7" r="1.5" stroke="none" fill="currentColor" />
  </svg>
);

export const FaceWashIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || "w-12 h-12"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Ikon Cuci Muka">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H7a3 3 0 01-3-3V7a3 3 0 013-3h10a3 3 0 013 3v6a3 3 0 01-3 3h-2m-4 0v3m0 0H9m3 0h3m-3 0a3 3 0 10-6 0 3 3 0 006 0z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13a3 3 0 00-3-3H8a1 1 0 000 2h1a1 1 0 011 1v1m4-3a3 3 0 013-3h1a1 1 0 010 2h-1a1 1 0 00-1 1v1"/>
    </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);


export const SERVICES_DATA: Service[] = [
  { id: '1', icon: <BeardTrimmingIcon className="w-12 h-12 text-[#C6A477] mx-auto group-hover:text-white transition-colors duration-300"/>, name: 'Potong Jenggot', description: 'Rapikan jenggot Anda dengan presisi untuk tampilan yang tajam dan berkelas.', price: '30' },
  { id: '2', icon: <CleanShaveIcon className="w-12 h-12 text-[#C6A477] mx-auto group-hover:text-white transition-colors duration-300"/>, name: 'Cukur Bersih', description: 'Nikmati sensasi cukur tradisional yang halus dan menyegarkan kulit wajah Anda.', price: '49' },
  { id: '3', icon: <HairCutIcon className="w-12 h-12 text-[#C6A477] mx-auto group-hover:text-white transition-colors duration-300"/>, name: 'Potong Rambut', description: 'Dapatkan potongan rambut gaya terkini atau klasik sesuai keinginan Anda.', price: '25' },
  { id: '4', icon: <FaceWashIcon className="w-12 h-12 text-[#C6A477] mx-auto group-hover:text-white transition-colors duration-300"/>, name: 'Cuci Muka', description: 'Perawatan wajah untuk membersihkan dan meremajakan kulit Anda secara mendalam.', price: '19' },
];

export const ARTISTS_DATA: Artist[] = [
  { id: '1', name: 'Rizky Maulana', role: 'Barber Senior', image: 'https://picsum.photos/seed/artist1id/400/500', socials: { facebook: '#', twitter: '#', instagram: '#', tiktok: '#' } },
  { id: '2', name: 'Andika Pratama', role: 'Barber Junior', image: 'https://picsum.photos/seed/artist2id/400/500', socials: { facebook: '#', twitter: '#', instagram: '#', tiktok: '#' } },
  { id: '3', name: 'Budi Santoso', role: 'Barber Baru', image: 'https://picsum.photos/seed/artist3id/400/500', socials: { facebook: '#', twitter: '#', instagram: '#', tiktok: '#' } },
  { id: '4', name: 'Agus Wijaya', role: 'Master Barber', image: 'https://picsum.photos/seed/artist4id/400/500', socials: { facebook: '#', twitter: '#', instagram: '#', tiktok: '#' } },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { id: '1', quote: 'Pelayanan di MEDIUM Barbershop sangat memuaskan! Para barber profesional dan ramah. Hasil potongannya selalu sesuai dengan ekspektasi saya. Tempatnya juga nyaman dan bersih. Sangat direkomendasikan!', name: 'Adi Nugroho', image: 'https://picsum.photos/seed/client1id/100/100' },
  { id: '2', quote: 'Pengalaman potong rambut terbaik yang pernah saya rasakan. Detailnya luar biasa, dan suasananya sangat bersahabat. Saya pasti akan kembali lagi ke MEDIUM Barbershop.', name: 'Dewi Lestari', image: 'https://picsum.photos/seed/client2id/100/100' },
  { id: '3', quote: 'Barber di MEDIUM benar-benar seniman! Potongan rambut saya selalu keren dan tahan lama. Harganya juga sepadan dengan kualitas yang diberikan. Terima kasih MEDIUM!', name: 'Fajar Setiawan', image: 'https://picsum.photos/seed/client3id/100/100' },
];

export const BUSINESS_HOURS_DATA: BusinessHour[] = [
    { days: 'Senin - Jumat', time: '10:00 - 20:00' },
    { days: 'Sabtu', time: '11:00 - 18:00' },
    { days: 'Minggu', time: 'Libur' },
];

export const PRICING_DATA = [
    { name: "Potong Rambut", price: "Rp50K", description: "Potongan presisi untuk semua gaya." },
    { name: "Cukur", price: "Rp40K", description: "Cukur klasik dengan handuk hangat." },
    { name: "Cuci Muka", price: "Rp75K", description: "Pembersihan wajah yang menyegarkan." },
    { name: "Paket Lengkap", price: "Rp120K", description: "Pengalaman grooming menyeluruh." },
];

// Constant for brand name
export const BRAND_NAME = "MEDIUM";
export const BRAND_TAGLINE = "BARBERSHOP";
export const HERO_LOCATION = "JAKARTA, INDONESIA";
export const HERO_TITLE_PART1 = "Ciptakan Gaya";
export const HERO_TITLE_PART2 = "Khas Anda";
export const HERO_SUBTITLE = "Para barber kami memiliki keahlian dalam potong rambut, perawatan wajah, hingga penataan gaya rambut terkini.";
export const HERO_BUTTON_TEXT = "HUBUNGI KAMI";

export const EXPERIENCE_TITLE_HIGHLIGHT = "10 tahun"; 
export const EXPERIENCE_TITLE_TEXT = "Pengalaman";
export const EXPERIENCE_PARAGRAPH_1 = "Kami menyatukan orang-orang dari berbagai lapisan masyarakat untuk menikmati dialog terbuka. Barbershop kami memainkan peran penting dalam komunitas.";
export const EXPERIENCE_PARAGRAPH_2 = "Barber kami ahli dalam memotong rambut, perawatan wajah, keramas, mensterilkan peralatan, dan menata rambut. Kami adalah bagian tak terpisahkan dari komunitas.";
export const BOOK_APPOINTMENT_TEXT = "BUAT JANJI TEMU";

export const SERVICES_TITLE = "Layanan yang Kami Sediakan";
export const SERVICES_SUBTITLE = "Barbershop kami menawarkan berbagai layanan premium, disesuaikan untuk memenuhi kebutuhan unik setiap pria.";

export const BEST_BARBERSHOP_TITLE_PART1 = "Kami Peduli dengan";
export const BEST_BARBERSHOP_TITLE_HIGHLIGHT = "Rambut dan Jenggot Anda";
export const BEST_BARBERSHOP_PARAGRAPH = "Barber kami ahli dalam memotong rambut, perawatan wajah, keramas, hingga menata rambut. Kami adalah bagian penting dari komunitas, menciptakan gaya yang menawan.";
export const BEST_BARBERSHOP_FEATURES = [
    "Kami memperhatikan Anda dan gaya hidup Anda.",
    "Rambut dan jenggot adalah aset penting untuk penampilan Anda.",
    `Dengan pengalaman ${EXPERIENCE_TITLE_HIGHLIGHT}, kami wujudkan ekspektasi dan gaya unik Anda.`
  ];

export const SATISFIED_YOU_TITLE_PART1 = "Kami Berikan yang Terbaik";
export const SATISFIED_YOU_TITLE_HIGHLIGHT = "untuk Kepuasan Anda.";
export const SATISFIED_YOU_PARAGRAPH_1 = "Para barber kami memiliki berbagai keahlian seperti memotong rambut, perawatan wajah, keramas, mensterilkan peralatan, dan menata rambut. Barbershop kami berperan signifikan dalam banyak komunitas.";
export const SATISFIED_YOU_PARAGRAPH_2 = "Orang-orang dari berbagai kalangan dapat berkumpul dan menikmati dialog terbuka di tempat kami. Kami bangga menjadi bagian dari komunitas.";
export const OUR_SERVICES_TEXT = "Layanan Kami";
export const BOOK_NOW_TEXT = "Pesan Sekarang";
export const LOCATION_TEXT = "Jl. Merdeka No. 123, Jakarta Pusat";

export const ARTISTS_TITLE_PART1 = "Temui Tim";
export const ARTISTS_TITLE_HIGHLIGHT = "Artist Kami";
export const ARTISTS_SUBTITLE = "Tim barber ahli kami siap menciptakan tampilan sempurna untuk Anda.";
export const PREVIOUS_TEXT = "Sebelumnya";
export const NEXT_TEXT = "Berikutnya";

export const NEWSLETTER_SUBSCRIBE_TITLE = "Berlangganan Newsletter Kami";
export const NEWSLETTER_DISCOUNT_TEXT_PART1 = "Dapatkan Diskon";
export const NEWSLETTER_DISCOUNT_TEXT_HIGHLIGHT = "10%";
export const NEWSLETTER_PARAGRAPH = "Para barber kami memiliki keahlian beragam. Barbershop kami memainkan peran penting dalam komunitas, menghubungkan berbagai orang.";
export const NEWSLETTER_EMAIL_PLACEHOLDER = "Masukkan email Anda";
export const NEWSLETTER_SUBSCRIBE_BUTTON = "Berlangganan";
export const RESERVATION_BUTTON_TEXT = "RESERVASI";

export const TESTIMONIALS_TITLE_PART1 = "Klien";
export const TESTIMONIALS_TITLE_HIGHLIGHT = "Kami yang Terhormat";
export const TESTIMONIALS_SUBTITLE = "Dengarkan apa kata pelanggan setia kami tentang pengalaman mereka di MEDIUM Barbershop.";

// Fix: Define BLOG_POSTS_DATA and uncomment other blog-related constants
// Blog related constants (REMOVED)
export const BLOG_POSTS_DATA: BlogPost[] = [
  // Example Blog Post (optional, can be an empty array)
  // { 
  //   id: '1', 
  //   title: 'Tips Merawat Jenggot Agar Tetap Sehat', 
  //   date: '15 Juli 2024', 
  //   image: 'https://picsum.photos/seed/blog1/400/300', 
  //   excerpt: 'Jenggot yang sehat dan rapi membutuhkan perawatan rutin. Ikuti tips berikut ini...' 
  // },
  // { 
  //   id: '2', 
  //   title: 'Gaya Rambut Pria Terkini 2024', 
  //   date: '10 Juli 2024', 
  //   image: 'https://picsum.photos/seed/blog2/400/300', 
  //   excerpt: 'Bingung pilih gaya rambut? Lihat tren terbaru yang bisa kamu coba tahun ini.' 
  // },
  // { 
  //   id: '3', 
  //   title: 'Manfaat Cukur Tradisional untuk Kulit Wajah', 
  //   date: '05 Juli 2024', 
  //   image: 'https://picsum.photos/seed/blog3/400/300', 
  //   excerpt: 'Selain bersih, cukur tradisional juga memiliki banyak manfaat lain untuk kulitmu.' 
  // }
];
export const BLOG_TITLE_VERTICAL = "Tips dan Trik";
export const BLOG_TITLE_HORIZONTAL_PART1 = "Tips dan";
export const BLOG_TITLE_HORIZONTAL_PART2 = "Trik";
export const BLOG_SUBTITLE = "Tetap update dengan tren grooming pria terbaru, saran ahli, dan inspirasi gaya dari blog kami.";
export const READ_MORE_TEXT = "Baca Selengkapnya";

export const FOOTER_LINKS_TITLE = "Tautan";
export const FOOTER_BUSINESS_HOURS_TITLE = "Jam Operasional";
export const FOOTER_COMPANY_TITLE = "Perusahaan";
export const FOOTER_CONTACT_TITLE = "Kontak";
export const FOOTER_COPYRIGHT_TEXT = `© ${new Date().getFullYear()} Hak Cipta Dilindungi DesainRoy.`;
export const FOOTER_COMPANY_LINKS: NavItem[] = [
    { name: 'Ulasan', href: '#' },
    { name: 'Pers & Berita', href: '#' },
    { name: 'Kepercayaan & Keamanan', href: '#' },
    { name: 'Acara', href: '#' },
    { name: 'Peta Situs', href: '#' },
  ];
export const CONTACT_PHONE = "+62 21 1234 5678";
export const CONTACT_EMAIL = "info@mediumbarber.com";
export const TOP_BAR_SCHEDULE_TEXT = "SENIN - JUMAT: 08:00 - 21:00"; 
export const CONTACT_ADDRESS = "Jl. Merdeka No. 123, Jakarta Pusat";

// Alt texts for images
export const ALT_TEXT_HERO_BACKGROUND = "Barber sedang memotong rambut klien di barbershop";
export const ALT_TEXT_EXPERIENCED_BARBER = "Barber berpengalaman sedang bekerja";
export const ALT_TEXT_MASTER_BARBER_DETAIL = "Master Barber"; 
export const ALT_TEXT_BEARD_CARE = "Klien dengan jenggot yang terawat baik";
export const ALT_TEXT_SATISFIED_CUSTOMER = "Klien puas setelah potong rambut";
export const ALT_TEXT_ARTIST_PROFILE_BASE = "Foto profil "; 
// Fix: Uncomment ALT_TEXT_BLOG_POST_IMAGE_BASE
export const ALT_TEXT_BLOG_POST_IMAGE_BASE = "Gambar untuk posting blog: ";
export const ALT_TEXT_CLIENT_TESTIMONIAL_BASE = "Foto klien "; 

// Blog Detail Page Constants (REMOVED)
// export const BLOG_DETAIL_BACK_BUTTON_TEXT = "Kembali ke Blog";
// export const BLOG_DETAIL_CONTENT_PLACEHOLDER_TITLE = "Konten Lengkap Segera Hadir";
// export const BLOG_DETAIL_CONTENT_PLACEHOLDER_TEXT = "Kami sedang menyiapkan konten menarik untuk Anda. Silakan periksa kembali nanti!";
