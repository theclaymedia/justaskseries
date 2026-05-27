import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, BookOpenIcon } from 'lucide-react';

export function WorkshopHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-paleblue-50 via-white to-transparent opacity-80 blur-3xl"></div>
      <div className="absolute -left-40 top-40 w-96 h-96 bg-mustard-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paleblue-100 text-navy-900 text-sm font-semibold mb-8 border border-paleblue-200">
          <BookOpenIcon size={16} />
          Based on the new book — The Teacher Mentor's Handbook
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-navy-900 text-balance">
          The Mentor Launch Workshops
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-semibold text-brick-600 mb-6">
          Four workshops to prepare mentors for the year ahead
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-charcoal-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          Four on-demand video sessions led by authors Jeffrey Craig and Brenda
          Kaylor — helping mentors launch the school year with confidence, build
          strong relationships from day one, and guide new teachers through their
          first year.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://justaskpublications.com/pre-order-book/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#004c2e] text-white font-semibold text-lg hover:bg-[#003621] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Pre-Order the Book
            <ArrowRightIcon className="ml-2" size={20} />
          </a>
          <a
            href="#leaders"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-navy-900 font-semibold text-lg border-2 border-gray-200 hover:border-navy-900 hover:bg-gray-50 transition-all">
            Meet the Authors
          </a>
        </motion.div>
      </div>
    </section>
  );
}
