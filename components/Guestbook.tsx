import React from 'react';
import SectionWrapper from './SectionWrapper';

const Guestbook: React.FC = () => {
  /* 
    INSTRUCTIONS TO GET YOUR AIRTABLE EMBED LINKS:
    1. Go to Airtable.com and create a free account.
    2. Create a new "Base" from scratch. Name it "Wedding Guestbook".
    3. In the base, rename the default columns to: "Name" (Single line text), "Message" (Long text), and "SubmittedAt" (Created time).
    4. Create a "Form" view:
        - Click the "+" next to "Grid" in the bottom left, and select "Form".
        - Give it a name like "Guestbook Form". You can drag and drop fields to reorder them.
        - Click the "Share form" button at the top to get the public link.
        - Click the "<> Embed this form on your site" button and copy the `src` from the iframe code.
        - PASTE THE SRC LINK into the `formEmbedSrc` variable below.
    5. Create a "Gallery" view for public wishes:
        - Go back to your main grid view.
        - Click the "+" again and select "Gallery".
        - Name it "Public Wishes". You can customize the cards to show the Name and Message.
        - Click the "Share view" button (the paper airplane icon) at the top.
        - Create a shareable gallery view link.
        - Click "<> Embed this view on your site".
        - Make sure "Show view controls" is toggled OFF for a cleaner look.
        - Copy the `src` from the iframe code.
        - PASTE THE SRC LINK into the `galleryEmbedSrc` variable below.
  */

  // PASTE YOUR AIRTABLE FORM EMBED SRC HERE
  const formEmbedSrc = "https://airtable.com/embed/shrxxxxxxxxxxxxxx"; 
  
  // PASTE YOUR AIRTABLE GALLERY EMBED SRC HERE
  const galleryEmbedSrc = "https://airtable.com/embed/shrxxxxxxxxxxxxxx";

  return (
    <SectionWrapper id="guestbook" className="bg-cream text-chocolate">
      <div className="container mx-auto text-center">
        <h2 
          className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gold-text title-fade-in"
        >
          Virtual Guestbook
        </h2>
        <p className="font-montserrat text-base md:text-lg max-w-3xl mx-auto mb-10">
          Leave us a message, a prayer, or a word of advice as we start our new journey together. We'd love to hear from you!
        </p>

        <div className="guestbook-embed-container">
          <iframe
            className="guestbook-form-embed"
            src={formEmbedSrc}
            title="Guestbook Form"
          ></iframe>
        </div>
        
        <div className="mt-20">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold gold-text">
                A Wall of Wishes
            </h3>
            <p className="font-montserrat text-base md:text-lg max-w-2xl mx-auto mt-2 mb-10">
                Thank you for all the love and support from our amazing family and friends.
            </p>
            <div className="guestbook-embed-container">
                 <iframe
                    className="guestbook-gallery-embed"
                    src={galleryEmbedSrc}
                    title="Guestbook Wishes"
                ></iframe>
            </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Guestbook;