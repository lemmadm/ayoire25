import React from 'react';
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

const App: React.FC = () => {
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
    </div>
  );
};

export default App;