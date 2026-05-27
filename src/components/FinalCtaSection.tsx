import React from 'react';
import { motion } from 'framer-motion';

export function FinalCtaSection() {
  return (
    <section className="py-24 md:py-40 bg-[#0a0c1b] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Image */}
          <motion.div
            className="hidden lg:block lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            
            <motion.img
              src="https://i.imgur.com/il1wRcE.jpeg"
              alt="Mentor in classroom"
              className="w-full rounded-3xl shadow-2xl object-cover aspect-[4/5]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} 
            />
          </motion.div>

          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 text-center z-20">
            
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Prepare mentors before August.
            </h2>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg mx-auto leading-relaxed">
              Pre-order{' '}
              <span className="italic">The Teacher Mentor’s Handbook</span> by
              May 1 to receive special pricing and mentoring support through the
              summer.
            </p>

            <div className="flex justify-center">
              <a
                href="https://justaskpublications.com/pre-order-book/"
                className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-[#004c2e] text-white font-bold text-lg hover:bg-[#003621] transition-all shadow-lg hover:-translate-y-1"
              >
                Pre-Order the Book
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="hidden lg:block lg:col-span-3 text-[#FFFFFF]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            
            <motion.img
              src="https://i.imgur.com/UZQ2gsG.jpeg"
              alt="Mentoring group"
              className="w-full rounded-3xl shadow-2xl object-cover aspect-[4/5]"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
