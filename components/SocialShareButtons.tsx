import React, { useState } from 'react';

interface SocialShareButtonsProps {
  url: string;
  title: string;
  hashtags: string;
}

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.799-1.56 2.46-2.548l-.047-.02z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.38 1.25 4.81L2 22l5.42-1.4c1.38.74 2.96 1.18 4.62 1.18h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm4.23 12.03c-.22.42-.82.78-1.13.83-.31.05-.64.05-.98-.03-.34-.08-2.06-1-3.3-2.23-1.24-1.23-2.09-2.75-2.23-3.3-.14-.55.23-1.09.65-1.51.42-.42.82-.55 1.13-.55.31 0 .54.08.78.23.24.15.39.55.39.55s.15.39.08.64c-.07.25-.23.42-.39.55s-.31.23-.46.39c-.15.16-.31.34-.15.64.15.3.73 1.29 1.64 2.2 1.08 1.08 1.93 1.48 2.23 1.64.3.15.46.15.64-.08s.55-.64.55-.64.15-.23.39-.08c.24.15.64.39.78.46.14.08.23.16.23.31.01.16-.07.42-.22.84z" />
    </svg>
);

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ url, title, hashtags }) => {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${hashtags}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const socialButtons = [
    { name: 'Facebook', href: shareLinks.facebook, icon: <FacebookIcon /> },
    { name: 'Twitter', href: shareLinks.twitter, icon: <TwitterIcon /> },
    { name: 'WhatsApp', href: shareLinks.whatsapp, icon: <WhatsAppIcon /> },
  ];

  return (
    <div className="flex justify-center items-center gap-4">
      {socialButtons.map((button) => (
        <a
          key={button.name}
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${button.name}`}
          className="bg-cream/20 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-cream/40 transition-colors duration-300 transform hover:scale-110"
        >
          {button.icon}
        </a>
      ))}
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="bg-cream/20 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-cream/40 transition-colors duration-300 transform hover:scale-110"
      >
        {copied ? <CheckIcon /> : <LinkIcon />}
      </button>
    </div>
  );
};

export default SocialShareButtons;
