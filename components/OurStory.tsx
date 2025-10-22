import React, { useState } from 'react';
import type { StoryEntry } from '../types';
import SectionWrapper from './SectionWrapper';

const OurStory: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'his' | 'her'>('his');

    const storyData: StoryEntry[] = [
        {
            title: "The First Time I Saw Her",
            author: "Damilare",
            content: "We met through a friend ,Teniola Taiwo, my secondary school friend who posted her on WhatsApp Status, and eventually I set my eyes on her physically in Ori Oke Idahun si Adura in Abeokuta in December 2019. After my first conversation with her, I know within me by the knowing of the spirit that there is something special about her and how she carries herself; the words that proceed from her mouth clearly show that she is a seed of the wise. She shares my value and belief of life; she is the best friend that I have not been able to find in anyone.  In February 2020, prior to Covid-19, I shot my shot; you will hear the rest from her."
        },
        {
            title: "Getting to Know Her Was Effortless",
            author: "Damilare",
            content: "Getting close to Funmi was effortless. Conversations come very easily.  I am a gentle person that rarely speaks, but I believe she will say otherwise. It’s not every day you find someone worth opening up to.  If you are in my shoes, you grow up in an environment where, as a pastor, you have to keep a lot to yourself, and that includes your emotions. But with her, there was something different. Little by little, every interaction is meaningful."
        },
        {
            title: "She is Home",
            author: "Damilare",
            content: "As we started talking more, it became clear that we shared the same spiritual and life goals. Her large heart for the kingdom, her passion for God, her character, and the depth of wisdom at work in her. I used to think— I  was wise until I saw the flow of wisdom at work in her life; she says the truth always, no matter what it is. She is everything that means home to me, and her intentionality about life made me feel something I hadn’t felt in a long time — I see my home in her."
        },
        {
            title: "I Knew She was the One",
            author: "Damilare",
            content: "I didn’t want a future without her. I knew she was the one I had been praying for."
        },
        {
            title: "When We Actually Met",
            author: "Funmi",
            content: "When we met in December 2019 for a mountain program that my friend Teniola invited me for but i had no idea that they had spoken before then which necessitate my friend to actually invite me, eventually my friend could not meet up, but i went since it a gathering of youth where we pray, anything prayer, am all in. He reached out after the retreat to greet me and message couple of time after that until February 2020 before Covid-19,  he requested for a relationship between us and  I outrightly say NO to him, due to some reason, in my word to him \"I Don't want to marry a Pastor\" but i told him, we can still be friends,  which i still thank God for, we became best buddy.  I friendzone him from 2020 to 2023, We did not enter into courtship until August,2023. Damilare is an amazing friend, He LISTENS ALWAYS not just with ears but with Heart and always ready to learn. I admire his personality a lot even in his imperfection."
        },
        {
            title: "Getting to Know Him Was Effortless",
            author: "Funmilayo",
            content: "Damilare is such a sweet soul, very kind hearted. I study him as a friend,  he goes all out for everyone, i know anyone reading this can testify to it. He really cares for others and one thing you can't take away from him that made closer to him is his ability to keep calm in the face of storm. i have seen him go through things and yet as calm as dove. He rarely share stuff with anyone but with me, but very free to discuss with me which is rare with any other person, my personal Gee. Getting to know the kind of person he is was very easy, he doesn't know how to pretend, but he can observe you for years and never say anything."
        },
        {
            title: "Our First Real Conversation",
            author: "Funmilayo",
            content: "Our Conversation started on a note of friendship and during that phase, we spoke a lot . I  can see the way he thinks, his ideas, Damilare is very Matured, the way he handles things unconventionally and quite many other things . But in  2023, when the relationship started, we spoke our heart and all our conversations felt intentional. We spoke about everything — our similarities, differences, purpose, and future dreams. It was not forced. It was like two hearts slowly aligning. Every word drew us closer."
        },
        {
            title: "He is Peace",
            author: "Funmilayo",
            content: "If i am to give an award for a man that loves Peace, that will be Damilare. He is a man of Peace and i daily see how Christ in him has furnish his peace in his heart and i enjoy that daily in our relationship."
        },
        {
            title: "I Knew he was the One",
            author: "Funmilayo",
            content: "I know he is the one by the peace furnish in my heart with my decision to marry him, his character, his nature, personality, his KIND heart, always LISTEN. Above all, He LOVES God genuinely, tune to the holy spirit and Love me. He tick the box of my desired man. I love how God brought an imperfect man my way, it is so perfect."
        }
    ];

    const damilareStories = storyData.filter(story => story.author === 'Damilare');
    const funmiStories = storyData.filter(story => story.author === 'Funmi' || story.author === 'Funmilayo');
    
    const storiesToDisplay = activeTab === 'his' ? damilareStories : funmiStories;
    const authorName = activeTab === 'his' ? 'Damilare' : 'Funmilayo';

    return (
        <SectionWrapper id="our-story" className="bg-cream text-chocolate">
            <div className="container mx-auto text-center">
                <h2 
                  className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gold-text"
                >
                  Our Love Story
                </h2>
                <p className="font-montserrat text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed">A journey of friendship, faith, and finding forever, told from both our hearts.</p>
                
                <div className="max-w-4xl mx-auto">
                    {/* Tab Navigation */}
                    <div className="flex justify-center border-b-2 border-gray-200 mb-8">
                        <button 
                            onClick={() => setActiveTab('his')} 
                            className={`font-montserrat text-lg font-bold py-3 px-6 transition-colors duration-300 ${activeTab === 'his' ? 'gold-text border-b-2 border-[#D4AF37]' : 'text-gray-500'}`}
                        >
                           His Story
                        </button>
                        <button 
                            onClick={() => setActiveTab('her')} 
                            className={`font-montserrat text-lg font-bold py-3 px-6 transition-colors duration-300 ${activeTab === 'her' ? 'gold-text border-b-2 border-[#D4AF37]' : 'text-gray-500'}`}
                        >
                           Her Story
                        </button>
                    </div>

                    {/* Content Panel */}
                    <div key={activeTab} className="bg-white p-6 md:p-8 rounded-lg shadow-xl text-left animate-content-fade-in">
                        <h3 className="font-playfair text-3xl font-bold gold-text mb-2">{activeTab === 'his' ? 'His Story' : 'Her Story'}</h3>
                        <p className="font-montserrat italic text-md mb-6 text-gray-500">- By {authorName}</p>
                        <div className="space-y-8">
                            {storiesToDisplay.map((story, index) => (
                                <div key={`${activeTab}-${index}`}>
                                    <h4 className="font-playfair text-xl font-bold text-chocolate">{story.title}</h4>
                                    <p className="font-montserrat text-gray-600 text-sm md:text-base leading-relaxed mt-2">{story.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default OurStory;