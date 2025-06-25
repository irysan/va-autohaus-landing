import React from 'react';
import { useTranslation } from 'react-i18next';

function WhoWeAre() {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-800 text-white py-12 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">{t('who.title')}</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Alfonso */}
        <div className="bg-gray-900 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-2">{t('who.alfonsoName')}</h3>
          <p className="text-gray-300">{t('who.alfonsoBio')}</p>
        </div>
        {/* Victor */}
        <div className="bg-gray-900 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-2">{t('who.victorName')}</h3>
          <p className="text-gray-300">{t('who.victorBio')}</p>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
