import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a href="/" className="transition-opacity hover:opacity-80">
              <img
                src="https://i.imgur.com/rnTHIbj.png"
                alt="Just ASK Publications"
                className="h-14 md:h-16 w-auto object-contain" />
            </a>
            
            <div className="hidden lg:block h-6 w-[1px] bg-gray-200 mx-2"></div>
            <a
              href="/"
              className="hidden lg:flex items-center gap-1 text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-[#004c2e] transition-colors">
              <ChevronLeft size={14} />
              Back to Home
            </a>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#includes"
              className="text-sm font-medium text-charcoal-700 hover:text-[#004c2e] transition-colors">
              What's Included
            </a>
            <a
              href="/#workshop"
              className="text-sm font-medium text-charcoal-700 hover:text-[#004c2e] transition-colors">
              Workshop
            </a>
            <a
              href="/#pricing"
              className="text-sm font-medium text-charcoal-700 hover:text-[#004c2e] transition-colors">
              Pricing
            </a>
            
            {/* Primary CTA Button Updated to #004c2e */}
            <a
              href="https://justaskpublications.com/pre-order-book/"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#004c2e] text-white font-medium text-sm hover:bg-[#004c2e] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Pre-Order Now
            </a>
          </div>

        </div>
      </div>
    </motion.nav>
  );
}
