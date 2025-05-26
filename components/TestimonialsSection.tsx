import React, { useState, useEffect } from 'react';
import { 
    TESTIMONIALS_DATA, MustacheIcon, ChevronLeftIcon, ChevronRightIcon,
    TESTIMONIALS_TITLE_PART1, TESTIMONIALS_TITLE_HIGHLIGHT, TESTIMONIALS_SUBTITLE,
    PREVIOUS_TEXT, NEXT_TEXT, BRAND_NAME, ALT_TEXT_CLIENT_TESTIMONIAL_BASE
} from '../constants';
import { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div 
        className="bg-[#182235]/70 backdrop-blur-md border border-[#C6A477]/30 rounded-xl shadow-2xl p-8 text-center transform transition-all duration-700 ease-in-out min-w-[300px] w-full max-w-lg md:max-w-xl mx-auto animate-cardEnter relative overflow-visible"
    >
      {testimonial.image && (
        <img 
          src={testimonial.image} 
          alt={`${ALT_TEXT_CLIENT_TESTIMONIAL_BASE}${testimonial.name}`} 
          className="w-28 h-28 rounded-full mx-auto mb-6 border-4 border-[#C6A477] shadow-lg"
        />
      )}
      <div className="relative mb-6 z-10">
        <span className="absolute -top-2 -left-3 text-7xl md:text-8xl text-[#C6A477]/40 font-playfair transform -translate-x-1/4 -translate-y-1/4 select-none z-0" aria-hidden="true">“</span>
        <p className="text-gray-200 italic leading-relaxed text-base md:text-lg min-h-[100px] md:min-h-[120px] flex items-center justify-center px-4 relative z-10">
            {testimonial.quote}
        </p>
        <span className="absolute -bottom-6 -right-3 text-7xl md:text-8xl text-[#C6A477]/40 font-playfair transform translate-x-1/4 translate-y-1/4 select-none z-0" aria-hidden="true">”</span>
      </div>
      <div className="flex justify-center my-6">
        <MustacheIcon className="w-12 h-auto text-[#C6A477]/70" />
      </div>
      <h4 className="text-xl font-playfair font-semibold text-white">{testimonial.name}</h4>
    </div>
  );
};

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 1; 
  const numMustaches = 30;

  const totalItems = TESTIMONIALS_DATA.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };
  
  useEffect(() => {
    if (totalItems <= 1) return;
    const timer = setTimeout(() => {
      handleNext();
    }, 7000); // Change testimonial every 7 seconds
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, totalItems]);


  const visibleTestimonials = [TESTIMONIALS_DATA[currentIndex]];

  return (
    <section className="py-16 md:py-24 bg-[#0B121F] relative overflow-hidden">
      <div className="absolute inset-0 opacity-100"> {/* Increased parent opacity slightly for better visibility of subtle mustaches */}
        {[...Array(numMustaches)].map((_, i) => (
          <MustacheIcon 
            key={i} 
            className="absolute text-[#F0EBE3] animated-mustache" 
            style={{
              width: `${Math.random() * 30 + 20}px`, // Smaller mustaches: 20px to 50px
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.04 + 0.01, // More subtle: 0.01 to 0.05
              animationDelay: `${Math.random() * 20}s`, // Stagger animation start
              animationDuration: `${Math.random() * 10 + 15}s` // Vary animation speed
            }} />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">{TESTIMONIALS_TITLE_PART1} <span className="text-[#C6A477]">{TESTIMONIALS_TITLE_HIGHLIGHT}</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">{TESTIMONIALS_SUBTITLE.replace('MEDIUM Barbershop', `${BRAND_NAME} Barbershop`)}</p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="min-h-[450px] md:min-h-[500px] flex items-center justify-center"> {/* Ensure enough height for card */}
            {/* The key here ensures the component re-mounts and animation plays on change */}
            {visibleTestimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          {totalItems > 1 && (
            <>
              <button 
                onClick={handlePrev} 
                className="absolute left-[-15px] sm:left-[-25px] md:left-[-60px] top-1/2 -translate-y-1/2 transform bg-[#C6A477] text-[#0B121F] p-3 sm:p-3.5 md:p-4 rounded-full shadow-lg hover:bg-[#b39065] hover:scale-110 transition-all duration-300 z-20 animate-fadeInLeft"
                aria-label={`${PREVIOUS_TEXT} testimoni`}
                style={{animationDelay: '0.4s'}}
              >
                <ChevronLeftIcon className="w-6 h-6 md:w-7 md:h-7"/>
              </button>
              <button 
                onClick={handleNext} 
                className="absolute right-[-15px] sm:right-[-25px] md:right-[-60px] top-1/2 -translate-y-1/2 transform bg-[#C6A477] text-[#0B121F] p-3 sm:p-3.5 md:p-4 rounded-full shadow-lg hover:bg-[#b39065] hover:scale-110 transition-all duration-300 z-20 animate-fadeInRight"
                aria-label={`${NEXT_TEXT} testimoni`}
                 style={{animationDelay: '0.4s'}}
              >
                <ChevronRightIcon className="w-6 h-6 md:w-7 md:h-7"/>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};