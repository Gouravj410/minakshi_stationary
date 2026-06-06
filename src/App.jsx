import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-text">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <GallerySection />
        <CategorySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
