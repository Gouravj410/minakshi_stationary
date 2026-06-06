import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CollectionsGallery from './components/CollectionsGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-text">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CollectionsGallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
