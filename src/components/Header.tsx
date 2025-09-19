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

          {/* Right side: Instagram, Language toggle + Hamburger menu */}
          <div className='flex items-center space-x-4'>
            {/* Instagram Button - Desktop */}
            <a
              href='https://www.instagram.com/vyaautohaus?igsh=YWJsMWNqd29wa2Vp&utm_source=qr'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden lg:flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105'
              aria-label='Follow us on Instagram'
            >
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
              </svg>
            </a>

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

              {/* Instagram Button - Mobile */}
              <a
                href='https://www.instagram.com/vyaautohaus?igsh=YWJsMWNqd29wa2Vp&utm_source=qr'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center space-x-3 text-left hover:text-yellow-400 transition-colors py-3 px-4 rounded hover:bg-gray-800 w-full'
              >
                <div className='flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-full'>
                  <svg
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                  </svg>
                </div>
                <span>Instagram</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
