import React from 'react';
import { motion } from 'framer-motion';
import { Store, PhoneCall } from 'lucide-react';

const HeroSection = () => {
  const easeCurve = [0.22, 1, 0.36, 1];

  return (
    <section className="relative pt-28 pb-36 overflow-hidden flex flex-col items-center text-center">
      {/* Massive Ambient background glow orbs */}
      <div className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-ambient pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-accent/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 animate-ambient pointer-events-none" style={{ animationDelay: '-5s' }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easeCurve }}
          className="flex flex-col items-center"
        >
          {/* Ganesh Image Container with Super Spotlight */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: easeCurve }}
            className="relative mb-12 md:mb-16 mt-4 group"
          >
            {/* Animated Spotlight/Glow Headlights Effect */}
            <motion.div 
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full blur-[40px] scale-[1.8] md:scale-[2.2] z-0"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0%, rgba(194,65,12,0.15) 20%, rgba(194,65,12,0.8) 40%, transparent 50%, transparent 50%, rgba(194,65,12,0.15) 70%, rgba(194,65,12,0.8) 90%, transparent 100%)'
              }}
            ></motion.div>

            {/* Om Symbols */}
            <motion.div 
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-0 pointer-events-none"
            >
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute top-1/2 left-1/2 -mt-4 -ml-4 text-primary/40 font-serif text-3xl drop-shadow-md origin-center"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-6.5rem) rotate(-${i * 45}deg)`,
                  }}
                >
                  ॐ
                </div>
              ))}
            </motion.div>
            
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-surface/80 backdrop-blur-xl shadow-glow flex items-center justify-center p-8 border border-primary/20 relative z-10 group-hover:border-primary/40 transition-colors duration-500">
              <motion.img 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src={`${import.meta.env.BASE_URL}Images/1.png`} 
                alt="Ganesh Logo" 
                className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(194,65,12,0.4)]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/400x400/FFFBF5/C2410C?text=Ganesh';
                }}
              />
            </div>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight max-w-4xl px-4 drop-shadow-sm">
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="bg-gradient-to-r from-text via-primary to-text bg-[length:200%_auto] text-transparent bg-clip-text inline-block pb-2"
            >
              Minakshi Varieties
            </motion.span>
            <br className="hidden md:block" />
            <span className="text-primary italic drop-shadow-[0_0_20px_rgba(194,65,12,0.2)]">& Stationery</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted font-light mb-10 md:mb-12 max-w-2xl leading-relaxed px-4">
            Everything you need under one roof. Curated essentials, gifts, and stationery for every occasion.
          </p>

          {/* Pill Tags (Editorial Style) */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-8 md:gap-y-4 mb-12 md:mb-14 max-w-4xl px-2">
            {['Stationery', 'Gifts', 'Toys', 'Cosmetics', 'Crockery', 'Essentials'].map((tag, i) => (
              <motion.span 
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1), duration: 0.8, ease: easeCurve }}
                className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-text/60 font-semibold"
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
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center px-4"
          >
            <a href="#visit" className="inline-flex items-center justify-center px-10 py-4 bg-primary text-surface font-medium rounded-full hover:bg-primary-hover hover:scale-[1.02] hover:-translate-y-1 shadow-[0_10px_30px_rgba(194,65,12,0.4)] hover:shadow-[0_15px_40px_rgba(194,65,12,0.6)] transition-all duration-500 text-base">
              <Store className="w-5 h-5 mr-3 opacity-90" />
              Visit Store
            </a>
            <a href="tel:+910000000000" className="inline-flex items-center justify-center px-10 py-4 bg-surface text-text font-medium rounded-full hover:bg-background hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 text-base border border-primary/10 shadow-soft">
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

