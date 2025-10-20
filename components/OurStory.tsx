import React from 'react';
import type { StoryEntry } from '../types';
import SectionWrapper from './SectionWrapper';

const OurStory: React.FC = () => {
    const storyData: StoryEntry[] = [
        { title: "The First Time I Saw Her", author: "Damilare", content: "We met through a friend Teniola Taiwo, my secondary school friend who posted her on WhatsApp Status, and eventually I set my eyes on her on Ori Oke Idahun si Adura in Abeokuta in December 2019. After my first conversation with her, i know within me by the knowing of the spirit that there is something special about her and how she so much carry herself and the words that proceeds from her mouth are clearly that she is a seed of the wise. she shares my value and belief of life, she is really my best friend that i have not been able to find in anyone." },
        { title: "When We Actually Met", author: "Funmi", content: "When we met in December 2019, in 2020 February he requested for a relationship between us and outrightly say NO, due to some reason, in my word to him \"I Don't want to marry Pastor\" but open a window of friendship which i still thank God that happen as he is my best buddy. We never enter into a formal relationship until late 2023. Damilare is an amazing friend, He LISTENS ALWAYS not just with ears but with Heart and always ready to learn. I admire his personality a lot even in his imperfection." },
        { title: "Getting to Know Her Was Effortless", author: "Damilare", content: "Getting close to Funmi was effortless. Conversations come very easy as i am a gentle person that rarely speak but i believe she will say otherwise 😁 — it’s not every day you find someone worth opening up to, if you are in my shoe where you are been taught growing up that as a Pastor, you have to keep a lot to yourself. But with her, there was something different. Little by little, every interaction is meaningful." },
        { title: "Our First Real Conversation", author: "Funmilayo", content: "Our Conversation start on a note of friendship and during that phase, we spoke a lot but as best buddy we spoke more at that level, and in that i can see his thought line, his ideas, and so many things i was able to deduce from that position as a friend. But in late 2023, when the relationship started, we spoke our heart and all our conversations felt intentional. We spoke about everything — our similarities, differences, purpose, and future dreams. It was not forced. It was like two hearts slowly aligning. Every word drew us closer." },
        { title: "She is Home", author: "Damilare", content: "As we started talking more, it became clear that we shared the same spiritual and life goals. Her depth, her passion for God, and her intentionality made me feel something I hadn’t felt in a long time — I see my home in her." },
        { title: "I Knew She was the One", author: "Damilare", content: "This is kind of dicey but that a story for another day. I didn’t want a future without her. I knew she was the one I had been praying for." },
    ];

    return (
        <SectionWrapper id="our-story" className="bg-cream text-chocolate">
            <div className="container mx-auto text-center">
                <h2 
                  className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gold-text title-fade-in"
                >
                  Our Love Story
                </h2>
                <p className="font-montserrat text-base md:text-lg max-w-3xl mx-auto mb-16">A journey of friendship, faith, and finding forever.</p>
                <div className="relative max-w-4xl mx-auto">
                    {/* Desktop Timeline Bar */}
                    <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gold-text/30 transform -translate-x-1/2"></div>
                    {/* Mobile Timeline Bar */}
                    <div className="md:hidden absolute left-4 top-2 h-full w-0.5 bg-gold-text/30"></div>

                    {storyData.map((entry, index) => (
                        <div key={index} className={`mb-8 md:flex items-center w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                            <div className="md:w-1/2 w-full">
                                <div className={`relative md:static ml-12 md:ml-0 p-6 rounded-lg shadow-lg bg-white text-left ${index % 2 === 0 ? 'md:mr-4 md:text-right' : 'md:ml-4'}`}>
                                    {/* Mobile Dot */}
                                    <div className="md:hidden absolute -left-10 top-6 w-4 h-4 bg-chocolate rounded-full border-4 border-cream"></div>
                                    <h3 className="font-playfair text-xl md:text-2xl font-bold gold-text">{entry.title}</h3>
                                    <p className="font-montserrat italic text-sm mb-2">- By {entry.author}</p>
                                    <p className="font-montserrat text-gray-600 text-sm md:text-base leading-relaxed">{entry.content}</p>
                                </div>
                            </div>
                             {/* Desktop Dot */}
                            <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-chocolate rounded-full transform -translate-x-1/2 border-4 border-cream"></div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default OurStory;