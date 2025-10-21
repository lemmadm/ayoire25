import React from 'react';
import type { QnA } from '../types';
import SectionWrapper from './SectionWrapper';

const MoreAboutUs: React.FC = () => {
    const qnaData: QnA[] = [
        { question: "A life goal of ours", answer: "To have a godly home that is founded on Christ the solid Rock." },
        { question: "We take pride in", answer: "Serving God and making lives better through service and giving, while living our best lives." },
        { question: "We’re on the same page about", answer: "What's important to us. Living a life of purpose, impacting our communities and sharing ourselves as a blessing to all around us. We also enjoy spending time with our loved ones. Letting Christ be seen and revealed is our watchword." },
        { question: "What's your favorite activity together?", answer: "Our favorite activity together was talking and going to the mountain together." },
    ];

    return (
        <SectionWrapper id="more-about-us" className="bg-cream text-chocolate">
            <div className="container mx-auto text-center">
                <h2 
                  className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gold-text"
                >
                  More About Us
                </h2>
                <p className="font-montserrat text-base md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">A little glimpse into our hearts and what we cherish.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {qnaData.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-left">
                            <h3 className="font-playfair text-xl font-bold gold-text mb-2">{item.question}</h3>
                            <p className="font-montserrat text-gray-700 text-sm md:text-base leading-relaxed">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default MoreAboutUs;