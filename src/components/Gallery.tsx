import React from 'react';
import { useTranslation } from 'react-i18next';

// Using placeholder images from Unsplash for luxury cars
const carImages: string[] = [
  'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
