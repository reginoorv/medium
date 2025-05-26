
import React, { useState } from 'react';
import { Button } from './Button';
import {
    NEWSLETTER_SUBSCRIBE_TITLE, NEWSLETTER_DISCOUNT_TEXT_PART1,
    NEWSLETTER_DISCOUNT_TEXT_HIGHLIGHT, NEWSLETTER_PARAGRAPH,
    NEWSLETTER_EMAIL_PLACEHOLDER, NEWSLETTER_SUBSCRIBE_BUTTON,
    RESERVATION_BUTTON_TEXT
} from '../constants';

const BarberToolsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ikon Peralatan Barber">
        <rect width="200" height="150" fill="transparent" />
        {/* Scissors */}
        <path d="M50 30 C 30 30, 20 50, 35 65 L 65 95 C 80 110, 70 130, 50 130 C 30 130, 20 110, 20 90 C 20 70, 30 50, 50 30 Z M 50 30 C 70 30, 80 50, 65 65 L 35 95 C 20 110, 30 130, 50 130" stroke="#0B121F" strokeWidth="5" fill="#F0EBE3"/>
        <circle cx="30" cy="110" r="10" fill="#0B121F"/>
        <circle cx="70" cy="110" r="10" fill="#0B121F"/>
        {/* Comb */}
        <rect x="100" y="30" width="80" height="15" rx="5" fill="#0B121F"/>
        {[...Array(10)].map((_, i) => (
            <rect key={i} x={100 + i * 7} y="45" width="4" height="40" fill="#0B121F"/>
        ))}
        {/* Razor */}
        <path d="M100 100 L180 100 L170 120 L110 120 Z" fill="#F0EBE3" stroke="#0B121F" strokeWidth="4"/>
        <rect x="130" y="120" width="20" height="20" fill="#0B121F"/>
         {/* Moustache */}
        <path d="M50 10 Q60 -10, 90 5 T130 5 Q140 -10, 150 10 Q140 30, 130 15 T90 15 Q60 30, 50 10 Z" fill="#0B121F" transform="translate(20, 110) scale(0.3)"/>
    </svg>
);


export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Berlangganan dengan email:', email);
    alert(`Terima kasih telah berlangganan dengan ${email}!`);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-[#C6A477] text-[#0B121F]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/3 text-center lg:text-left animate-fadeInLeft" style={{animationDelay: '0.2s'}}>
            <BarberToolsIcon className="w-40 h-auto mx-auto lg:mx-0 mb-6"/>
            <Button variant="secondary" size="lg" className="uppercase tracking-wider">{RESERVATION_BUTTON_TEXT}</Button>
          </div>
          
          <div className="lg:w-2/3 text-center lg:text-left animate-fadeInRight" style={{animationDelay: '0.2s'}}>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2 uppercase">
              {NEWSLETTER_SUBSCRIBE_TITLE}
            </h2>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-[#0B121F] mb-4">
              {NEWSLETTER_DISCOUNT_TEXT_PART1} <span className="text-white">{NEWSLETTER_DISCOUNT_TEXT_HIGHLIGHT}</span>
            </h3>
            <p className="mb-8 text-gray-800 leading-relaxed max-w-xl">
              {NEWSLETTER_PARAGRAPH}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={NEWSLETTER_EMAIL_PLACEHOLDER}
                required
                aria-label={NEWSLETTER_EMAIL_PLACEHOLDER}
                className="flex-grow px-4 py-3 rounded-md border border-gray-700 bg-white text-[#0B121F] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0B121F]"
              />
              <Button type="submit" variant="secondary" size="md" className="sm:py-3">{NEWSLETTER_SUBSCRIBE_BUTTON}</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
