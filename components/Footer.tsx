import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream text-chocolate py-12 text-center">
      <div className="container mx-auto">
        <p className="font-playfair text-2xl sm:text-3xl mb-2 gold-text">Thank You!</p>
        <p className="font-montserrat mb-4">We can't wait to celebrate with you.</p>
        <p className="font-playfair text-xl sm:text-2xl font-bold">Funmilayo & Damilare</p>
        <p className="text-sm mt-4 text-gray-500">#AYOIRE25</p>
      </div>
    </footer>
  );
};

export default Footer;