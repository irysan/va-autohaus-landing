import React from 'react';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      key: 'buySell',
      icon: '🚗',
      title: t('services.buySell.title'),
      description: t('services.buySell.description')
    },
    {
      key: 'salesManagement',
      icon: '📋',
      title: t('services.salesManagement.title'),
      description: t('services.salesManagement.description')
    },
    {
      key: 'importExport',
      icon: '🌍',
      title: t('services.importExport.title'),
      description: t('services.importExport.description')
    },
    {
      key: 'vehicleStorage',
      icon: '🏢',
      title: t('services.vehicleStorage.title'),
      description: t('services.vehicleStorage.description')
    },
    {
      key: 'financing',
      icon: '💳',
      title: t('services.financing.title'),
      description: t('services.financing.description')
    }
  ];

  return (
    <section id="services" className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">{t('services.title')}</h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          {t('services.subtitle')}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.key}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-750"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
