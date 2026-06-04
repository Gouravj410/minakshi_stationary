import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

const VisitUsSection = () => {
  const easeCurve = [0.22, 1, 0.36, 1];

  return (
    <section id="visit" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 flex flex-col items-center">
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4 block">Location</span>
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-6">Visit Our Store</h2>
          <div className="w-16 h-[2px] bg-primary/20 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 bg-surface rounded-[2rem] overflow-hidden shadow-soft border border-gray-100">
          
          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: easeCurve }}
            className="w-full lg:w-1/2 h-96 lg:h-auto min-h-[500px] relative"
          >
            {/* Embedded Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906660162!2d73.72288117042531!3d18.524870597148564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709664531234!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'contrast(1.1) opacity(0.9) grayscale(0.2)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
              className="absolute inset-0"
            ></iframe>
          </motion.div>

          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeCurve }}
            className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center bg-surface relative z-10"
          >
            <h3 className="text-3xl font-serif text-text mb-12">Store Information</h3>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center shadow-sm flex-shrink-0 group-hover:bg-primary/5 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-muted mb-2">Address</h4>
                  <p className="text-text leading-relaxed font-light text-lg">
                    Minakshi Varieties & Stationery,<br />
                    Main Market Road,<br />
                    Pune, Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center shadow-sm flex-shrink-0 group-hover:bg-primary/5 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-muted mb-2">Call Us</h4>
                  <p className="text-text font-light text-lg">+91 00000 00000</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center shadow-sm flex-shrink-0 group-hover:bg-[#25D366]/5 transition-colors duration-300">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-muted mb-2">WhatsApp</h4>
                  <p className="text-text font-light text-lg">+91 00000 00000</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center shadow-sm flex-shrink-0 group-hover:bg-primary/5 transition-colors duration-300">
                  <Clock className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-muted mb-2">Opening Hours</h4>
                  <p className="text-text font-light leading-relaxed text-lg">Monday - Sunday<br />9:00 AM - 9:30 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;
