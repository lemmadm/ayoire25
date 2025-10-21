import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';

const GiftRegistry: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const accountNumber = "3026648930";

    const handleCopy = () => {
        navigator.clipboard.writeText(accountNumber).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <SectionWrapper id="gift-registry">
            <div className="container mx-auto text-center max-w-3xl">
                <h2 
                  className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gold-text"
                >
                  Gift Registry
                </h2>
                <p className="font-montserrat text-base md:text-lg mb-8 leading-relaxed">
                    Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, please see below details. God bless you.
                </p>
                
                <div className="bg-cream text-chocolate p-8 rounded-lg shadow-xl inline-block">
                    <h3 className="font-playfair text-2xl font-bold mb-2">Our Account Details</h3>
                    <p className="font-montserrat text-base sm:text-lg"><span className="font-bold">Account Name:</span> Gbolasere Funmilayo Omowumi</p>
                    <p className="font-montserrat text-base sm:text-lg"><span className="font-bold">Bank:</span> Polaris Bank</p>
                    <div className="mt-4 flex items-center justify-center space-x-4">
                        <p className="font-montserrat text-lg sm:text-xl font-bold tracking-widest">{accountNumber}</p>
                        <button 
                            onClick={handleCopy} 
                            className="bg-chocolate text-cream px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors text-sm"
                        >
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default GiftRegistry;