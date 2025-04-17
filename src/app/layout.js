import './globals.css';

export const metadata = {
  title: 'Cloudinary Gallery',
  description: 'A gallery app built with Next.js and Cloudinary',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow-md py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-600">Cloudinary Gallery</h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}