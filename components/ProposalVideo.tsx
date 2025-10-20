import React from 'react';
import SectionWrapper from './SectionWrapper';

const ProposalVideo: React.FC = () => {
  // Google Drive embed link for the proposal video
  const videoSrc = "https://drive.google.com/file/d/1xT9oEvVQaDGcxTLey_D6Nn5W-caPya4X/preview"; 

  return (
    <SectionWrapper id="proposal-video" className="bg-cream text-chocolate">
      <div className="container mx-auto text-center">
        <h2 
          className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gold-text title-fade-in"
        >
          The Proposal
        </h2>
        <p className="font-montserrat text-base md:text-lg max-w-3xl mx-auto mb-16">A moment we'll cherish forever, captured on film.</p>
        
        <div className="video-frame-container mx-auto">
          <div className="video-frame">
            <iframe
              src={videoSrc}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Proposal Video"
            ></iframe>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProposalVideo;