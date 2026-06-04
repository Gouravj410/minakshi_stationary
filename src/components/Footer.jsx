import React from 'react';
import { Store, Phone, MapPin, Globe, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2A0E05] text-white pt-24 pb-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          
          {/* Brand */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-2 mb-8">
              <span className="font-serif font-bold text-3xl text-white tracking-wide">Minakshi</span>
            </div>
            <p className="text-white/60 mb-8 leading-relaxed font-light">
              Your premium neighborhood variety and stationery store. Curated essentials and gifts under one roof.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300">
                <Globe className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300">
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase font-semibold mb-8 text-primary">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#categories" className="text-white/60 hover:text-white transition-colors font-light">Collections</a></li>
              <li><a href="#story" className="text-white/60 hover:text-white transition-colors font-light">Our Heritage</a></li>
              <li><a href="#gallery" className="text-white/60 hover:text-white transition-colors font-light">Store Tour</a></li>
              <li><a href="#visit" className="text-white/60 hover:text-white transition-colors font-light">Visit Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase font-semibold mb-8 text-primary">Categories</h4>
            <ul className="space-y-4">
              <li className="text-white/60 font-light">Premium Stationery</li>
              <li className="text-white/60 font-light">Toys & Gifts</li>
              <li className="text-white/60 font-light">Cosmetics</li>
              <li className="text-white/60 font-light">Daily Essentials</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase font-semibold mb-8 text-primary">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/60 font-light">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
                <span className="leading-relaxed">Minakshi Varieties & Stationery,<br/>Main Market Road, Pune</span>
              </li>
              <li className="flex items-center gap-4 text-white/60 font-light">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                <span>+91 00000 00000</span>
              </li>
              <li className="flex items-center gap-4 text-white/60 font-light">
                <Store className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                <span>9:00 AM - 9:30 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm font-light">
            © {new Date().getFullYear()} Minakshi Varieties. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center font-light">
            Designed with <span className="text-primary mx-2">♥</span> for local business
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
