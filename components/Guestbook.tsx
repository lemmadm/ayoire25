import React from 'react';
import SectionWrapper from './SectionWrapper';

const Guestbook: React.FC = () => {
  // IMPORTANT: The Airtable embed links below are for demonstration purposes only.
  // You MUST replace these with the embed links from your own Airtable base.
  // To get your links:
  // 1. In Airtable, open the view you want to embed (e.g., your form or gallery).
  // 2. Click "Share view" -> "Embed this view on your site".
  // 3. Copy the `src` attribute from the generated iframe code and paste it below.
  const formEmbedSrc = "https://airtable.com/embed/shrDFRj15Hn22aN5I"; 

  return (
    <SectionWrapper id="guestbook" className="bg-cream text-chocolate">
      <div className="container mx-auto text-center">
        <h2 
          className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gold-text"
        >
          Virtual Guestbook
        </h2>
        <p className="font-montserrat text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          Leave us a message, a prayer, or a word of advice as we start our new journey together. We'd love to hear from you!
        </p>

        <div className="guestbook-embed-container">
          <iframe
            className="guestbook-form-embed"
            src={formEmbedSrc}
            title="Guestbook Form"
          ></iframe>
        </div>
        

      </div>
    </SectionWrapper>
  );
};

export default Guestbook;