import React from 'react';
import SectionWrapper from './SectionWrapper';

const Guestbook: React.FC = () => {
  const commonNinjaEmbedSrc = "https://widgets.commoninja.com/iframe/9de61f32-6596-450e-9299-ba3b15cd655c";

  return (
    <SectionWrapper id="guestbook" className="bg-cream text-chocolate">
      <div className="container mx-auto text-center">
        <h2 
          className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gold-text"
        >
          Virtual Guestbook
        </h2>
        <p className="font-montserrat text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          Leave us a message, a prayer, or a word of advice as we start our new journey together. Your well wishes mean the world to us!
        </p>

        <div className="guestbook-embed-container">
          <iframe
            src={commonNinjaEmbedSrc}
            title="Virtual Guestbook"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Guestbook;
