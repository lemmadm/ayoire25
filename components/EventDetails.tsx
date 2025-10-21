import React from 'react';
import SectionWrapper from './SectionWrapper';

const EventDetails: React.FC = () => {
    const venue = "Honey Treat Trade, Academy, Monatan Road, Ibadan";
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue)}`;

    const DetailCard = ({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) => (
        <div className="bg-cream/10 p-8 rounded-lg text-center backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gold-500 rounded-full flex items-center justify-center gold-text">
                {icon}
            </div>
            <h3 className="font-playfair text-2xl font-bold gold-text mb-2">{title}</h3>
            {lines.map((line, i) => (
                <p key={i} className="font-montserrat text-base sm:text-lg">{line}</p>
            ))}
        </div>
    );

    return (
        <SectionWrapper id="event-details" className="relative">
            <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/VEN-IMG_9240.jpg')", filter: 'blur(4px)' }}></div>
            <div className="absolute inset-0 bg-chocolate opacity-70"></div>
            <div className="container mx-auto relative z-10 text-center">
                <h2 
                  className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gold-text"
                >
                  The Wedding
                </h2>
                <p className="font-montserrat text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed">Join us as we celebrate our union and begin our new life together.</p>
                
                <div className="font-playfair text-lg md:text-xl max-w-3xl mx-auto mb-12 italic">
                    <p>The Families of Gbolasere & Afeniforo</p>
                    <p>Request the Honour of your presence at the</p>
                    <p className="font-bold text-xl md:text-2xl gold-text my-2">Traditional Marriage Ceremony</p>
                    <p>of their Children</p>
                    <p className="text-2xl sm:text-3xl md:text-4xl mt-2">Funmilayo and Damilare</p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <DetailCard 
                        icon={<CalendarIcon />}
                        title="Date & Time"
                        lines={["Saturday, 13 Dec 2025", "10:00 AM Sharp"]}
                    />
                    <DetailCard 
                        icon={<LocationIcon />}
                        title="Venue"
                        lines={[venue]}
                    />
                    <DetailCard 
                        icon={<DressIcon />}
                        title="Color Code"
                        lines={["Chocolate & Gold"]}
                    />
                </div>

                <div className="mt-16 max-w-2xl mx-auto">
                    <h3 className="font-playfair text-2xl font-bold gold-text mb-4">RSVP</h3>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-2">
                        <p className="font-montserrat text-base sm:text-lg">Foluke - 09039244218</p>
                        <p className="font-montserrat text-base sm:text-lg">Elijah - 09022606871</p>
                    </div>
                </div>

                <div className="mt-12">
                    <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#D4AF37] text-chocolate font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-[#b89b3f] transition-colors duration-300">
                        Get Directions
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
};

// Icons
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const DressIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.636 5.636a9 9 0 0112.728 0m-12.728 0l12.728 12.728" /></svg>; // Placeholder icon for dress code


export default EventDetails;