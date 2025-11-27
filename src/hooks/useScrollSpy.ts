import { useState, useEffect } from 'react';

export function useScrollSpy(selectors: string[], options?: IntersectionObserverInit): string | undefined {
  const [activeId, setActiveId] = useState<string>();

  useEffect(() => {
    const elements = selectors.map(selector => document.querySelector(selector)).filter(Boolean) as Element[];
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    elements.forEach(element => observer.observe(element));

    return () => elements.forEach(element => observer.unobserve(element));
  }, [selectors, options]);

  return activeId;
};
