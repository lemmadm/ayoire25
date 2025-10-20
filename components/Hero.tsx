import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';

const backgroundImages = [
  '/images/HERO-IMG_9822.JPG',
  '/images/HERO-IMG_9885.JPG',
  '/images/HERO-IMG_9928.JPG',
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="h-screen w-full flex items-center justify-center relative text-center text-white px-4">
      <div className="hero-bg-slider">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`hero-bg ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      <div className="relative z-20 flex flex-col items-center">
        <p className="font-montserrat text-base sm:text-lg md:text-xl tracking-widest uppercase mb-4 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>We are getting married</p>
        <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold animate-fade-in leading-tight sm:leading-none" style={{ animationDelay: '0.7s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-x-4">
            <span>Funmilayo</span>
            <span className="text-4xl md:text-6xl gold-text my-1 sm:my-0">&</span>
            <span>Damilare</span>
          </div>
        </h1>
        <div className="mt-8 border-t-2 border-b-2 border-gold-400 py-4 px-8 inline-block animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <p className="font-montserrat text-lg sm:text-xl md:text-2xl tracking-wider">
            13 December 2025
          </p>
        </div>
        <div className="mt-12 w-full animate-fade-in-up" style={{ animationDelay: '1.7s' }}>
          <Countdown targetDate="2025-12-13T10:00:00" />
        </div>
      </div>
    </section>
  );
};

export default Hero;