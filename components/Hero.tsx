
import React from 'react';
import { Button } from './Button';
import { 
    HERO_LOCATION, HERO_TITLE_PART1, HERO_TITLE_PART2, 
    HERO_SUBTITLE, HERO_BUTTON_TEXT, ALT_TEXT_HERO_BACKGROUND
} from '../constants';

export const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-[80vh] md:h-[90vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}
      aria-label={ALT_TEXT_HERO_BACKGROUND}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <div className="max-w-2xl">
          <p className="text-[#C6A477] text-lg md:text-xl font-medium mb-2 tracking-wider animate-fadeInUp" style={{animationDelay: '0.2s'}}>{HERO_LOCATION}</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-4 leading-tight animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            {HERO_TITLE_PART1} <br className="hidden md:block" /> {HERO_TITLE_PART2}
          </h1>
          <p className="text-base md:text-lg text-[#F0EBE3] mb-8 max-w-md mx-auto md:mx-0 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            {HERO_SUBTITLE}
          </p>
          <div className="animate-fadeInUp" style={{animationDelay: '0.8s'}}>
            <Button variant="primary" size="lg">{HERO_BUTTON_TEXT}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
