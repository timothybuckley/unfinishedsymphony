import { getImages } from '../utils/cloudinary';
import Gallery from '../components/Gallery';

export const revalidate = 3600; // Revalidate at most every hour

export default async function Home() {
  const images = await getImages();
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Unfinished Symphony</h1>
      <Gallery images={images} />
    </main>
  );
}