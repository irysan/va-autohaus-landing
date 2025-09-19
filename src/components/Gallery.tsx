import React from 'react';
import { useTranslation } from 'react-i18next';

// Using placeholder images from Unsplash for luxury cars
const carImages: string[] = [
  '/assets/auris-back.jpeg',
  '/assets/x5-front.jpeg',
  '/assets/range-front.jpeg',
  '/assets/s5-front.jpeg',
  '/assets/range-front2.jpeg',
  '/assets/glc-back.jpeg',
];

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='py-12 px-4 bg-gray-800 text-white'>
      <h2 className='text-3xl font-semibold text-center mb-6'>
        {t('gallery.title')}
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto'>
        {carImages.map((src: string, idx: number) => (
          <div key={idx} className='rounded-lg overflow-hidden shadow-lg'>
            <img
              src={src}
              alt={`Luxury Car ${idx + 1}`}
              className='w-full h-64 object-cover'
              loading='lazy'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
