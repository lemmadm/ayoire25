
import React, { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  onPrev: () => void;
  onNext: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl, onPrev, onNext, hasNext, hasPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Enlarged gallery view" />
        <button className="modal-close" onClick={onClose} aria-label="Close image viewer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {hasPrev && (
          <button className="modal-nav prev" onClick={onPrev} aria-label="Previous image">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
        )}
        {hasNext && (
          <button className="modal-nav next" onClick={onNext} aria-label="Next image">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageModal;