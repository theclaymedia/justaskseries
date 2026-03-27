import React from 'react';
import { motion } from 'framer-motion';

export function PairingSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-paleblue-50 to-white relative overflow-hidden border-y border-paleblue-100">
      {/* Decorative background */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-brick-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-paleblue-200 flex flex-col md:flex-row items-center gap-12 relative z-20">
          
          {/* BIG Book Image */}
          <motion.div
            className="flex-shrink-0"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
            
            <img
              src="https://i.imgur.com/fUZqhhT.png"
              alt="Why Didn't I Learn This in College?"
              className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-2xl" />
            
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">
              Pairing Option
            </h3>

            {/* Standardized font for all text under the heading */}
            <div className="space-y-4 mb-8">
              <p className="text-lg text-charcoal-800 leading-relaxed">
                Pair with{' '}
                <span 
                  className="italic font-bold" 
                  style={{ color: '#004b84' }}
                >
                  Why Didn’t I Learn This in College?
                </span>{' '}
                for new teachers.
              </p>

              <p className="text-lg text-charcoal-800 leading-relaxed">
                When mentors and new teachers use aligned resources, induction becomes more coherent and intentional.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-block px-7 py-3 bg-[#004c2e] text-white font-semibold rounded-xl shadow-md hover:bg-[#003621] transition-all hover:shadow-lg hover:-translate-y-1">
              Contact us for bundle pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
