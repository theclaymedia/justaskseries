import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  SparklesIcon,
  TargetIcon,
  ShieldCheckIcon } from
'lucide-react';

export function MainHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-paleblue-50 via-white to-transparent opacity-80 blur-3xl"></div>
      <div className="absolute -left-40 top-40 w-96 h-96 bg-mustard-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 max-w-2xl">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-navy-900 text-balance">
              Are you committed to mentoring new teachers in your district?
            </h1>

            <div className="mb-8">
              {/* Keeping brick red text */}
              <span className="text-5xl md:text-6xl lg:text-7xl italic font-bold text-brick-600 drop-shadow-sm font-[Poppins,_sans-serif]">
                JAMS
              </span>
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-800 ml-3">
                is for you!
              </span>
            </div>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 leading-relaxed max-w-lg">
              A comprehensive system providing the right content, for the right
              people, at the right time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Only the Explore JAMS button updated to #004c2e */}
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#004c2e] text-white font-semibold text-lg hover:bg-[#004c2e] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Explore JAMS
              </a>
              <a
                href="https://justaskpublications.com/pre-order-book/"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-navy-900 font-semibold text-lg border-2 border-gray-200 hover:border-navy-900 hover:bg-gray-50 transition-all">
                Pre-Order the Book
                <ArrowRightIcon className="ml-2" size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Abstract Floating Cards */}
          <div className="lg:col-span-6 relative h-[500px] hidden md:block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[40px] border-paleblue-100 rounded-full opacity-50" 
            />

            {/* Card 1 - All brick red themes are kept */}
            <motion.div
              initial={{ opacity: 0, y: 50, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-10 left-10 z-20">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-brick-500 w-64">
                <div className="w-10 h-10 bg-brick-50 rounded-full flex items-center justify-center mb-4">
                  <TargetIcon className="text-brick-600" size={20} />
                </div>
                <p className="font-bold text-navy-900 leading-snug">
                  Set up new teachers to survive and thrive
                </p>
              </motion.div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-40 right-0 z-30">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-teal-500 w-72">
                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheckIcon className="text-teal-600" size={20} />
                </div>
                <p className="font-bold text-navy-900 leading-snug">
                  Structured mentoring support delivered monthly
                </p>
              </motion.div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute bottom-10 left-32 z-10">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-mustard-400 w-60">
                <div className="w-10 h-10 bg-mustard-50 rounded-full flex items-center justify-center mb-4">
                  <SparklesIcon className="text-mustard-600" size={20} />
                </div>
                <p className="font-bold text-navy-900 leading-snug">
                  Year-long guidance and professional development
                </p>
              </motion.div>
            </motion.div>

            {/* Decorative Dots - Kept the red dot */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-20 right-20 w-4 h-4 bg-[#E53E3E] rounded-full" />
            
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute bottom-40 left-10 w-6 h-6 bg-[#ED8936] rounded-full" />
            
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="absolute top-1/2 right-10 w-5 h-5 bg-[#48BB78] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
