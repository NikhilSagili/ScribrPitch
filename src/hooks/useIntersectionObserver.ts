import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options: IntersectionObserverInit
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    const node = elementRef?.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => setEntry(entry), options);
    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, options]);

  return entry;
}

