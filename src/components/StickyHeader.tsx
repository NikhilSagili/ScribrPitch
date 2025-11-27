import { useScrollSpy } from '../hooks/useScrollSpy';
import { contentData } from '../data';

const StickyHeader = () => {
  const sectionIds = contentData.sections.map(s => `#${s.id}`);
  const activeId = useScrollSpy(sectionIds, { rootMargin: '-20% 0px -50% 0px' });

  const activeSection = contentData.sections.find(s => `#${s.id}` === activeId);
  const heading = activeSection ? activeSection.heading : '';

  return (
    <div className="sticky top-0 bg-paper/95 backdrop-blur-lg px-24 py-8 z-20 border-b border-border-color h-32 flex flex-col justify-center">
      <h2 className="font-space-grotesk text-4xl font-bold bg-gradient-to-r from-text-main to-text-gray bg-clip-text text-transparent">
        {heading}
      </h2>
      <div className="w-16 h-1 bg-accent-red mt-2.5"></div>
    </div>
  );
};

export default StickyHeader;
