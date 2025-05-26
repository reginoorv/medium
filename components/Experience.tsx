
import React from 'react';
import { Button } from './Button';
import { 
    BUSINESS_HOURS_DATA, BOOK_APPOINTMENT_TEXT, 
    EXPERIENCE_TITLE_HIGHLIGHT, EXPERIENCE_TITLE_TEXT,
    EXPERIENCE_PARAGRAPH_1, EXPERIENCE_PARAGRAPH_2,
    FOOTER_BUSINESS_HOURS_TITLE, ALT_TEXT_EXPERIENCED_BARBER,
    ALT_TEXT_MASTER_BARBER_DETAIL
} from '../constants';
import { BusinessHour } from '../types';


const BusinessHoursDisplay: React.FC<{ hours: BusinessHour[], className?: string}> = ({ hours, className }) => (
    <div className={`mt-6 ${className} animate-fadeInUp`} style={{animationDelay: '0.8s'}}>
        <h3 className="text-lg font-semibold text-[#C6A477] mb-3">{FOOTER_BUSINESS_HOURS_TITLE}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-sm">
        {hours.map((item) => (
            <div key={item.days}>
            <p className="font-medium">{item.days}</p>
            <p className="text-gray-400">{item.time}</p>
            </div>
        ))}
        </div>
    </div>
);

export const Experience: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#101929]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 animate-fadeInLeft" style={{animationDelay: '0.2s'}}>
              Kami Memiliki <span className="text-[#C6A477]">{EXPERIENCE_TITLE_HIGHLIGHT}</span> {EXPERIENCE_TITLE_TEXT}
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed animate-fadeInLeft" style={{animationDelay: '0.4s'}}>
              {EXPERIENCE_PARAGRAPH_1}
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed animate-fadeInLeft" style={{animationDelay: '0.6s'}}>
              {EXPERIENCE_PARAGRAPH_2}
            </p>
            <BusinessHoursDisplay hours={BUSINESS_HOURS_DATA} />
            <div className="mt-10 animate-fadeInLeft" style={{animationDelay: '1s'}}>
              <Button variant="primary" size="lg">{BOOK_APPOINTMENT_TEXT}</Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 flex justify-center items-center animate-fadeInRight" style={{animationDelay: '0.4s'}}>
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#C6A477] rounded-lg transform rotate-[-3deg]"></div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                 <img 
                    src="https://images.unsplash.com/photo-1598524374912-6b0b0bab43dd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt={ALT_TEXT_EXPERIENCED_BARBER}
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 p-4 bg-black/70 rounded">
                    <p className="text-white font-semibold text-lg">{ALT_TEXT_MASTER_BARBER_DETAIL} Rizky</p>
                    <p className="text-[#C6A477] text-sm">{EXPERIENCE_TITLE_HIGHLIGHT} Keunggulan</p>
                </div>
              </div>
              {/* Decorative element inspired by the circular frame in original image */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-dashed border-[#C6A477] rounded-full opacity-50 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
