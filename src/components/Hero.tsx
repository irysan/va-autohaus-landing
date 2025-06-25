import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  // Array of 5 different luxury car images for desktop stripes
  const carImages: string[] = [
    'https://images.unsplash.com/photo-1712755557911-b3e2acd2f5b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // White BMW X5M
    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Black BMW M3
    'https://images.unsplash.com/photo-1673087378997-594f6d15de39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Green GT3 RS
    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Red sports car
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Blue luxury car
  ];

  // Featured image for mobile (Green GT3 RS)
  const mobileImage =
    'https://images.unsplash.com/photo-1673087378997-594f6d15de39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';

  return (
    <section className='relative flex flex-col items-center justify-center h-screen overflow-hidden'>
      {/* Desktop/Tablet: Vertical stripe images (hidden on mobile) */}
      <div className='absolute inset-0 hidden md:flex'>
        {carImages.map((image: string, index: number) => (
          <div
            key={index}
            className='flex-1 bg-cover bg-center bg-no-repeat'
            style={{
              backgroundImage: `url('${image}')`,
              width: '20%', // Each stripe takes 20% of the width (100% / 5 = 20%)
            }}
          />
        ))}
      </div>

      {/* Mobile: Single featured image (hidden on desktop/tablet) */}
      <div
        className='absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('${mobileImage}')`,
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className='absolute inset-0 bg-black bg-opacity-30'></div>

      {/* Content */}
      <div className='relative z-10 text-center text-white px-4'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl'>
          {t('hero.title')}
        </h1>
        <p className='text-xl md:text-2xl mb-8 drop-shadow-xl'>
          {t('hero.tagline')}
        </p>
      </div>
    </section>
  );
};

export default Hero;
