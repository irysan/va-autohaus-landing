import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  const toggleLanguage = (): void => {
    const isEnglish = i18n.language.startsWith('en');
    const newLanguage = isEnglish ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm text-white shadow-lg'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <svg
              width='40'
              height='40'
              viewBox='0 0 120 120'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='120' height='120' fill='#111827' />
              <text
                x='60'
                y='65'
                fontSize='36'
                fill='#FBBF24'
                fontFamily='Arial'
                fontWeight='bold'
                textAnchor='middle'
              >
                V&amp;A
              </text>
              <text
                x='60'
                y='90'
                fontSize='16'
                fill='#FBBF24'
                fontFamily='Arial'
                textAnchor='middle'
              >
                Autohaus
              </text>
            </svg>
            <span className='text-xl md:text-2xl font-bold'>
              V&amp;A Autohaus
            </span>
          </div>

          {/* Desktop Navigation Menu (hidden on mobile/tablet) */}
          <nav className='hidden lg:flex space-x-8'>
            <button
              onClick={() => scrollToSection('hero')}
              className='hover:text-yellow-400 transition-colors'
              type='button'
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className='hover:text-yellow-400 transition-colors'
              type='button'
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('garage')}
              className='hover:text-yellow-400 transition-colors'
              type='button'
            >
              {t('nav.garage')}
            </button>
            <button
              onClick={() => scrollToSection('who-we-are')}
              className='hover:text-yellow-400 transition-colors'
              type='button'
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className='hover:text-yellow-400 transition-colors'
              type='button'
            >
              {t('nav.gallery')}
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className='hover:text-yellow-400 transition-colors'
              type='button'
            >
              {t('location.contact')}
            </button>
          </nav>

          {/* Right side: Language toggle + Hamburger menu */}
          <div className='flex items-center space-x-4'>
            {/* Language toggle button */}
            <button
              className='px-3 py-1 text-sm rounded bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-colors font-medium'
              onClick={toggleLanguage}
              type='button'
              title={`Switch to ${
                i18n.language.startsWith('en') ? 'Spanish' : 'English'
              }`}
            >
              {i18n.language.startsWith('en')
                ? 'EN'
                : i18n.language.toUpperCase()}
            </button>

            {/* Hamburger menu button (visible on mobile/tablet) */}
            <button
              onClick={toggleMenu}
              className='lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1'
              type='button'
              aria-label='Toggle menu'
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation Menu (dropdown) - Scrollable */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <nav className='py-4 border-t border-gray-700 max-h-80 overflow-y-auto'>
            <div className='flex flex-col space-y-2'>
              <button
                onClick={() => scrollToSection('hero')}
                className='text-left hover:text-yellow-400 transition-colors py-3 px-4 rounded hover:bg-gray-800 w-full'
                type='button'
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className='text-left hover:text-yellow-400 transition-colors py-3 px-4 rounded hover:bg-gray-800 w-full'
                type='button'
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('garage')}
                className='text-left hover:text-yellow-400 transition-colors py-3 px-4 rounded hover:bg-gray-800 w-full'
                type='button'
              >
                {t('nav.garage')}
              </button>
              <button
                onClick={() => scrollToSection('who-we-are')}
                className='text-left hover:text-yellow-400 transition-colors py-3 px-4 rounded hover:bg-gray-800 w-full'
                type='button'
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className='text-left hover:text-yellow-400 transition-colors py-3 px-4 rounded hover:bg-gray-800 w-full'
                type='button'
              >
                {t('nav.gallery')}
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className='text-left hover:text-yellow-400 transition-colors py-3 px-4 rounded hover:bg-gray-800 w-full'
                type='button'
              >
                {t('location.contact')}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
