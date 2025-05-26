
import React from 'react';
import { 
    NAV_LINKS, BUSINESS_HOURS_DATA, PhoneIcon, MailIcon, LocationMarkerIcon, 
    FacebookIcon, TwitterIcon, InstagramIcon, TiktokIcon,
    FOOTER_LINKS_TITLE, FOOTER_BUSINESS_HOURS_TITLE, FOOTER_COMPANY_TITLE, FOOTER_CONTACT_TITLE,
    FOOTER_COMPANY_LINKS, CONTACT_PHONE, CONTACT_EMAIL, CONTACT_ADDRESS,
    BRAND_NAME, BRAND_TAGLINE, FOOTER_COPYRIGHT_TEXT
} from '../constants';
import { NavItem, BusinessHour } from '../types';

const FooterLinkColumn: React.FC<{ title: string; links: NavItem[]; animationDelay: string }> = ({ title, links, animationDelay }) => (
  <div className="animate-fadeInUp" style={{animationDelay}}>
    <h4 className="text-xl font-playfair font-semibold text-[#C6A477] mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map(link => (
        <li key={link.name}><a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</a></li>
      ))}
    </ul>
  </div>
);

const FooterBusinessHours: React.FC<{ hours: BusinessHour[]; animationDelay: string }> = ({ hours, animationDelay }) => (
  <div className="animate-fadeInUp" style={{animationDelay}}>
    <h4 className="text-xl font-playfair font-semibold text-[#C6A477] mb-4">{FOOTER_BUSINESS_HOURS_TITLE}</h4>
    <ul className="space-y-2">
      {hours.map(item => (
        <li key={item.days} className="text-gray-400">
          <span className="font-medium">{item.days}:</span> {item.time}
        </li>
      ))}
    </ul>
  </div>
);

const FooterContactInfo: React.FC<{animationDelay: string}> = ({animationDelay}) => (
  <div className="animate-fadeInUp" style={{animationDelay}}>
    <h4 className="text-xl font-playfair font-semibold text-[#C6A477] mb-4">{FOOTER_CONTACT_TITLE}</h4>
    <ul className="space-y-3">
      <li className="flex items-start">
        <PhoneIcon className="w-5 h-5 text-[#C6A477] mr-3 mt-1 flex-shrink-0" />
        <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-gray-400 hover:text-white transition-colors">{CONTACT_PHONE}</a>
      </li>
      <li className="flex items-start">
        <MailIcon className="w-5 h-5 text-[#C6A477] mr-3 mt-1 flex-shrink-0" />
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-400 hover:text-white transition-colors">{CONTACT_EMAIL}</a>
      </li>
      <li className="flex items-start">
        <LocationMarkerIcon className="w-5 h-5 text-[#C6A477] mr-3 mt-1 flex-shrink-0" />
        <span className="text-gray-400">{CONTACT_ADDRESS}</span>
      </li>
    </ul>
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#101929] text-[#F0EBE3] pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <FooterLinkColumn title={FOOTER_LINKS_TITLE} links={NAV_LINKS.slice(1,6)} animationDelay="0.2s" /> {/* Exclude Home */}
          <FooterBusinessHours hours={BUSINESS_HOURS_DATA} animationDelay="0.3s" />
          <FooterLinkColumn title={FOOTER_COMPANY_TITLE} links={FOOTER_COMPANY_LINKS} animationDelay="0.4s" />
          <FooterContactInfo animationDelay="0.5s" />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center mb-4 md:mb-0 animate-fadeIn" style={{animationDelay:'0.6s'}}>
            <svg className="w-10 h-10 text-[#C6A477] mr-2" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={`Logo ${BRAND_NAME} ${BRAND_TAGLINE}`}><path d="M25 5C19.4772 5 15 9.47715 15 15C15 16.8565 15.5271 18.5783 16.4541 20H10V25H16.4541C15.5271 26.4217 15 28.1435 15 30C15 35.5228 19.4772 40 25 40C30.5228 40 35 35.5228 35 30C35 28.1435 34.4729 26.4217 33.5459 25H40V20H33.5459C34.4729 18.5783 35 16.8565 35 15C35 9.47715 30.5228 5 25 5ZM20 15C20 12.2386 22.2386 10 25 10C27.7614 10 30 12.2386 30 15C30 17.7614 27.7614 20 25 20C22.2386 20 20 17.7614 20 15ZM20 30C20 27.2386 22.2386 25 25 25C27.7614 25 30 27.2386 30 30C30 32.7614 27.7614 35 25 35C22.2386 35 20 32.7614 20 30Z" fill="#C6A477"/><path d="M10 22.5L5 20M10 27.5L5 30M40 22.5L45 20M40 27.5L45 30" stroke="#C6A477" strokeWidth="2" strokeLinecap="round"/></svg>
            <div className="flex flex-col items-start -mt-1">
                 <span className="text-xl font-playfair font-bold leading-none">{BRAND_NAME.toUpperCase()}</span>
                 <span className="text-xs block leading-tight font-inter font-normal text-[#C6A477] tracking-widest">{BRAND_TAGLINE}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-4 md:mb-0 animate-fadeIn" style={{animationDelay:'0.7s'}}>{FOOTER_COPYRIGHT_TEXT}</p>
          <div className="flex space-x-4 animate-fadeIn" style={{animationDelay:'0.8s'}}>
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#C6A477] transition-colors"><FacebookIcon /></a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#C6A477] transition-colors"><TwitterIcon /></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#C6A477] transition-colors"><InstagramIcon /></a>
            <a href="#" aria-label="TikTok" className="text-gray-400 hover:text-[#C6A477] transition-colors"><TiktokIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
