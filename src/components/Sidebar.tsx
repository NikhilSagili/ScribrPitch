import { useState } from 'react';
import { contentData } from '../data';
import { useScrollSpy } from '../hooks/useScrollSpy';

const Sidebar = () => {
  // Track what the scroll spy sees as active (sections + sub-sections)
  const sectionIds = contentData.sections.flatMap((s) =>
    s.sub_sections ? s.sub_sections.map((sub) => `#${sub.id}`) : [`#${s.id}`]
  );
  const activeId = useScrollSpy(sectionIds, {
    rootMargin: '-40% 0px -40% 0px',
  });

  // Track manually clicked section so it STAYS highlighted
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <nav className="w-72 h-screen bg-sidebar border-r border-border-color sticky top-0 p-12 flex flex-col justify-center z-20">
      <div className="absolute top-12 left-8 flex items-center gap-2.5 font-space-grotesk text-2xl font-bold text-text-main">
        <span className="text-accent-red">S</span> SCRIBR
      </div>

      <ul className="list-none">
        {contentData.sections.map((section) => {
          const hasDropdown = !!section.sub_sections && section.sub_sections.length > 0;
          const isDropdownOpen = openDropdown === section.id;

          // Active if:
          // - scroll spy says some id starting with this section is active
          // OR
          // - user clicked this section
          const isSectionActive =
            (activeId && activeId.startsWith(`#${section.id}`)) ||
            selectedSectionId === section.id;

          return (
            <li
              key={section.id}
              className={`${hasDropdown ? 'has-dropdown' : ''} ${
                isDropdownOpen ? 'open' : ''
              }`}
            >
              <a
                href={`#${section.id}`}
                onClick={(e) => {
                  // Always mark this as selected when clicked
                  setSelectedSectionId(section.id);

                  if (hasDropdown) {
                    // For sections with dropdown, just open/close the submenu
                    e.preventDefault();
                    toggleDropdown(section.id);
                  } else {
                    // For simple sections, scroll to their id
                    handleLinkClick(e, `#${section.id}`);
                  }
                }}
                className={`flex justify-between items-center text-text-gray text-base py-2.5 transition-all border-l-2
                  hover:text-accent-red hover:border-accent-red hover:pl-4 hover:bg-gradient-to-r from-accent-red/5 to-transparent
                  ${
                    isSectionActive
                      ? 'text-accent-red border-accent-red pl-4 bg-gradient-to-r from-accent-red/5 to-transparent'
                      : 'border-transparent'
                  }`}
              >
                <span>{section.left_label}</span>

                {hasDropdown && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`dropdown-icon transition-transform duration-300 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </a>

              {hasDropdown && (
                <ul
                  className={`
                    sub-menu list-none pl-4 overflow-hidden 
                    transition-all duration-500 ease-in-out
                    ${isDropdownOpen ? 'max-h-96' : 'max-h-0'}
                  `}
                >
                  {section.sub_sections!.map((sub) => {
                    const subId = `#${sub.id}`;
                    const isSubActive = activeId === subId;

                    return (
                      <li key={sub.id}>
                        <a
                          href={subId}
                          onClick={(e) => {
                            // Scroll to sub-section
                            handleLinkClick(e, subId);
                            // Also keep parent section highlighted
                            setSelectedSectionId(section.id);
                          }}
                          className={`block text-text-gray text-sm py-1.5 pl-2 border-l-2
                            hover:text-accent-red hover:border-accent-red
                            ${
                              isSubActive
                                ? 'text-accent-red border-accent-red'
                                : 'border-transparent'
                            }`}
                        >
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
        <p>
          Confidential
          <br />
          Pre-Seed 2025
        </p>
      </div>
    </nav>
  );
};

export default Sidebar;
