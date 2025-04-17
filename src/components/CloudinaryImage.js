"use client";

import { CldImage } from 'next-cloudinary';

export default function CloudinaryImage({ image }) {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <CldImage
        width="400"
        height="300"
        src={image.public_id}
        alt={image.public_id}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}