import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Banknote, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Curated Variety',
    desc: 'From daily essentials to unique gifts, we stock an expansive selection of premium items so you never have to go anywhere else.',
    icon: LayoutGrid,
  },
  {
    title: 'Honest Value',
    desc: 'Quality products at prices that respect your budget. We believe in providing the absolute best value for our community.',
    icon: Banknote,
  },
  {
    title: 'Local Heritage',
    desc: 'Serving our neighborhood with integrity and a smile. We are proud to be your reliable and trusted local store.',
    icon: ShieldCheck,
  }
];

const FeaturesSection = () => {
  const easeCurve = [0.22, 1, 0.36, 1];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 flex flex-col items-center">
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4 block">The Minakshi Difference</span>
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-6">Why People Choose Us</h2>
          <div className="w-16 h-[2px] bg-primary/20 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 1, ease: easeCurve }}
                className="bg-surface p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-soft transition-all duration-700 relative overflow-hidden group flex flex-col items-center text-center"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gradient-to-bl from-orange-50/80 to-transparent rounded-full group-hover:scale-150 transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100 z-0 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-10 group-hover:bg-primary/10 transition-colors duration-500">
                    <Icon className="w-8 h-8 text-primary opacity-90" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif text-text mb-5">{feature.title}</h3>
                  <p className="text-muted text-base leading-loose font-light">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
