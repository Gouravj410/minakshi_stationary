import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Images as ImagesIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { 
    name: 'Stationery', 
    desc: 'Premium notebooks, pens & office supplies for school, college, and work.', 
    bgImage: 'Images/media__1780689717318.jpg',
    gallery: [
      { src: 'Images/media__1780689717318.jpg', alt: 'Stationery Item 1' },
      { src: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80', alt: 'Stationery Mock 1' },
      { src: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80', alt: 'Stationery Mock 2' }
    ]
  },
  { 
    name: 'Toys & Games', 
    desc: 'Educational and fun collections for all ages to enjoy.', 
    bgImage: 'Images/media__1780689717349.jpg',
    gallery: [
      { src: 'Images/media__1780689717349.jpg', alt: 'Toy Item 1' },
      { src: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80', alt: 'Toy Mock 1' }
    ]
  },
  { 
    name: 'Gift Articles', 
    desc: 'Thoughtful presents and divine idols for every special occasion.', 
    bgImage: 'Images/media__1780686817248.jpg',
    gallery: [
      { src: 'Images/media__1780686817248.jpg', alt: 'Gift Item 1' },
      { src: 'Images/media__1780689717306.jpg', alt: 'Divine Frames' }
    ]
  },
  { 
    name: 'Cosmetics', 
    desc: 'Curated beauty, jewelry, and personal care essentials.', 
    bgImage: 'Images/media__1780686817279.jpg',
    gallery: [
      { src: 'Images/media__1780686817279.jpg', alt: 'Cosmetics Collection' },
      { src: 'Images/media__1780686817182.jpg', alt: 'Premium Earrings' }
    ]
  },
  { 
    name: 'Bags & Purses', 
    desc: 'Elegant school bags, handbags, wallets & more.', 
    bgImage: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600&q=80', alt: 'Bag Mock' },
      { src: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80', alt: 'Handbag Mock' }
    ]
  },
  { 
    name: 'Festival Items', 
    desc: 'Beautiful decorations, pooja thalis, and items for celebrations.', 
    bgImage: 'https://images.unsplash.com/photo-1605050962255-6b5860361250?auto=format&fit=crop&w=600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1605050962255-6b5860361250?auto=format&fit=crop&w=600&q=80', alt: 'Festival Mock' }
    ]
  }
];

const CollectionsGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const easeCurve = [0.22, 1, 0.36, 1];

  const handleImageClick = (cat, idx) => {
    setSelectedCategory(cat);
    setSelectedImageIndex(idx);
  };

  const closeLightbox = () => {
    setSelectedCategory(null);
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedCategory && selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev + 1) % selectedCategory.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedCategory && selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === 0 ? selectedCategory.gallery.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    let interval;
    if (selectedCategory && selectedImageIndex !== null) {
      interval = setInterval(nextImage, 3500); // 3.5 seconds auto-play
    }
    return () => clearInterval(interval);
  }, [selectedCategory, selectedImageIndex]);

  return (
    <section id="collections" className="py-16 md:py-32 bg-background relative">
      <div className="absolute inset-0 bg-primary/5 pattern-dots pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4 block"
          >
            Our Curated Collections
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-text mb-6"
          >
            Discover The Extraordinary
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: easeCurve }}
              className="group relative h-80 md:h-96 rounded-3xl overflow-hidden cursor-pointer shadow-soft hover:shadow-[0_20px_40px_rgba(194,65,12,0.15)] transition-all duration-500"
              onClick={() => handleImageClick(category, 0)}
            >
              {/* Background Image */}
              <img 
                src={`${category.bgImage.startsWith('http') ? '' : import.meta.env.BASE_URL}${category.bgImage}`}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] group-hover:brightness-[0.3] group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80'; }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A05]/90 via-[#1A0A05]/40 to-transparent transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end border border-white/5 rounded-3xl group-hover:border-primary/30 transition-colors duration-500">
                <h3 className="text-3xl font-serif text-white mb-3 transform group-hover:-translate-y-28 transition-transform duration-500 drop-shadow-md">{category.name}</h3>
                
                {/* Hidden Description & Button that appears on hover */}
                <div className="absolute bottom-6 left-8 right-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <p className="text-white/80 text-sm mb-5 leading-relaxed font-light">{category.desc}</p>
                  <div className="flex items-center gap-3 text-white font-medium text-sm bg-primary hover:bg-primary-hover w-max px-6 py-3 rounded-full shadow-lg transition-colors duration-300">
                    <ImagesIcon className="w-4 h-4" />
                    <span>View Gallery</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCategory && selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex flex-col bg-[#1A0A05]/95 p-4 md:p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6 max-w-7xl mx-auto w-full">
              <div className="flex flex-col">
                <h3 className="text-white text-3xl font-serif mb-1">{selectedCategory.name}</h3>
                <span className="text-primary/80 text-sm uppercase tracking-widest font-semibold">Gallery</span>
              </div>
              <button
                className="text-white/70 hover:text-white hover:rotate-90 transition-all duration-300 focus:outline-none bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full p-3"
                onClick={closeLightbox}
              >
                <X className="w-7 h-7" strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center relative w-full max-w-7xl mx-auto min-h-[50vh] md:min-h-0 my-4 md:my-0">
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-0 md:left-4 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-2 md:p-4 transition-all"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: easeCurve }}
                  className="relative max-w-full flex items-center justify-center px-12 md:px-24"
                >
                  <img
                    src={`${selectedCategory.gallery[selectedImageIndex].src.startsWith('http') ? '' : import.meta.env.BASE_URL}${selectedCategory.gallery[selectedImageIndex].src}`}
                    alt={selectedCategory.gallery[selectedImageIndex].alt}
                    className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-white/10 bg-black/20"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80'; }}
                  />
                </motion.div>
              </AnimatePresence>

              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-0 md:right-4 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-2 md:p-4 transition-all"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-8 flex justify-center gap-4 overflow-x-auto pb-4 max-w-7xl mx-auto w-full px-4 scrollbar-hide">
              {selectedCategory.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${idx === selectedImageIndex ? 'border-primary scale-110 shadow-[0_0_20px_rgba(194,65,12,0.4)]' : 'border-transparent opacity-40 hover:opacity-100 hover:scale-105'}`}
                >
                  <img
                    src={`${img.src.startsWith('http') ? '' : import.meta.env.BASE_URL}${img.src}`}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80'; }}
                  />
                  {idx !== selectedImageIndex && (
                    <div className="absolute inset-0 bg-black/40"></div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CollectionsGallery;
