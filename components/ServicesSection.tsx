
import React, { useState } from 'react';
import { 
    SERVICES_DATA, MustacheIcon, ChevronLeftIcon, ChevronRightIcon, 
    SERVICES_TITLE, SERVICES_SUBTITLE, BOOK_APPOINTMENT_TEXT, PREVIOUS_TEXT, NEXT_TEXT 
} from '../constants';
import { Service } from '../types';
import { Button } from './Button';

const ServiceCard: React.FC<{ service: Service; animationDelay: string }> = ({ service, animationDelay }) => {
  return (
    <div 
        className="bg-[#0B121F] border border-[#1f2937] p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg min-w-[280px] flex-shrink-0 animate-fadeInUp"
        style={{animationDelay}}
    >
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-xl font-playfair font-semibold text-white mb-2">{service.name}</h3>
      <p className="text-gray-400 text-sm mb-4 h-16 overflow-hidden">{service.description}</p>
      <p className="text-3xl font-bold text-[#C6A477] mb-5">Rp{service.price}K</p>
      <Button variant="outline" size="sm" className="w-full">{BOOK_APPOINTMENT_TEXT}</Button>
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = useItemsPerPage();

  function useItemsPerPage() {
    const [items, setItems] = useState(3); // Default for large screens
    React.useEffect(() => {
      const updateItems = () => {
        if (window.innerWidth < 768) setItems(1); // Mobile
        else if (window.innerWidth < 1024) setItems(2); // Tablet
        else setItems(3); // Desktop default
      };
      updateItems();
      window.addEventListener('resize', updateItems);
      return () => window.removeEventListener('resize', updateItems);
    }, []);
    return items;
  }

  const totalPages = Math.ceil(SERVICES_DATA.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
  };
  
  const visibleServices = SERVICES_DATA.slice(currentIndex * itemsPerPage, (currentIndex * itemsPerPage) + itemsPerPage);

  return (
    <section id="services" className="py-16 md:py-24 bg-[#101929]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          <div className="flex justify-center items-center space-x-4 mb-2">
            <MustacheIcon className="w-10 h-10 text-[#C6A477] transform scale-x-[-1]" />
            <MustacheIcon className="w-16 h-16 text-[#C6A477]" />
            <MustacheIcon className="w-10 h-10 text-[#C6A477]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">{SERVICES_TITLE}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {SERVICES_SUBTITLE}
          </p>
        </div>
        
        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.id} service={service} animationDelay={`${0.4 + index * 0.1}s`} />
          ))}
        </div>

        {/* Tablet and Mobile: Carousel layout */}
        <div className="lg:hidden relative">
          <div className="flex overflow-x-hidden justify-center">
            <div className="flex gap-6 px-4"> 
              {visibleServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} animationDelay={`${0.4 + index * 0.1}s`} />
              ))}
            </div>
          </div>
          {SERVICES_DATA.length > itemsPerPage && (
            <>
              <button 
                onClick={handlePrev} 
                className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-[#C6A477] text-[#0B121F] p-2 rounded-full shadow-md hover:bg-[#b39065] transition-colors z-10 -ml-2 md:ml-0"
                aria-label={`${PREVIOUS_TEXT} layanan`}
              >
                <ChevronLeftIcon className="w-6 h-6"/>
              </button>
              <button 
                onClick={handleNext} 
                className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-[#C6A477] text-[#0B121F] p-2 rounded-full shadow-md hover:bg-[#b39065] transition-colors z-10 -mr-2 md:mr-0"
                aria-label={`${NEXT_TEXT} layanan`}
              >
                <ChevronRightIcon className="w-6 h-6"/>
              </button>
            </>
          )}
        </div>

      </div>
    </section>
  );
};
