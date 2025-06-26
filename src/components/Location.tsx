import React from 'react';
import { useTranslation } from 'react-i18next';

const Location: React.FC = () => {
  const { t } = useTranslation();

  const iframeStyle: React.CSSProperties = { border: 0 };

  return (
    <section id='location' className='py-12 px-4 bg-gray-800 text-white'>
      <h2 className='text-3xl font-semibold text-center mb-6'>
        {t('location.title')}
      </h2>
      <div className='max-w-4xl mx-auto'>
        {/* Google Maps embed for Calle Cobre 7, Torrejón de Ardoz */}
        <iframe
          title='V&A Autohaus Location - Calle Cobre 7, Torrejón de Ardoz'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8!2d-3.4754967!3d40.4567552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI3JzI0LjMiTiAzwrAyOCczMS44Ilc!5e0!3m2!1sen!2ses!4v1640000000000!5m2!1sen!2ses&q=Calle+Cobre+7,+28850+Torrejón+de+Ardoz,+Madrid,+Spain'
          width='100%'
          height='450'
          style={iframeStyle}
          allowFullScreen={true}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>

        {/* Contact Information */}
        <div className='mt-8 text-center'>
          <p className='text-gray-300 text-lg font-semibold mb-6'>
            {t('location.address')}
          </p>

          {/* Contact Cards */}
          <div className='grid md:grid-cols-3 gap-6 text-gray-300'>
            {/* Business Hours */}
            <div className='bg-gray-900 p-6 rounded-lg'>
              <h3 className='font-semibold text-yellow-400 mb-4 text-lg'>
                {t('location.hours')}
              </h3>
              <div className='space-y-2'>
                <p>Lunes - Viernes: 9:00 - 19:00</p>
                <p>Sábados: 10:00 - 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className='bg-gray-900 p-6 rounded-lg'>
              <h3 className='font-semibold text-yellow-400 mb-4 text-lg'>
                {t('location.contact')}
              </h3>
              <div className='space-y-3'>
                <div>
                  <p className='font-medium'>Alfonso Sánchez</p>
                  <a
                    href='tel:+34600000000'
                    className='text-yellow-400 hover:text-yellow-300 transition-colors'
                  >
                    +34 600 000 000
                  </a>
                </div>
                <div>
                  <p className='font-medium'>Víctor López</p>
                  <a
                    href='tel:+34600000001'
                    className='text-yellow-400 hover:text-yellow-300 transition-colors'
                  >
                    +34 600 000 001
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className='bg-gray-900 p-6 rounded-lg'>
              <h3 className='font-semibold text-yellow-400 mb-4 text-lg'>
                {t('location.info')}
              </h3>
              <div className='space-y-2'>
                <p>Email: info@va-autohaus.es</p>
                <p className='text-sm text-gray-400'>
                  {t('location.appointment')}
                </p>
                <p className='text-sm text-gray-400'>
                  {t('location.whatsapp')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
