import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import WhatWeDo from './components/WhatWeDo';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Location from './components/Location';
import Footer from './components/Footer';
import './i18n';  // Initialize i18n

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <Gallery />
        <ContactForm />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
