import React from 'react';
import { useTranslation } from 'react-i18next';

const Location: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='py-16 px-4 bg-gray-800 text-white'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>
          {t('location.title')}
        </h2>

        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Map Section */}
          <div className='bg-gray-900 p-6 rounded-lg'>
            <h3 className='font-semibold text-yellow-400 mb-4 text-lg'>
              {t('location.address')}
            </h3>
            <p className='text-gray-300 mb-6'>
              Calle Cobre 7, 28850 Torrejón de Ardoz, Madrid, España
            </p>
            <div className='w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8234567890123!2d-3.4567890123456789!3d40.4567890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI3JzI0LjQiTiAzwrAyNycyNC40Ilc!5e0!3m2!1sen!2ses!4v1234567890123'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='rounded-lg'
                title='V&A Autohaus Location'
              ></iframe>
            </div>
          </div>

          {/* Contact Card */}
          <div className='flex justify-center'>
            <div className='bg-gray-900 p-6 rounded-lg max-w-md w-full'>
              <h3 className='font-semibold text-yellow-400 mb-4 text-lg text-center'>
                {t('location.contact')}
              </h3>
              <div className='text-center space-y-3'>
                <div>
                  <p className='font-medium text-gray-300'>Víctor López</p>
                  <a
                    href='tel:+34657558456'
                    className='text-yellow-400 hover:text-yellow-300 transition-colors text-lg'
                  >
                    +34 657 55 84 56
                  </a>
                  <p className='text-sm text-gray-400 mt-2'>
                    WhatsApp disponible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
