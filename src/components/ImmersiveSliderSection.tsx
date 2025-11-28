import { useState } from 'react';
import type { Section } from '../types';

interface ImmersiveSliderSectionProps {
  section: Section;
}

const ImmersiveSliderSection: React.FC<ImmersiveSliderSectionProps> = ({ section }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const blocks = (section.blocks || []).filter((b): b is import('../types').TextBlockData => b.type === 'text');

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? blocks.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === blocks.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id={section.id} className="relative h-screen overflow-hidden">
      <div className="sticky top-0 bg-paper px-8 md:px-16 lg:px-24 py-8 z-10 border-b border-border-color h-32 flex flex-col justify-center">
        <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-text-main">
          {section.heading}
        </h2>
      </div>
      <div className="relative w-full h-[calc(100vh-128px)]">
        {blocks.map((block, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 hidden'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/95 via-60% to-transparent z-10" />
            <div className="absolute inset-0 flex flex-col justify-end items-start p-8 md:p-16 lg:p-24 z-20 pb-48 md:pb-64 lg:pb-80">
              <div className="max-w-2xl">
                <h1 className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-accent-red leading-tight mb-4">{block.title}</h1>
                {block.subtitle && <h3 className="font-space-grotesk text-xl md:text-2xl lg:text-3xl font-semibold text-text-main mb-4 uppercase tracking-wider">{block.subtitle}</h3>}
                <p className="text-base md:text-lg lg:text-xl text-text-gray font-medium">{block.body}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-16 lg:bottom-16 lg:left-24 z-20 flex items-center gap-3">
          {blocks.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-accent-red scale-125' : 'bg-gray-400'}`}
            />
          ))}
        </div>

        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 lg:bottom-16 lg:right-24 z-20 flex items-center gap-4">
          <button onClick={goToPrev} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-accent-red bg-white text-accent-red flex items-center justify-center hover:bg-accent-red hover:text-white transition-all transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={goToNext} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-accent-red bg-white text-accent-red flex items-center justify-center hover:bg-accent-red hover:text-white transition-all transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveSliderSection;
