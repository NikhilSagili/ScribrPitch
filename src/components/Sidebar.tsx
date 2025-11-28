import { useState, type Dispatch, type SetStateAction } from 'react';
import { contentData } from '../data';
import { useScrollSpy } from '../hooks/useScrollSpy';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const sectionIds = contentData.sections.flatMap((s) =>
    s.sub_sections ? s.sub_sections.map((sub) => `#${sub.id}`) : [`#${s.id}`]
  );
  const activeId = useScrollSpy(sectionIds, { rootMargin: '-40% 0px -40% 0px' });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Close sidebar on link click
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/40 z-30 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      <nav className={`w-72 h-screen bg-sidebar border-r border-border-color fixed top-0 left-0 p-12 flex flex-col justify-center z-40 transition-transform duration-300 ease-in-out lg:sticky lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute top-12 left-8 flex items-center gap-2.5 font-space-grotesk text-2xl font-bold text-text-main">
          <img src="/scribr-logo.png" alt="Scribr Logo" className="w-20 h-20 object-contain -mr-7" />
          <span>SCRIBR</span>
        </div>

        {/* Close button for mobile */}
        <button 
          className="lg:hidden absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-text-gray"
          onClick={() => setIsOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <ul className="list-none">
          {contentData.sections.map((section) => {
            const hasDropdown = !!section.sub_sections && section.sub_sections.length > 0;
            const isDropdownOpen = openDropdown === section.id;
            const isSectionActive = activeId && activeId.startsWith(`#${section.id}`);

            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    if (hasDropdown) {
                      e.preventDefault();
                      toggleDropdown(section.id);
                    } else {
                      handleLinkClick(e, `#${section.id}`);
                    }
                  }}
                  className={`flex justify-between items-center text-text-gray text-base py-2.5 transition-all border-l-2 hover:text-accent-red hover:border-accent-red hover:pl-4 hover:bg-gradient-to-r from-accent-red/5 to-transparent ${isSectionActive ? 'text-accent-red border-accent-red pl-4 bg-gradient-to-r from-accent-red/5 to-transparent' : 'border-transparent'}`}>
                  <span>{section.left_label}</span>
                  {hasDropdown && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </a>
                {hasDropdown && (
                  <ul className={`list-none pl-4 overflow-hidden transition-all duration-500 ease-in-out ${isDropdownOpen ? 'max-h-96' : 'max-h-0'}`}>
                    {section.sub_sections!.map((sub) => {
                      const subId = `#${sub.id}`;
                      const isSubActive = activeId === subId;
                      return (
                        <li key={sub.id}>
                          <a
                            href={subId}
                            onClick={(e) => handleLinkClick(e, subId)}
                            className={`block text-text-gray text-sm py-1.5 pl-2 border-l-2 hover:text-accent-red hover:border-accent-red ${isSubActive ? 'text-accent-red border-accent-red' : 'border-transparent'}`}>
                            {sub.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <div className="absolute bottom-8 left-8 text-gray-500 text-xs">
          <p>Confidential<br />Pre-Seed 2025</p>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
