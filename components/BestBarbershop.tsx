
import React from 'react';
import { Button } from './Button';
import { 
    CheckIcon, BOOK_APPOINTMENT_TEXT, BRAND_NAME,
    BEST_BARBERSHOP_TITLE_PART1, BEST_BARBERSHOP_TITLE_HIGHLIGHT,
    BEST_BARBERSHOP_PARAGRAPH, BEST_BARBERSHOP_FEATURES,
    ALT_TEXT_BEARD_CARE
} from '../constants';

export const BestBarbershop: React.FC = () => {
  return (
    <section id="mission" className="py-16 md:py-24 bg-[#0B121F] relative overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-5 pointer-events-none">
        <h1 className="text-[10vw] md:text-[8vw] lg:text-[120px] font-playfair font-bold text-gray-700 whitespace-nowrap transform scale-150 select-none">
          {BRAND_NAME.toUpperCase()} TERBAIK
        </h1>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Content */}
          <div className="lg:w-1/2 flex justify-center animate-fadeInLeft" style={{animationDelay: '0.4s'}}>
            <div className="relative w-full max-w-md group">
              <img 
                src="https://picsum.photos/seed/barbercare/500/550" 
                alt={ALT_TEXT_BEARD_CARE}
                className="rounded-lg shadow-2xl object-cover w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C6A477] rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
               <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-dashed border-[#C6A477] rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 animate-fadeInRight" style={{animationDelay: '0.2s'}}>
              {BEST_BARBERSHOP_TITLE_PART1} <br className="hidden md:block" /> <span className="text-[#C6A477]">{BEST_BARBERSHOP_TITLE_HIGHLIGHT}</span>
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed animate-fadeInRight" style={{animationDelay: '0.4s'}}>
              {BEST_BARBERSHOP_PARAGRAPH}
            </p>
            <ul className="space-y-3 mb-10 text-left">
              {BEST_BARBERSHOP_FEATURES.map((feature, index) => (
                <li key={index} className="flex items-start animate-fadeInRight" style={{animationDelay: `${0.5 + index * 0.1}s`}}>
                  <CheckIcon className="w-5 h-5 text-[#C6A477] mr-3 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="animate-fadeInRight" style={{animationDelay: '0.8s'}}>
              <Button variant="primary" size="lg">{BOOK_APPOINTMENT_TEXT}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
