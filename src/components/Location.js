import React from 'react';
import { useTranslation } from 'react-i18next';

function Location() {
  const { t } = useTranslation();
  return (
    <section className="py-12 px-4 bg-gray-800 text-white">
      <h2 className="text-3xl font-semibold text-center mb-6">{t('location.title')}</h2>
      <div className="max-w-4xl mx-auto">
        {/* Placeholder map - replace with actual Google Maps embed */}
        <div className="bg-gray-700 h-96 rounded-lg flex items-center justify-center mb-4">
          <p className="text-gray-300">Google Maps Embed Here</p>
        </div>
        <p className="mt-4 text-center text-gray-300">{t('location.address')}</p>
      </div>
    </section>
  );
}

export default Location;
