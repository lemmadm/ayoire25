import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import EventDetails from './components/EventDetails';
import PhotoGallery from './components/PhotoGallery';
import ProposalVideo from './components/ProposalVideo';
import MoreAboutUs from './components/MoreAboutUs';
import GiftRegistry from './components/GiftRegistry';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

const App: React.FC = () => {

  useEffect(() => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      // Hide preloader after a delay to show the animation
      const timer = setTimeout(() => {
        preloader.classList.add('hidden');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="bg-chocolate min-h-screen">
      <Header />
      <main>
        <Hero />
        <OurStory />
        <EventDetails />
        <PhotoGallery />
        <ProposalVideo />
        <MoreAboutUs />
        <GiftRegistry />
        <Guestbook />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default App;