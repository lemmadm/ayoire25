import React, { ReactNode } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  });
  
  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-16 sm:py-24 px-6 md:px-12 fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
