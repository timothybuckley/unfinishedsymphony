import CloudinaryImage from './CloudinaryImage';

export default function Gallery({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image) => (
        <CloudinaryImage key={image.public_id} image={image} />
      ))}
    </div>
  );
}