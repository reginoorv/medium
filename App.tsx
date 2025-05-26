
import React, { useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { ServicesSection } from './components/ServicesSection';
import { BestBarbershop } from './components/BestBarbershop';
import { SatisfiedYou } from './components/SatisfiedYou';
import { ArtistsSection } from './components/ArtistsSection';
import { Newsletter } from './components/Newsletter';
import { TestimonialsSection } from './components/TestimonialsSection';
// import { BlogSection } from './components/BlogSection'; // Dihapus
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: Unobserve after animation
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const addSectionRef = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="bg-[#0B121F] text-[#F0EBE3] font-inter">
      <Header />
      <main>
        <div ref={addSectionRef} className="section-animate"><Hero /></div>
        <div ref={addSectionRef} className="section-animate"><Experience /></div>
        <div ref={addSectionRef} className="section-animate"><ServicesSection /></div>
        <div ref={addSectionRef} className="section-animate"><BestBarbershop /></div>
        <div ref={addSectionRef} className="section-animate"><SatisfiedYou /></div>
        <div ref={addSectionRef} className="section-animate"><ArtistsSection /></div>
        <div ref={addSectionRef} className="section-animate"><Newsletter /></div>
        <div ref={addSectionRef} className="section-animate"><TestimonialsSection /></div>
        {/* <div ref={addSectionRef} className="section-animate"><BlogSection /></div> // Dihapus */}
      </main>
      <div ref={addSectionRef} className="section-animate"><Footer /></div>
    </div>
  );
};

export default App;