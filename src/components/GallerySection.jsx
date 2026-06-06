import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';

// Precisely mapped spans for perfect dense packing (Area sum = 12)
// Tiles perfectly in 2 columns (6 rows), 3 columns (4 rows), and 4 columns (3 rows).
const galleryImages = [
  { src: 'Images/store-front.jpeg', alt: 'Store Front View', className: 'col-span-2 row-span-2' }, // 2x2 Large
  { src: 'Images/media__1780686817182.jpg', alt: 'Premium Earrings Collection', className: 'col-span-1 row-span-1' }, // 1x1 Square
  { src: 'Images/media__1780689717306.jpg', alt: 'Divine Frames & Portraits', className: 'col-span-1 row-span-2' }, // 1x2 Portrait
  { src: 'Images/media__1780689717318.jpg', alt: 'Stationery & Writing Essentials', className: 'col-span-1 row-span-1' }, // 1x1 Square
  { src: 'Images/media__1780686817279.jpg', alt: 'Cosmetics Collection', className: 'col-span-2 row-span-1' }, // 2x1 Landscape
  { src: 'Images/media__1780689717349.jpg', alt: 'Toys Collection', className: 'col-span-1 row-span-1' }, // 1x1 Square
  { src: 'Images/media__1780686817248.jpg', alt: 'Gifting and Idols', className: 'col-span-1 row-span-1' }, // 1x1 Square
];

const fallbackImages = [
  'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?auto=format&fit=crop&w=600&q=80',
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const easeCurve = [0.22, 1, 0.36, 1];

  return (
    <section id="gallery" className="py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4 block">Store Tour</span>
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-6">A Glimpse Inside</h2>
          <div className="w-16 h-[2px] bg-primary/20 rounded-full"></div>
        </div>

        {/* Perfect Dense Collage Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[150px] md:auto-rows-[220px] lg:auto-rows-[280px] gap-4 md:gap-6 grid-flow-row-dense">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: easeCurve }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer bg-surface shadow-soft hover:shadow-soft-hover border border-gray-100 transition-all duration-500 ${img.className}`}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={`${import.meta.env.BASE_URL}${img.src}`}
                alt={img.alt}
                className="w-full h-full object-cover filter grayscale-[40%] group-hover:grayscale-0 transform transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImages[index % fallbackImages.length];
                }}
              />
              
              {/* Soft Light Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8 backdrop-blur-[1px]">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                >
                  <span className="text-white font-serif italic text-lg tracking-wide drop-shadow-md">
                    View Image
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-sm">
                    <Search className="w-4 h-4" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white/70 hover:text-white hover:rotate-90 transition-all duration-300 focus:outline-none z-10 bg-white/10 backdrop-blur-md rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: easeCurve }}
              className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`${import.meta.env.BASE_URL}${selectedImage.src}`}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain bg-surface"
                onError={(e) => {
                  e.target.onerror = null;
                  const index = galleryImages.findIndex(i => i.src === selectedImage.src);
                  e.target.src = fallbackImages[index % fallbackImages.length];
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
