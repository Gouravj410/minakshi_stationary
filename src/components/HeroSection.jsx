import React from 'react';
import { motion } from 'framer-motion';
import { Store, PhoneCall } from 'lucide-react';

const HeroSection = () => {
  const easeCurve = [0.22, 1, 0.36, 1];

  return (
    <section className="relative pt-28 pb-36 overflow-hidden flex flex-col items-center text-center">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easeCurve }}
          className="flex flex-col items-center"
        >
          {/* Ganesh Image Container with Spotlight */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: easeCurve }}
            className="relative mb-14 mt-4"
          >
            {/* Animated Spotlight/Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-primary/20 rounded-full blur-[40px] scale-150 z-0"
            ></motion.div>
            
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-white/80 backdrop-blur-xl shadow-glow flex items-center justify-center p-8 border border-white/60 relative z-10">
              <motion.img 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src={`${import.meta.env.BASE_URL}Images/1.png`} 
                alt="Ganesh Logo" 
                className="w-full h-full object-contain drop-shadow-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/400x400/fff/C2410C?text=Ganesh';
                }}
              />
            </div>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-text mb-6 leading-tight max-w-4xl px-4">
            Minakshi Varieties <br className="hidden md:block" />
            <span className="text-primary italic">& Stationery</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted font-light mb-12 max-w-2xl leading-relaxed">
            Everything you need under one roof. Curated essentials, gifts, and stationery for every occasion.
          </p>

          {/* Pill Tags (Editorial Style) */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-14 max-w-4xl">
            {['Stationery', 'Gifts', 'Toys', 'Cosmetics', 'Crockery', 'Essentials'].map((tag, i) => (
              <motion.span 
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1), duration: 0.8, ease: easeCurve }}
                className="text-xs tracking-[0.2em] uppercase text-text/60 font-semibold"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center"
          >
            <a href="#visit" className="inline-flex items-center justify-center px-10 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-hover hover:shadow-soft-hover transition-all duration-500 text-base">
              <Store className="w-5 h-5 mr-3 opacity-90" />
              Visit Store
            </a>
            <a href="tel:+910000000000" className="inline-flex items-center justify-center px-10 py-4 bg-white text-text font-medium rounded-full hover:bg-gray-50 hover:shadow-soft-hover transition-all duration-500 text-base border border-gray-100 shadow-sm">
              <PhoneCall className="w-5 h-5 mr-3 text-primary opacity-90" />
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
