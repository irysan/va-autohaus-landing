import React from 'react';
import { useTranslation } from 'react-i18next';

const WhatWeDo: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 px-4 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Quality Policy Section */}
        <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">{t('what.policy.title')}</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('what.policy.description')}
            </p>
          </div>
          
          {/* Quality Features Grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-yellow-400 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold">✓</span>
              </div>
              <h4 className="font-semibold text-yellow-400 mb-2">{t('what.policy.revised')}</h4>
              <p className="text-sm text-gray-400">{t('what.policy.revisedDesc')}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold">🔍</span>
              </div>
              <h4 className="font-semibold text-yellow-400 mb-2">{t('what.policy.certified')}</h4>
              <p className="text-sm text-gray-400">{t('what.policy.certifiedDesc')}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold">🛡️</span>
              </div>
              <h4 className="font-semibold text-yellow-400 mb-2">{t('what.policy.verified')}</h4>
              <p className="text-sm text-gray-400">{t('what.policy.verifiedDesc')}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold">⭐</span>
              </div>
              <h4 className="font-semibold text-yellow-400 mb-2">{t('what.policy.warranty')}</h4>
              <p className="text-sm text-gray-400">{t('what.policy.warrantyDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
