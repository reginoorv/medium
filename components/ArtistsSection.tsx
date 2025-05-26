
import React, { useState } from 'react';
import { 
    ARTISTS_DATA, FacebookIcon, TwitterIcon, InstagramIcon, TiktokIcon, 
    ChevronLeftIcon, ChevronRightIcon, ARTISTS_TITLE_PART1, ARTISTS_TITLE_HIGHLIGHT,
    ARTISTS_SUBTITLE, PREVIOUS_TEXT, NEXT_TEXT, ALT_TEXT_ARTIST_PROFILE_BASE
} from '../constants';
import { Artist } from '../types';

const ArtistCard: React.FC<{ artist: Artist, animationDelay: string }> = ({ artist, animationDelay }) => {
  return (
    <div className="bg-[#0B121F] border border-[#1f2937] rounded-lg overflow-hidden shadow-lg text-center group min-w-[280px] md:min-w-[300px] flex-shrink-0 animate-fadeInUp" style={{animationDelay}}>
      <div className="relative h-80 overflow-hidden">
        <img src={artist.image} alt={`${ALT_TEXT_ARTIST_PROFILE_BASE}${artist.name}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="flex space-x-3">
            {artist.socials.facebook && <a href={artist.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label={`Facebook ${artist.name}`} className="text-white hover:text-[#C6A477] p-2 bg-black/50 rounded-full"><FacebookIcon className="w-5 h-5" /></a>}
            {artist.socials.twitter && <a href={artist.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label={`Twitter ${artist.name}`} className="text-white hover:text-[#C6A477] p-2 bg-black/50 rounded-full"><TwitterIcon className="w-5 h-5" /></a>}
            {artist.socials.instagram && <a href={artist.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${artist.name}`} className="text-white hover:text-[#C6A477] p-2 bg-black/50 rounded-full"><InstagramIcon className="w-5 h-5" /></a>}
            {artist.socials.tiktok && <a href={artist.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label={`TikTok ${artist.name}`} className="text-white hover:text-[#C6A477] p-2 bg-black/50 rounded-full"><TiktokIcon className="w-5 h-5" /></a>}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-playfair font-semibold text-white mb-1">{artist.name}</h3>
        <p className="text-[#C6A477] text-sm">{artist.role}</p>
      </div>
    </div>
  );
};

export const ArtistsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const itemsPerPage = useItemsPerPage();

  function useItemsPerPage() {
    const [items, setItems] = useState(3); 
    React.useEffect(() => {
      const updateItems = () => {
        if (window.innerWidth < 768) setItems(1); 
        else if (window.innerWidth < 1024) setItems(2); 
        else setItems(3); 
      };
      updateItems();
      window.addEventListener('resize', updateItems);
      return () => window.removeEventListener('resize', updateItems);
    }, []);
    return items;
  }

  const totalItems = ARTISTS_DATA.length;
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < totalItems - itemsPerPage;

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    } else { 
        setCurrentIndex(totalItems > itemsPerPage ? totalItems - itemsPerPage : 0);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else { 
        setCurrentIndex(0);
    }
  };

  const visibleArtists = ARTISTS_DATA.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-16 md:py-24 bg-[#0B121F]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0 animate-fadeInLeft" style={{animationDelay: '0.2s'}}>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold">{ARTISTS_TITLE_PART1} <span className="text-[#C6A477]">{ARTISTS_TITLE_HIGHLIGHT}</span></h2>
            <p className="text-gray-400 mt-2">{ARTISTS_SUBTITLE}</p>
          </div>
          {totalItems > itemsPerPage && (
            <div className="flex space-x-3 animate-fadeInRight" style={{animationDelay: '0.2s'}}>
              <button 
                onClick={handlePrev} 
                className="p-3 bg-[#101929] rounded-full text-[#C6A477] hover:bg-[#C6A477] hover:text-[#0B121F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={`${PREVIOUS_TEXT} artis`}
                disabled={!canGoPrev && !(totalItems > itemsPerPage)} 
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button 
                onClick={handleNext} 
                className="p-3 bg-[#101929] rounded-full text-[#C6A477] hover:bg-[#C6A477] hover:text-[#0B121F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={`${NEXT_TEXT} artis`}
                disabled={!canGoNext && !(totalItems > itemsPerPage)}
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
        
        <div className="relative">
          <div className="flex overflow-x-auto md:overflow-x-hidden pb-4 -mx-4 px-4 md:mx-0 md:px-0"> {/* Added overflow-x-auto for touch scroll on mobile */}
            <div 
                className="flex gap-6 transition-transform duration-500 ease-in-out md:transform-none" 
                style={ window.innerWidth >=768 ? { transform: `translateX(-${(100 / itemsPerPage) * (currentIndex % itemsPerPage)}%)` } : {} }
            >
               {ARTISTS_DATA.map((artist, index) => (
                <ArtistCard 
                    artist={artist} 
                    key={artist.id}
                    animationDelay={`${0.4 + index * 0.1}s`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
