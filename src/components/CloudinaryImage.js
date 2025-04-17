"use client";

import { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import ImageViewer from './ImageViewer';

export default function CloudinaryImage({ image }) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openViewer = () => {
    setIsViewerOpen(true);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <>
      <div 
        className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
        onClick={openViewer}
      >
        <CldImage
          width="400"
          height="300"
          src={image.public_id}
          alt={image.public_id}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Image Viewer Modal */}
      <ImageViewer 
        isOpen={isViewerOpen} 
        onClose={closeViewer} 
        image={image}
      />
    </>
  );
}