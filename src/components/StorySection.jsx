import React from 'react';
import { motion } from 'framer-motion';

const StorySection = () => {
  const easeCurve = [0.22, 1, 0.36, 1];

  return (
    <section id="story" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: easeCurve }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Decorative Offset Border */}
            <div className="absolute inset-0 border border-primary/20 rounded-[2rem] transform translate-x-6 translate-y-6 hidden sm:block pointer-events-none"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-soft aspect-[4/5] md:aspect-[3/4] z-10 bg-white">
              <img 
                src={`${import.meta.env.BASE_URL}Images/store-front.jpeg`} 
                alt="Minakshi Varieties Store Front" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text/40 to-transparent mix-blend-multiply opacity-60"></div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: easeCurve, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-6 block">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text mb-8 leading-tight">
              A Legacy of <br/>
              <span className="italic text-primary">Local Trust</span>
            </h2>
            
            <p className="text-lg text-muted mb-8 leading-loose font-light max-w-lg">
              Welcome to Minakshi Varieties & Stationery. For years, we've stood as a cornerstone of our community, offering an unmatched selection where premium quality meets absolute affordability.
            </p>
            
            <p className="text-lg text-muted mb-12 leading-loose font-light max-w-lg">
              Whether you are preparing for a festival, searching for the perfect gift, or picking up daily essentials, our shelves are stocked to serve you with warmth, honesty, and a welcoming smile.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-2xl text-text mb-2">10k+</h4>
                <p className="text-sm uppercase tracking-wider text-muted font-semibold">Happy Customers</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-text mb-2">100%</h4>
                <p className="text-sm uppercase tracking-wider text-muted font-semibold">Quality Assured</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default StorySection;
