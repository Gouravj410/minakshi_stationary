import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
  { src: '/Images/store-front.jpeg', alt: 'Store Front View' },
  { src: '/Images/gallery-1.jpeg', alt: 'Gallery Image 1' },
  { src: '/Images/gallery-2.jpeg', alt: 'Gallery Image 2' },
  { src: '/Images/gallery-3.jpeg', alt: 'Gallery Image 3' },
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
    <section id="gallery" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 flex flex-col items-center">
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4 block">Store Tour</span>
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-6">A Glimpse Inside</h2>
          <div className="w-16 h-[2px] bg-primary/20 rounded-full"></div>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 1, ease: easeCurve }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer break-inside-avoid bg-gray-100 shadow-sm"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transform transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImages[index % fallbackImages.length];
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#431407]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-serif italic text-lg tracking-wide transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  View Image
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#431407]/95 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors focus:outline-none"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" strokeWidth={1} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, ease: easeCurve }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.target.onerror = null;
                const index = galleryImages.findIndex(i => i.src === selectedImage.src);
                e.target.src = fallbackImages[index % fallbackImages.length];
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
