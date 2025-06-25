import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      {/* Logo (simple SVG placeholder) */}
      <div className="flex items-center space-x-2">
        <svg width="40" height="40" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="120" fill="#111827" />
          <text x="60" y="65" fontSize="36" fill="#FBBF24" fontFamily="Arial" fontWeight="bold" textAnchor="middle">V&amp;A</text>
          <text x="60" y="90" fontSize="16" fill="#FBBF24" fontFamily="Arial" textAnchor="middle">Autohaus</text>
        </svg>
        <span className="text-2xl font-bold">V&amp;A Autohaus</span>
      </div>
      {/* Language toggle buttons */}
      <div>
        <button
          className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-yellow-400 text-gray-900' : 'hover:bg-yellow-400'}`}
          onClick={() => i18n.changeLanguage('en')}
        >
          EN
        </button>
        <button
          className={`px-3 py-1 ml-2 rounded ${i18n.language === 'es' ? 'bg-yellow-400 text-gray-900' : 'hover:bg-yellow-400'}`}
          onClick={() => i18n.changeLanguage('es')}
        >
          ES
        </button>
      </div>
    </header>
  );
}

export default Header;
