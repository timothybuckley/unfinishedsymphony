"use client";

import { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';
import './ImageViewer.css';

export default function ImageViewer({ isOpen, onClose, image }) {
  const [isVisible, setIsVisible] = useState(false);

  // Handle escape key press to close the modal
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      setIsVisible(true);
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Add a small delay to allow for fade-out animation
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscapeKey);
      return () => clearTimeout(timer);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Close modal when clicking the backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`modal-backdrop ${isOpen ? 'open' : 'closed'}`}
      onClick={handleBackdropClick}
    >
      <div className="modal-content">
        {/* Close button */}
        <button
          className="modal-close-button"
          onClick={onClose}
          aria-label="Close image viewer"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Image container */}
        <div className="modal-image-container">
          {image && (
            <CldImage
              width="1200"
              height="900"
              src={image.public_id}
              alt={image.public_id}
              sizes="100vw"
              className="w-full h-auto object-contain max-h-[80vh]"
            />
          )}
        </div>

        {/* Image title/caption */}
        {image && (
          <div className="modal-image-title">
            {image.public_id.split('/').pop().replace(/_/g, ' ')}
          </div>
        )}
      </div>
    </div>
  );
}