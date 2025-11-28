import { useState, useMemo } from 'react';
import type { Section, MarketFunnelBlockData } from '../types';

interface MarketSectionProps {
  section: Section;
}

const MarketSection: React.FC<MarketSectionProps> = ({ section }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredRingId, setHoveredRingId] = useState<string | null>(null);

  const slides = (section.blocks?.[0] as MarketFunnelBlockData)?.slides || [];

  const goToPrev = () => setActiveIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  const goToNext = () => setActiveIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));

  const activeSlide = slides[activeIndex];

  const ringConfig = {
    tam: { size: 390, order: 1, baseBg: 'bg-accent-red/5', border: 'border border-accent-red/10' },
    sam: { size: 270, order: 2, baseBg: 'bg-accent-red/15', border: 'border border-accent-red/20' },
    som: { size: 150, order: 3, baseBg: 'bg-accent-red', border: '' },
  };

  const displayedRingData = useMemo(() => {
    const ringId = hoveredRingId || 'som';
    return activeSlide?.rings.find(r => r.id === ringId) || activeSlide?.rings.find(r => r.id === 'som');
  }, [hoveredRingId, activeSlide]);

  return (
    <section id={section.id} className="relative min-h-screen lg:h-screen bg-paper lg:overflow-hidden">
      <div className="sticky top-0 bg-paper px-8 md:px-16 lg:px-24 py-8 z-10 border-b border-border-color h-32 flex flex-col justify-center">
        <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-text-main">{section.heading}</h2>
      </div>
      
      <div className="relative w-full h-auto lg:h-[calc(100vh-128px)] flex flex-col">
        {slides.map((slide, index) => (
          <div key={index} className={`${index === activeIndex ? '' : 'hidden'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-[400px,1fr] gap-8 lg:gap-14 items-center">
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-space-grotesk text-2xl lg:text-[2.2rem] font-bold uppercase text-accent-red text-center mt-4 mb-8 lg:mb-10">{slide.title}</h3>
              <div 
                className="relative w-[280px] h-[280px] sm:w-[390px] sm:h-[390px] flex items-center justify-center bg-grid-pattern mx-auto scale-75 sm:scale-100"
                onMouseLeave={() => setHoveredRingId(null)}
              >
                {Object.entries(ringConfig).map(([id, config]) => {
                  const ringData = slide.rings.find(r => r.id === id);
                  const isHovered = hoveredRingId === id;
                  return (
                    <div
                      key={id}
                      className={`absolute rounded-full transition-all duration-300 cursor-pointer flex justify-center ${isHovered ? 'bg-accent-red' : `${config.baseBg} ${config.border}`}`}
                      style={{ width: config.size, height: config.size, zIndex: config.order }}
                      onMouseEnter={() => setHoveredRingId(id)}
                    >
                      {id === 'som' ? (
                        <div className="absolute w-full h-full flex flex-col items-center justify-center text-white text-center pointer-events-none">
                          <div className="font-bold text-xs sm:text-sm uppercase">{displayedRingData?.label}</div>
                          <div className="font-space-grotesk text-3xl sm:text-4xl font-bold my-1">{displayedRingData?.value}</div>
                          <div className="text-[10px] sm:text-xs uppercase font-medium w-3/4 leading-tight opacity-90">{displayedRingData?.full_form}</div>
                        </div>
                      ) : (
                        <div className="pt-3 text-center text-[10px] sm:text-xs font-bold text-text-main/60">
                          {ringData?.label}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6 px-4 sm:px-0 lg:pr-16 mt-12 lg:mt-0 mb-8">
              {slide.quotes.map((quote, index) => (
                <div key={index} className="bg-white border border-border-color p-4 sm:p-6 rounded-lg shadow-md">
                   <p className="text-base sm:text-lg text-text-gray italic mb-3 sm:mb-4">"{quote.text}"</p>
                   <p className="font-bold text-sm text-accent-red/80 text-right">— {quote.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        ))}

        <div className="relative lg:absolute bottom-8 lg:bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-4 py-8 lg:py-0">
          <button onClick={goToPrev} className="w-10 h-10 rounded-full border-2 border-accent-red bg-white text-accent-red flex items-center justify-center hover:bg-accent-red hover:text-white transition-all transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-accent-red scale-125' : 'bg-gray-400'}`}
            />
            ))}
          </div>
          <button onClick={goToNext} className="w-10 h-10 rounded-full border-2 border-accent-red bg-white text-accent-red flex items-center justify-center hover:bg-accent-red hover:text-white transition-all transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>

                          </div>
      </div>
    </section>
  );
};

export default MarketSection;
