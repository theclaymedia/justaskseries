import React from 'react';
import { motion } from 'framer-motion';

const HEAD = "[font-family:'Poppins',sans-serif]";

export function BookTourWhyMattersSection() {
  return (
    <section id="why" className="bg-white py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#254C2F]/[0.06] border border-[#254C2F]/10 px-6 py-12 md:px-16 md:py-14 text-center">
          <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-xl md:text-2xl font-bold uppercase tracking-wide text-[#254C2F] mb-6 ${HEAD}`}>
          Why This Matters
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg text-charcoal-600 leading-relaxed mb-6">
          New teachers need more than orientation and occasional check-ins. They
          need timely guidance, practical tools, and mentors who know how to
          support them through the real challenges of the school year.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg font-bold text-charcoal-900 leading-relaxed max-w-2xl mx-auto">
          The Summer Modern Mentoring Tour gives your team a practical path for
          creating the kind of mentoring experience new teachers need now.
        </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
