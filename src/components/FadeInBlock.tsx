import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FadeInBlockProps {
  children: React.ReactNode;
}

const FadeInBlock: React.FC<FadeInBlockProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
      {children}
    </div>
  );
};

export default FadeInBlock;


