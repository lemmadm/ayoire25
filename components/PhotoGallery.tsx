import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import ImageModal from './ImageModal';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const galleryImages = [
    { src: '/images/IMG_9322.JPG', caption: 'Moment of Proposal' },
    { src: '/images/IMG_9960.JPG', caption: 'Behold Love in the Eyes' },
    { src: '/images/Gallery (3).jpeg', caption: 'When we are at Owanbe' },
    { src: '/images/IMG_9818.JPG', caption: 'At the sholder of Trust' },
    { src: '/images/Gallery (1).jpeg', caption: 'Frendship Outing' },
    { src: '/images/IMG_9913.JPG', caption: 'Perfect Match' },
    { src: '/images/Gallery (2).jpeg', caption: 'It is good to be in love' },
    { src: '/images/IMG_9943.JPG', caption: 'Joy of the Heart' },
    { src: '/images/IMG_9182.JPG', caption: 'First of all Introduction' },
    { src: '/images/Gallery (4).jpeg', caption: 'On the Prayer Montain' },
    { src: '/images/IMG_9233.JPG', caption: 'Will you marry me' },
    { src: '/images/IMG_9322.JPG', caption: 'I Love You my Dear' },
    { src: '/images/IMG_9240.jpg', caption: 'She said Yes' },
];

// New sub-component for individual item animation
const MasonryItem = ({ image, index, onClick }: { image: { src: string; caption: string }, index: number, onClick: () => void }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div 
            ref={ref} 
            className={`masonry-item ${isVisible ? 'is-visible' : ''}`}
            onClick={onClick}
            // Add a staggered delay for a nicer effect
            style={{ transitionDelay: `${(index % 4) * 100}ms` }}
        >
            <img src={image.src} alt={`Gallery image ${index + 1}`} loading="lazy" />
        </div>
    );
};


const PhotoGallery: React.FC = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const isModalOpen = selectedImageIndex !== null;

    const openModal = (index: number) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const showNextModalImage = () => {
        if (selectedImageIndex !== null) {
            const nextIndex = (selectedImageIndex + 1) % galleryImages.length;
            setSelectedImageIndex(nextIndex);
        }
    };
    
    const showPrevModalImage = () => {
        if (selectedImageIndex !== null) {
            const prevIndex = (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length;
            setSelectedImageIndex(prevIndex);
        }
    };

    return (
        <SectionWrapper id="gallery">
            <div className="container mx-auto text-center">
                <h2 
                  className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gold-text"
                >
                  Our Journey in Photos
                </h2>
                <p className="font-montserrat text-base md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">A collection of moments that have shaped our story.</p>
                
                <div className="masonry-grid">
                    {galleryImages.map((image, index) => (
                        <MasonryItem 
                            key={index}
                            image={image}
                            index={index}
                            onClick={() => openModal(index)}
                        />
                    ))}
                </div>
            </div>
            
            <ImageModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                imageUrl={selectedImageIndex !== null ? galleryImages[selectedImageIndex].src : ''}
                caption={selectedImageIndex !== null ? galleryImages[selectedImageIndex].caption : ''}
                onPrev={showPrevModalImage}
                onNext={showNextModalImage}
                hasPrev={galleryImages.length > 1}
                hasNext={galleryImages.length > 1}
            />
        </SectionWrapper>
    );
};

export default PhotoGallery;