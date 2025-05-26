
import React, { useState, useEffect } from 'react';
import { 
  NAV_LINKS, FacebookIcon, TwitterIcon, InstagramIcon, TiktokIcon, 
  PhoneIcon, MailIcon, MenuIcon, XIcon, MustacheIcon,
  BRAND_NAME, BRAND_TAGLINE, CONTACT_PHONE, CONTACT_EMAIL, BOOK_APPOINTMENT_TEXT,
  TOP_BAR_SCHEDULE_TEXT
} from '../constants';
import { NavItem } from '../types';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B121F]/80 backdrop-blur-md shadow-lg' : 'bg-[#0B121F]'}`}>
      {/* Top Bar */}
      <div className={`bg-[#101929]/80 text-sm transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0 animate-fadeInLeft" style={{animationDelay: '0.2s'}}>
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="flex items-center hover:text-[#C6A477] transition-colors duration-300">
              <PhoneIcon className="w-4 h-4 mr-1.5" /> {CONTACT_PHONE}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center hover:text-[#C6A477] transition-colors duration-300">
              <MailIcon className="w-4 h-4 mr-1.5" /> {CONTACT_EMAIL}
            </a>
          </div>
          <div className="flex items-center space-x-3 animate-fadeInRight" style={{animationDelay: '0.2s'}}>
            <span className="hidden sm:inline">{TOP_BAR_SCHEDULE_TEXT}</span>
            <div className="flex space-x-3">
              <a href="#" aria-label="Facebook" className="hover:text-[#C6A477] transition-all duration-300 transform hover:scale-110"><FacebookIcon /></a>
              <a href="#" aria-label="Twitter" className="hover:text-[#C6A477] transition-all duration-300 transform hover:scale-110"><TwitterIcon /></a>
              <a href="#" aria-label="Instagram" className="hover:text-[#C6A477] transition-all duration-300 transform hover:scale-110"><InstagramIcon /></a>
              <a href="#" aria-label="TikTok" className="hover:text-[#C6A477] transition-all duration-300 transform hover:scale-110"><TiktokIcon /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`border-b ${isScrolled ? 'border-transparent' : 'border-[#101929]'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2 text-2xl font-playfair font-bold text-white animate-fadeInLeft" style={{animationDelay: '0.4s'}}>
             <svg className="w-10 h-10 text-[#C6A477]" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Logo MEDIUM Barbershop"><path d="M25 5C19.4772 5 15 9.47715 15 15C15 16.8565 15.5271 18.5783 16.4541 20H10V25H16.4541C15.5271 26.4217 15 28.1435 15 30C15 35.5228 19.4772 40 25 40C30.5228 40 35 35.5228 35 30C35 28.1435 34.4729 26.4217 33.5459 25H40V20H33.5459C34.4729 18.5783 35 16.8565 35 15C35 9.47715 30.5228 5 25 5ZM20 15C20 12.2386 22.2386 10 25 10C27.7614 10 30 12.2386 30 15C30 17.7614 27.7614 20 25 20C22.2386 20 20 17.7614 20 15ZM20 30C20 27.2386 22.2386 25 25 25C27.7614 25 30 27.2386 30 30C30 32.7614 27.7614 35 25 35C22.2386 35 20 32.7614 20 30Z" fill="#C6A477"/><path d="M10 22.5L5 20M10 27.5L5 30M40 22.5L45 20M40 27.5L45 30" stroke="#C6A477" strokeWidth="2" strokeLinecap="round"/></svg>
            <div className="flex flex-col items-start -mt-1">
                <span className="leading-none">{BRAND_NAME.toUpperCase()}</span>
                <span className="text-xs block leading-tight font-inter font-normal text-[#C6A477] tracking-widest">{BRAND_TAGLINE}</span>
            </div>
          </a>
          <nav className="hidden lg:flex space-x-6 items-center animate-fadeIn" style={{animationDelay: '0.6s'}}>
            {NAV_LINKS.map((link: NavItem, index: number) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-[#C6A477] transition-colors duration-300 relative group text-base py-2"
                style={{animationDelay: `${0.7 + index * 0.1}s`}}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#C6A477] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${link.name === 'Beranda' ? 'scale-x-100' : ''}`}></span>
                {link.name === 'Beranda' && <MustacheIcon className="w-6 h-auto text-[#C6A477] absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-100 group-hover:opacity-100 transition-opacity"/>}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block animate-fadeInRight" style={{animationDelay: '0.8s'}}>
            <Button variant="primary" size="md" className="shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">{BOOK_APPOINTMENT_TEXT}</Button>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"} className="text-white focus:outline-none">
              {isMobileMenuOpen ? <XIcon className="w-7 h-7 transform transition-transform duration-300 rotate-90" /> : <MenuIcon className="w-7 h-7 transform transition-transform duration-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#101929]/95 backdrop-blur-sm absolute w-full shadow-xl rounded-b-lg overflow-hidden">
          <nav className="flex flex-col items-center space-y-1 py-6">
            {NAV_LINKS.map((link: NavItem, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg py-3 px-6 hover:text-[#C6A477] hover:bg-[#0B121F]/50 w-full text-center transition-all duration-300 animate-fadeInUp"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 animate-fadeInUp" style={{animationDelay: `${NAV_LINKS.length * 0.1}s`}}>
              <Button variant="primary" size="md" onClick={() => setIsMobileMenuOpen(false)} className="w-full">{BOOK_APPOINTMENT_TEXT}</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
