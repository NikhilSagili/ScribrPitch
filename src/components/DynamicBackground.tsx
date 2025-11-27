import { useScrollSpy } from '../hooks/useScrollSpy';
import { contentData } from '../data';

const DynamicBackground = () => {
  const sectionIds = contentData.sections.map(s => s.id);
  const activeId = useScrollSpy(sectionIds, { rootMargin: '-20% 0px -50% 0px' });

  const activeSection = contentData.sections.find(s => s.id === activeId);
  const bgClass = activeSection ? activeSection.bg_style : 'bg-vision';

  return (
    <div className={`fixed top-0 left-0 w-full h-full -z-10 transition-all duration-700 ease-in-out ${bgClass}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(208,32,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(208,32,32,0.03)_1px,transparent_1px)] bg-[size:50px_50px] z-10"></div>
      <div className={`absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(208,32,32,0.08)_0%,rgba(244,241,234,0)_70%)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 transition-all duration-1000 ease-in-out ${activeId === 'vision' ? 'opacity-50' : 'opacity-0'}`}></div>
    </div>
  );
};

export default DynamicBackground;

