import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Gamepad2, Gift, Sparkles, Briefcase, Coffee, Calendar, ShoppingBag } from 'lucide-react';

const categories = [
  { name: 'Stationery', icon: PenTool, desc: 'Premium notebooks, pens & office supplies' },
  { name: 'Toys', icon: Gamepad2, desc: 'Educational and fun collections for all ages' },
  { name: 'Gift Articles', icon: Gift, desc: 'Thoughtful presents for every occasion' },
  { name: 'Cosmetics', icon: Sparkles, desc: 'Curated beauty and personal care' },
  { name: 'Bags & Purses', icon: Briefcase, desc: 'Elegant school bags, handbags & more' },
  { name: 'Crockery', icon: Coffee, desc: 'Fine dining and kitchenware essentials' },
  { name: 'Festival Items', icon: Calendar, desc: 'Beautiful decorations for celebrations' },
  { name: 'Daily Essentials', icon: ShoppingBag, desc: 'Everything you need for everyday life' },
];

const CategorySection = () => {
  const easeCurve = [0.22, 1, 0.36, 1];

  return (
    <section id="categories" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4 block">Collections</span>
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-6">Explore Our Range</h2>
          <div className="w-16 h-[2px] bg-primary/20 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: easeCurve }}
                className="group p-6 md:p-10 rounded-3xl bg-surface border border-gray-100 hover:shadow-soft-hover transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-full bg-orange-50/50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-out">
                  <Icon className="w-7 h-7 text-primary opacity-80" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-text mb-3">{category.name}</h3>
                <p className="text-muted text-sm leading-relaxed font-light">{category.desc}</p>
                
                {/* Subtle hover accent line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
