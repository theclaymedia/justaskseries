import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';

export function MentoringSystemSection() {
  const parts = [
  {
    num: 1,
    title: 'The Book',
    desc: 'provides the framework.',
    wrap: 'bg-green-50 border-green-100 text-green-700'
  },
  {
    num: 2,
    title: 'The Workshop',
    desc: 'starts the year strong.',
    wrap: 'bg-teal-50 border-teal-100 text-teal-600'
  },
  {
    num: 3,
    title: 'JAMS',
    desc: 'supports ongoing implementation.',
    wrap: 'bg-mustard-50 border-mustard-100 text-mustard-600'
  }];


  return (
    <section id="system" className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
          A Complete Mentoring System
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-charcoal-600 mb-12">
          Three parts that work together to support mentors all year long.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {parts.map((p) =>
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: p.num * 0.1 }}
            className="bg-white rounded-2xl shadow-card border border-gray-100 p-8 flex flex-col items-center">

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center border mb-4 ${p.wrap}`}>
                <span className="font-bold text-xl text-navy-900">{p.num}</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-900 mb-1">
                {p.title}
              </h3>
              <p className="text-charcoal-600 text-sm">{p.desc}</p>
            </motion.div>
          )}
        </div>

        <p className="text-lg text-charcoal-700 mb-8 max-w-2xl mx-auto">
          Pre-order the new book today to secure the complete mentoring system
          for your district.
        </p>
        <a
          href="#pricing"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#004c2e] text-white font-semibold text-lg hover:bg-[#003621] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
          Pre-Order the Book
          <ArrowRightIcon className="ml-2" size={20} />
        </a>
      </div>
    </section>);

}
