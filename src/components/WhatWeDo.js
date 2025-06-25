import React from 'react';
import { useTranslation } from 'react-i18next';

function WhatWeDo() {
  const { t } = useTranslation();
  return (
    <section className="py-12 px-4 text-white">
      <h2 className="text-3xl font-semibold text-center mb-6">{t('what.title')}</h2>
      <p className="max-w-3xl mx-auto text-center text-lg text-gray-300">
        {t('what.description')}
      </p>
    </section>
  );
}

export default WhatWeDo;
