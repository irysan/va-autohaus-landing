import React from 'react';
import { useTranslation } from 'react-i18next';

const Garage: React.FC = () => {
  const { t } = useTranslation();

  const specialServices = [
    {
      icon: '🏎️',
      title: t('garage.services.supercars.title', 'Supercars'),
      description: t(
        'garage.services.supercars.description',
        'High-performance supercars and exotic vehicles'
      ),
    },
    {
      icon: '✨',
      title: t('garage.services.detailing.title', 'Detailing'),
      description: t(
        'garage.services.detailing.description',
        'Professional vehicle detailing and care services'
      ),
    },
    {
      icon: '🔧',
      title: t('garage.services.aftermarket.title', 'Aftermarket'),
      description: t(
        'garage.services.aftermarket.description',
        'Custom modifications and performance upgrades'
      ),
    },
    {
      icon: '🌍',
      title: t('garage.services.customImports.title', 'Custom Imports'),
      description: t(
        'garage.services.customImports.description',
        'Bespoke vehicle imports tailored to your specifications'
      ),
    },
  ];

  return (
    <section id='garage' className='py-16 px-4 bg-black text-white'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-4 text-yellow-400'>
          {t('garage.title')}
        </h2>
        <p className='text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto'>
          {t('garage.subtitle')}
        </p>

        <div className='bg-gray-900 p-8 rounded-lg mb-12'>
          <p className='text-lg text-gray-300 leading-relaxed text-center'>
            {t('garage.description')}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {specialServices.map((service, index) => (
            <div
              key={index}
              className='bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-800 border border-yellow-400/20 hover:border-yellow-400/40'
            >
              <div className='text-4xl mb-4 text-center'>{service.icon}</div>
              <h3 className='text-lg font-bold mb-3 text-yellow-400 text-center'>
                {service.title}
              </h3>
              <p className='text-gray-300 text-center text-sm'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Garage;
