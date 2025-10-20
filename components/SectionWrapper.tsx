import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`py-16 sm:py-24 px-6 md:px-12 fade-in-section ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;