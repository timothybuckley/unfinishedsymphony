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
    .sort_by('public_id', 'asc')  // Changed from 'created_at', 'desc'
    .max_results(100)
    .execute();
      
    // Sort the resources alphabetically by public_id
    const sortedResources = [...result.resources].sort((a, b) => {
      // Extract the filename part from the public_id (after the last slash)
      const filenameA = a.public_id.split('/').pop().toLowerCase();
      const filenameB = b.public_id.split('/').pop().toLowerCase();
      
      return filenameA.localeCompare(filenameB);
    });
      
    return sortedResources;
  }

export default cloudinary;