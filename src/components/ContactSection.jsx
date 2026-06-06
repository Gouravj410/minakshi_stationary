import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const easeCurve = [0.22, 1, 0.36, 1];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      {/* Premium Background decoration */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-100/50 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] opacity-60 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4 block">Enquiries</span>
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-6">Send Us A Message</h2>
          <div className="w-16 h-[2px] bg-primary/20 rounded-full mb-8"></div>
          <p className="text-lg text-muted font-light max-w-xl">Have a specific requirement or enquiry? Drop us a message and we'll be in touch shortly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: easeCurve }}
          className="bg-surface rounded-[2rem] shadow-soft border border-gray-100 p-6 md:p-16 relative overflow-hidden"
        >
          {/* Subtle inner line decoration */}
          <div className="absolute top-4 left-4 right-4 bottom-4 border border-gray-50 rounded-2xl pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label htmlFor="name" className="block text-[10px] md:text-xs tracking-[0.1em] uppercase font-semibold text-muted mb-3">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-background border border-transparent focus:border-primary/20 focus:bg-surface focus:ring-4 focus:ring-primary/5 outline-none transition-all duration-300 font-light text-text"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] md:text-xs tracking-[0.1em] uppercase font-semibold text-muted mb-3">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-background border border-transparent focus:border-primary/20 focus:bg-surface focus:ring-4 focus:ring-primary/5 outline-none transition-all duration-300 font-light text-text"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[10px] md:text-xs tracking-[0.1em] uppercase font-semibold text-muted mb-3">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                rows="5"
                className="w-full px-6 py-4 rounded-xl bg-background border border-transparent focus:border-primary/20 focus:bg-surface focus:ring-4 focus:ring-primary/5 outline-none transition-all duration-300 resize-none font-light text-text"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="pt-2 md:pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex items-center justify-center px-8 md:px-12 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-hover transition-all duration-500 shadow-soft hover:shadow-soft-hover text-sm md:text-base w-full"
                >
                  <Send className="w-5 h-5 mr-3 opacity-90" strokeWidth={1.5} />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Location Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: easeCurve, delay: 0.2 }}
            className="h-full flex flex-col"
          >
            <div className="bg-surface/30 backdrop-blur-md rounded-[2rem] border border-white/10 p-4 relative overflow-hidden h-[400px] md:h-full min-h-[400px] group shadow-soft hover:shadow-glow transition-all duration-500">
              <div className="absolute top-8 left-8 z-20 bg-background/80 backdrop-blur-lg border border-white/10 p-4 rounded-2xl shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-serif text-white text-sm">Minakshi Varieties</p>
                    <p className="text-xs text-white/60">Main Market Road, Pune</p>
                  </div>
                </div>
              </div>
              
              {/* Added Google Maps Embed for Pune */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360434035!2d73.7805654160411!3d18.52460355342898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full rounded-xl filter grayscale-[40%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Minakshi Varieties Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
