import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import ImageModal from './ImageModal';

const galleryImages = [
    '/images/IMG_8517.JPG',
    '/images/IMG_9182.jpg',
    '/images/IMG_9784.JPG',
    '/images/IMG_9791.JPG',
    '/images/IMG_9818.JPG',
    '/images/IMG_9913.JPG',
    '/images/IMG_9943.JPG',
    '/images/IMG_9960.JPG',
    '/images/IMG_9973.JPG',
    '/images/IMG_9827-Edit.JPG',
];

const PhotoGallery: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const openModal = (index: number) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImageIndex(null);
    };

    const showNextModalImage = () => {
        if (selectedImageIndex !== null) {
            const nextIndex = (selectedImageIndex + 1) % galleryImages.length;
            setSelectedImageIndex(nextIndex);
            setCurrentSlide(nextIndex);
        }
    };
    
    const showPrevModalImage = () => {
        if (selectedImageIndex !== null) {
            const prevIndex = (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length;
            setSelectedImageIndex(prevIndex);
            setCurrentSlide(prevIndex);
        }
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <SectionWrapper id="gallery">
            <div className="container mx-auto text-center">
                <h2 
                  className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gold-text title-fade-in"
                >
                  Our Journey in Photos
                </h2>
                <p className="font-montserrat text-base md:text-lg max-w-3xl mx-auto mb-16">A collection of moments that have shaped our story.</p>
                
                <div className="carousel-container">
                    <div 
                        className="carousel-track" 
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {galleryImages.map((src, index) => (
                            <div key={index} className="carousel-slide" onClick={() => openModal(index)}>
                                <img src={src} alt={`Gallery image ${index + 1}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                    <button onClick={handlePrevSlide} className="carousel-arrow prev" aria-label="Previous photo">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={handleNextSlide} className="carousel-arrow next" aria-label="Next photo">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
                
                <div className="carousel-dots">
                    {galleryImages.map((_, index) => (
                        <button 
                            key={index}
                            className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to photo ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            
            <ImageModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                imageUrl={selectedImageIndex !== null ? galleryImages[selectedImageIndex] : ''}
                onPrev={showPrevModalImage}
                onNext={showNextModalImage}
                hasPrev={galleryImages.length > 1}
                hasNext={galleryImages.length > 1}
            />
        </SectionWrapper>
    );
};

export default PhotoGallery;