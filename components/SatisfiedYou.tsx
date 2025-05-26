
import React from 'react';
import { 
    PRICING_DATA, BUSINESS_HOURS_DATA, LocationMarkerIcon,
    SATISFIED_YOU_TITLE_PART1, SATISFIED_YOU_TITLE_HIGHLIGHT,
    SATISFIED_YOU_PARAGRAPH_1, SATISFIED_YOU_PARAGRAPH_2,
    OUR_SERVICES_TEXT, BOOK_NOW_TEXT, LOCATION_TEXT,
    FOOTER_BUSINESS_HOURS_TITLE, ALT_TEXT_SATISFIED_CUSTOMER
} from '../constants';
import { BusinessHour } from '../types';
import { Button } from './Button';

const BusinessHoursDisplayCompact: React.FC<{ hours: BusinessHour[], className?: string}> = ({ hours, className }) => (
    <div className={`mt-6 ${className} animate-fadeInUp`} style={{animationDelay: '0.6s'}}>
        <h3 className="text-lg font-semibold text-white mb-3">{FOOTER_BUSINESS_HOURS_TITLE}</h3>
        <div className="space-y-1 text-sm">
        {hours.map((item) => (
            <div key={item.days} className="flex justify-between">
            <span className="font-medium text-gray-300">{item.days}:</span>
            <span className="text-gray-200">{item.time}</span>
            </div>
        ))}
        </div>
    </div>
);

export const SatisfiedYou: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#101929]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          {/* Pricing List */}
          <div className="lg:w-1/3 bg-[#C6A477] text-[#0B121F] p-8 rounded-lg shadow-xl animate-fadeInLeft" style={{animationDelay: '0.2s'}}>
            <h3 className="text-3xl font-playfair font-bold mb-8 text-center">{OUR_SERVICES_TEXT}</h3>
            <div className="space-y-6">
              {PRICING_DATA.map((item, index) => (
                <div key={item.name} className="pb-4 border-b border-[#0B121F]/20 last:border-b-0 animate-fadeInUp" style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-xl font-semibold">{item.name}</h4>
                    <span className="text-2xl font-bold">{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-800 mb-2">{item.description}</p>
                  <a href="#" className="text-sm font-semibold text-[#0B121F] hover:underline">{BOOK_NOW_TEXT} &rarr;</a>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-2/3 text-center lg:text-left flex flex-col justify-between">
            <div className="animate-fadeInRight" style={{animationDelay: '0.2s'}}>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                {SATISFIED_YOU_TITLE_PART1} <br /><span className="text-[#C6A477]">{SATISFIED_YOU_TITLE_HIGHLIGHT}</span>
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                {SATISFIED_YOU_PARAGRAPH_1}
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                {SATISFIED_YOU_PARAGRAPH_2}
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-8 items-start">
                 <div className="md:w-1/2 relative group animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                    <img 
                        src="https://images.unsplash.com/photo-1693755807658-17ce5331aacb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt={ALT_TEXT_SATISFIED_CUSTOMER}
                        className="rounded-lg shadow-xl w-full h-auto object-cover transform group-hover:shadow-2xl transition-shadow duration-300"
                    />
                    <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-black/70 text-white p-3 md:p-4 rounded-md flex items-center text-xs md:text-sm">
                        <LocationMarkerIcon className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#C6A477]" />
                        <span>{LOCATION_TEXT}</span>
                    </div>
                </div>
                <div className="md:w-1/2">
                     <BusinessHoursDisplayCompact hours={BUSINESS_HOURS_DATA} className="bg-[#0B121F] p-6 rounded-lg shadow-lg"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
