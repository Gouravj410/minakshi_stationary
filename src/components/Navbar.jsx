import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/5 shadow-[0_4px_30px_rgba(194,65,12,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex flex-col justify-center">
              <motion.span 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="font-serif font-bold text-2xl tracking-wide leading-none mb-1 bg-gradient-to-r from-primary via-orange-400 to-primary bg-[length:200%_auto] text-transparent bg-clip-text"
              >
                Minakshi
              </motion.span>
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] font-semibold text-primary/80">Varieties & Stationery</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#collections" className="text-text/70 hover:text-primary transition-colors text-sm uppercase tracking-wider font-semibold">Collections</a>
            <a href="tel:+910000000000" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-hover hover:shadow-soft transition-all duration-300 transform hover:-translate-y-0.5 text-sm">
              <PhoneCall className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-gray-100 absolute w-full"
        >
          <div className="px-6 pt-4 pb-8 space-y-2 shadow-soft">
            <a href="#collections" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-sm uppercase tracking-wider font-semibold text-text hover:text-primary hover:bg-orange-50/50 rounded-xl transition-colors">Collections</a>
            <a href="tel:+910000000000" className="mt-6 w-full flex items-center justify-center px-6 py-4 border border-transparent text-sm font-semibold rounded-full text-white bg-primary hover:bg-primary-hover">
              <PhoneCall className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
