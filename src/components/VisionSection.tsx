import type { Section, VisionHeroBlockData } from '../types';

interface VisionSectionProps {
  section: Section;
}

const VisionSection: React.FC<VisionSectionProps> = ({ section }) => {
  const block = section.blocks?.[0] as VisionHeroBlockData | undefined;

  if (!block || block.type !== 'vision_hero') {
    return null;
  }

  return (
    <section id={section.id} className="h-screen relative overflow-hidden bg-vision">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern z-0"></div>
      <div className="absolute top-0 left-0 w-full h-32 px-8 md:px-16 lg:px-24 py-8 z-10 flex flex-col justify-center bg-paper border-b border-border-color">
        <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-text-main">
          {section.heading}
        </h2>
      </div>
      <div className="h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-8 md:px-16 lg:px-24 pt-32 lg:pt-0">
        <div className="w-full lg:w-[45%] z-10 text-center lg:text-left">
          <h1 className="font-space-grotesk text-4xl md:text-6xl lg:text-7xl font-bold text-accent-red leading-tight mt-4 mb-4 lg:mb-6 uppercase">{block.title}</h1>
          <p className="text-lg md:text-xl text-text-main font-medium max-w-lg mx-auto lg:mx-0">{block.body}</p>
        </div>
        <div className="relative flex-1 flex justify-center items-center mt-8 lg:mt-0">
          <div className="relative w-fit h-fit">
            <img src={block.image_url} alt="Scribr App Interface" className="w-[520px] max-w-full drop-shadow-2xl animate-float" />
            <div className="absolute bottom-8 left-12 bg-white/90 backdrop-blur-lg px-4 py-2 rounded-full shadow-lg text-sm font-semibold animate-float-pill">☰ Unified Subscriptions</div>
            <div className="absolute top-12 right-8 bg-white/90 backdrop-blur-lg px-4 py-2 rounded-full shadow-lg text-sm font-semibold animate-float-pill-delay">● Complete Control</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
