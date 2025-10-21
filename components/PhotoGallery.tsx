import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import ImageModal from './ImageModal';

const galleryImages = [
    { src: '/images/IMG_9322.JPG', caption: 'Moment of Proposal' },
    { src: '/images/IMG_9960.JPG', caption: 'Behold Love in the Eyes' },
    { src: '/images/IMG_9818.JPG', caption: 'At the sholder of Trust' },
    { src: '/images/IMG_9913.JPG', caption: 'Perfect Match' },
    { src: '/images/IMG_9943.JPG', caption: 'Joy of the Heart' },
    { src: '/images/IMG_9182.JPG', caption: 'First of all Introduction' },
    { src: '/images/IMG_9233.JPG', caption: 'Will you marry me' },
    { src: '/images/IMG_9322.JPG', caption: 'I Love You my Dear' },
    { src: '/images/IMG_9240.JPG', caption: 'She said Yes' },
];

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
                        <div key={index} className="masonry-item" onClick={() => openModal(index)}>
                            <img src={image.src} alt={`Gallery image ${index + 1}`} loading="lazy" />
                        </div>
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