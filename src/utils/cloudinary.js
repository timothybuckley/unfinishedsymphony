import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function getImages() {
    const result = await cloudinary.search
      .expression('folder:"Unfinished Symphony"')
      .sort_by('public_id', 'asc') // Changed to sort by public_id in ascending order
      .max_results(100)
      .execute();
      
    return result.resources;
  }

export default cloudinary;