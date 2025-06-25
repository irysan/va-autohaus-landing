import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhoWeAre from './components/WhoWeAre';
import WhatWeDo from './components/WhatWeDo';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Location from './components/Location';
import Footer from './components/Footer';
import './i18n'; // Initialize i18n

const App: React.FC = () => {
  return (
    <div className='font-sans bg-gray-900 text-white'>
      <Header />
      <main className='pt-20'>
        {' '}
        {/* Add padding-top to account for fixed header */}
        <div id='hero'>
          <Hero />
        </div>
        <div id='services'>
          <Services />
        </div>
        <div id='who-we-are'>
          <WhoWeAre />
        </div>
        <WhatWeDo />
        <div id='gallery'>
          <Gallery />
        </div>
        <div id='contact'>
          <ContactForm />
        </div>
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default App;
