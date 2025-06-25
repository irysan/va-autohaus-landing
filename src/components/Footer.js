import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-4">
      <p className="text-sm">{t('footer.legal')}</p>
    </footer>
  );
}

export default Footer;
