import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to handle background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Effect for header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: 'home', text: 'Home' },
    { href: 'our-story', text: 'Our Story' },
    { href: 'event-details', text: 'Event' },
    { href: 'gallery', text: 'Gallery' },
    { href: 'proposal-video', text: 'Proposal' },
    { href: 'more-about-us', text: 'About Us' },
    { href: 'gift-registry', text: 'Gift' },
    { href: 'guestbook', text: 'Guestbook' },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-chocolate shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-playfair text-2xl font-bold gold-text">
            F & D
          </div>
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <button key={link.href} onClick={() => handleScrollTo(link.href)} className="font-montserrat uppercase tracking-wider text-sm hover:gold-text transition-colors">
                {link.text}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-chocolate bg-opacity-95 z-[100] flex flex-col items-center justify-center md:hidden animate-mobile-menu-fade-in" role="dialog" aria-modal="true">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 right-5 p-2" aria-label="Close menu">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <nav className="flex flex-col items-center space-y-8">
                {navLinks.map((link, index) => (
                  <button 
                    key={link.href} 
                    onClick={() => handleScrollTo(link.href)} 
                    className="font-montserrat uppercase tracking-wider text-xl hover:gold-text transition-colors animate-mobile-link-fade-up"
                    style={{ animationDelay: `${index * 100 + 100}ms` }}
                  >
                    {link.text}
                  </button>
                ))}
            </nav>
        </div>
      )}
    </>
  );
};

export default Header;