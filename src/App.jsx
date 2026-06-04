import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import StorySection from './components/StorySection';
import GallerySection from './components/GallerySection';
import FeaturesSection from './components/FeaturesSection';
import VisitUsSection from './components/VisitUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-text">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CategorySection />
        <StorySection />
        <GallerySection />
        <FeaturesSection />
        <VisitUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
