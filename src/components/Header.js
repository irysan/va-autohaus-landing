import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <svg width="40" height="40" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="120" fill="#111827" />
              <text x="60" y="65" fontSize="36" fill="#FBBF24" fontFamily="Arial" fontWeight="bold" textAnchor="middle">V&amp;A</text>
              <text x="60" y="90" fontSize="16" fill="#FBBF24" fontFamily="Arial" textAnchor="middle">Autohaus</text>
            </svg>
            <span className="text-2xl font-bold">V&amp;A Autohaus</span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="hover:text-yellow-400 transition-colors"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-yellow-400 transition-colors"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('who-we-are')}
              className="hover:text-yellow-400 transition-colors"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="hover:text-yellow-400 transition-colors"
            >
              {t('nav.gallery')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-yellow-400 transition-colors"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Language toggle buttons */}
          <div className="flex items-center space-x-2">
            <button
              className={`px-3 py-1 rounded transition-colors ${i18n.language === 'en' ? 'bg-yellow-400 text-gray-900' : 'hover:bg-yellow-400 hover:text-gray-900'}`}
              onClick={() => i18n.changeLanguage('en')}
            >
              EN
            </button>
            <button
              className={`px-3 py-1 rounded transition-colors ${i18n.language === 'es' ? 'bg-yellow-400 text-gray-900' : 'hover:bg-yellow-400 hover:text-gray-900'}`}
              onClick={() => i18n.changeLanguage('es')}
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
