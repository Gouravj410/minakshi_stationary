import React from 'react';
import { Store, Phone, MapPin, Globe, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A0A05] text-surface pt-24 pb-12 border-t-[8px] border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-12 md:mb-16">
          
          {/* Brand */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-2 mb-6 md:mb-8">
              <span className="font-serif font-bold text-2xl md:text-3xl text-primary tracking-wide drop-shadow-[0_0_10px_rgba(194,65,12,0.3)]">Minakshi</span>
            </div>
            <p className="text-surface/70 mb-8 leading-relaxed font-light text-sm md:text-base">
              Your premium neighborhood variety and stationery store. Curated essentials and gifts under one roof.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface/10 flex items-center justify-center text-surface hover:bg-primary hover:scale-110 transition-all duration-300 shadow-lg border border-surface/5">
                <Globe className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface/10 flex items-center justify-center text-surface hover:bg-primary hover:scale-110 transition-all duration-300 shadow-lg border border-surface/5">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-6 md:mb-8 text-primary">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#gallery" className="text-surface/70 hover:text-primary transition-colors font-light text-sm md:text-base">Store Tour</a></li>
              <li><a href="#categories" className="text-surface/70 hover:text-primary transition-colors font-light text-sm md:text-base">Collections</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-6 md:mb-8 text-primary">Categories</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="text-surface/70 font-light text-sm md:text-base">Premium Stationery</li>
              <li className="text-surface/70 font-light text-sm md:text-base">Toys & Gifts</li>
              <li className="text-surface/70 font-light text-sm md:text-base">Cosmetics</li>
              <li className="text-surface/70 font-light text-sm md:text-base">Daily Essentials</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-6 md:mb-8 text-primary">Contact</h4>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start gap-4 text-surface/70 font-light text-sm md:text-base">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
                <span className="leading-relaxed">Minakshi Varieties & Stationery,<br/>Main Market Road, Pune</span>
              </li>
              <li className="flex items-center gap-4 text-surface/70 font-light text-sm md:text-base">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                <span>+91 00000 00000</span>
              </li>
              <li className="flex items-center gap-4 text-surface/70 font-light text-sm md:text-base">
                <Store className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                <span>9:00 AM - 9:30 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-surface/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-surface/50 text-xs md:text-sm font-light text-center md:text-left">
            © {new Date().getFullYear()} Minakshi Varieties. All rights reserved.
          </p>
          <p className="text-surface/50 text-xs md:text-sm flex items-center font-light">
            Designed with <span className="text-primary mx-2 hover:scale-125 transition-transform duration-300">♥</span> for local business
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
