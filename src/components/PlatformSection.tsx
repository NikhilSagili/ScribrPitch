import { useState } from 'react';
import type { Section } from '../types';

interface PlatformSectionProps {
  section: Section;
}

const PlatformSection: React.FC<PlatformSectionProps> = ({ section }) => {
  const capabilities = section.capabilities || [];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id={section.id} className="relative h-screen overflow-hidden">
      <div className="sticky top-0 bg-paper px-24 py-8 z-30 border-b border-border-color h-32 flex flex-col justify-center">
        <h2 className="font-space-grotesk text-2xl font-bold text-text-main">
          {section.heading}
        </h2>
      </div>
      <div className="relative w-full h-[calc(100vh-128px)]">
        {capabilities.map((cap, index) => (
          <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === activeTab ? 'opacity-100 z-10' : 'opacity-0 hidden'}`}>
            <div className="h-full flex flex-col justify-center items-start p-24 z-20">
              <div className="max-w-5xl w-full">
                  <div className="mb-10">
                    <h3 className="font-space-grotesk text-5xl font-bold text-text-main mb-2">{cap.title}</h3>
                    <p className="text-xl text-accent-red font-semibold uppercase tracking-wider">{cap.subtitle}</p>
                  </div>
                <div className="grid grid-cols-3 gap-8 mb-6">
                  {cap.features.map((feature) => (
                    <div key={feature.head} className="bg-card border border-border-color p-8 rounded-lg shadow-sm">
                      <h4 className="font-space-grotesk text-xl font-bold text-text-main mb-4">{feature.head}</h4>
                      <p className="text-text-gray">{feature.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-sidebar border-l-4 border-accent-red p-8 rounded-r-lg">
                  <p className="text-sm font-bold text-accent-red uppercase mb-2">Why it matters</p>
                  <p className="text-lg font-medium text-text-main italic">{cap.why_matters}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {capabilities.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === activeTab ? 'bg-accent-red scale-125' : 'bg-gray-400'}`}
            />
          ))}
        </div>
        <div className="absolute bottom-1 right-24 z-20 flex items-center gap-4">
          <button onClick={() => setActiveTab(prev => (prev - 1 + capabilities.length) % capabilities.length)} className="w-12 h-12 rounded-full border-2 border-accent-red bg-white text-accent-red flex items-center justify-center hover:bg-accent-red hover:text-white transition-all transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={() => setActiveTab(prev => (prev + 1) % capabilities.length)} className="w-12 h-12 rounded-full border-2 border-accent-red bg-white text-accent-red flex items-center justify-center hover:bg-accent-red hover:text-white transition-all transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
