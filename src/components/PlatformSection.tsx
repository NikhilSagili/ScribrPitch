import { useState } from 'react';
import type { Section } from '../types';

interface PlatformSectionProps {
  section: Section;
}

const PlatformSection: React.FC<PlatformSectionProps> = ({ section }) => {
  const capabilities = section.capabilities || [];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id={section.id} className="relative min-h-screen lg:h-screen lg:overflow-hidden">
      <div className="sticky top-0 bg-paper px-8 md:px-16 lg:px-24 py-8 z-10 border-b border-border-color h-32 flex flex-col justify-center">
        <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-text-main">
          {section.heading}
        </h2>
      </div>
      <div className="relative w-full h-auto lg:h-[calc(100vh-128px)] flex flex-col">
        {capabilities.map((cap, index) => (
          <div key={index} className={`${index === activeTab ? '' : 'hidden'}`}>
            <div className="h-auto lg:h-full flex flex-col justify-center items-start p-6 md:p-12 lg:p-24 z-10 py-10">
              <div className="max-w-5xl w-full">
                  <div className="mb-8">
                    <h3 className="font-space-grotesk text-2xl md:text-4xl lg:text-5xl font-bold text-text-main mb-2">{cap.title}</h3>
                    <p className="text-sm md:text-lg lg:text-xl text-accent-red font-semibold uppercase tracking-wider">{cap.subtitle}</p>
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6">
                  {cap.features.map((feature) => (
                    <div key={feature.head} className="bg-card border border-border-color p-6 rounded-lg shadow-sm">
                      <h4 className="font-space-grotesk text-lg font-bold text-text-main mb-3">{feature.head}</h4>
                      <p className="text-sm text-text-gray">{feature.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-sidebar border-l-4 border-accent-red p-6 rounded-r-lg mt-4">
                  <p className="text-sm font-bold text-accent-red uppercase mb-2">Why it matters</p>
                  <p className="text-base font-medium text-text-main italic">{cap.why_matters}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="relative lg:absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-4 py-8 lg:py-0">
          <button onClick={() => setActiveTab(prev => (prev - 1 + capabilities.length) % capabilities.length)} className="w-10 h-10 rounded-full border-2 border-accent-red bg-white text-accent-red flex items-center justify-center hover:bg-accent-red hover:text-white transition-all transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div className="flex items-center gap-3">
            {capabilities.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === activeTab ? 'bg-accent-red scale-125' : 'bg-gray-400'}`}
            />
            ))}
          </div>
          <button onClick={() => setActiveTab(prev => (prev + 1) % capabilities.length)} className="w-10 h-10 rounded-full border-2 border-accent-red bg-white text-accent-red flex items-center justify-center hover:bg-accent-red hover:text-white transition-all transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
