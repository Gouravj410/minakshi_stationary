import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

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
    <section className="py-32 relative overflow-hidden">
      {/* Premium Background decoration */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-100/50 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] opacity-60 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4 block">Enquiries</span>
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-6">Send Us A Message</h2>
          <div className="w-16 h-[2px] bg-primary/20 rounded-full mb-8"></div>
          <p className="text-lg text-muted font-light max-w-xl">Have a specific requirement or enquiry? Drop us a message and we'll be in touch shortly.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: easeCurve }}
          className="bg-surface rounded-[2rem] shadow-soft border border-gray-100 p-10 md:p-16 relative overflow-hidden"
        >
          {/* Subtle inner line decoration */}
          <div className="absolute top-4 left-4 right-4 bottom-4 border border-gray-50 rounded-2xl pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-xs tracking-[0.1em] uppercase font-semibold text-muted mb-3">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl bg-background border border-transparent focus:border-primary/20 focus:bg-surface focus:ring-4 focus:ring-primary/5 outline-none transition-all duration-300 font-light text-text"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs tracking-[0.1em] uppercase font-semibold text-muted mb-3">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl bg-background border border-transparent focus:border-primary/20 focus:bg-surface focus:ring-4 focus:ring-primary/5 outline-none transition-all duration-300 font-light text-text"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs tracking-[0.1em] uppercase font-semibold text-muted mb-3">Message</label>
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

            <div className="text-center pt-6">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-12 py-5 bg-primary text-white font-medium rounded-full hover:bg-primary-hover transition-all duration-500 shadow-soft hover:shadow-soft-hover transform hover:-translate-y-1 text-base w-full md:w-auto"
              >
                <Send className="w-5 h-5 mr-3 opacity-90" strokeWidth={1.5} />
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
