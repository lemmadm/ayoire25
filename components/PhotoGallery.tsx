import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import ImageModal from './ImageModal';

const galleryImages = [
    { src: 'https://drive.google.com/file/d/1maqwtKOa0s0Em2o15xGnji0P056VQyX1/view?usp=drive_link', caption: 'Moment of Proposal' },
    { src: 'https://drive.google.com/file/d/1XqKrOxfWj6ofwChsheXzPo5tY2XMNPDL/view?usp=drive_link', caption: 'Behold Love in the Eyes' },
    { src: 'https://drive.google.com/file/d/19Kh4wje71_oHUWZO5Ax6Z8tlYKmAaOSA/view?usp=drive_link', caption: 'At the sholder of Trust' },
    { src: 'https://drive.google.com/file/d/1Jq-kP6yuF7GAGRtH7xi_9r7mDd6oK1e1/view?usp=drive_link', caption: 'Perfect Match' },
    { src: 'https://drive.google.com/file/d/1GjvfcLjh9W2n8teDgAi1tOGut6ekKs7v/view?usp=drive_link', caption: 'Joy of the Heart' },
    { src: 'https://drive.google.com/file/d/1J1lKwMklPcm4Y2444eLiOi1T3f33_exI/view?usp=drive_link', caption: 'First of all Introduction' },
    { src: 'https://drive.google.com/file/d/1PoeLO84-CKgEkYyEjeOuGbUSAgkkHhyV/view?usp=drive_link', caption: 'Will you marry me' },
    { src: 'https://drive.google.com/file/d/1oO3v8iwZ1nltJQgJshY8qNweN0NMl-IU/view?usp=drive_link', caption: 'I Love You my Dear' },
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