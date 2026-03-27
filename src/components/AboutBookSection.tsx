import React from 'react';
import { motion } from 'framer-motion';
import { BookmarkIcon, TargetIcon } from 'lucide-react';

export function AboutBookSection() {
  const topics = [
    'Preparing mentors before school starts',
    'Starting the year with clarity and structure',
    'Supporting mentors all year long',
    'Addressing mentoring challenges',
    'Finishing strong and planning ahead'
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5">
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-900">About the Book</h2>
            <p className="text-lg text-charcoal-700 mb-8">
              This updated edition includes comprehensive guidance on:
            </p>

            <ul className="space-y-4 mb-10">
              {topics.map((topic, index) =>
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl shadow-sm border border-gray-100">
                  
                  {/* Changed Icon to Green */}
                  <BookmarkIcon className="text-green-600 flex-shrink-0" size={20} />
                  <span className="font-medium text-charcoal-800">{topic}</span>
                </motion.li>
              )}
            </ul>
          </motion.div>

          {/* Right Container with overlapping person image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 relative flex justify-start">
            
            {/* Changed Top Border to Green */}
            <div className="bg-white rounded-2xl p-10 shadow-xl border-t-4 border-green-600 relative w-full md:w-[80%]">
              {/* Faint Target Icon */}
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <TargetIcon size={120} className="text-green-900" />
              </div>

              {/* Main Text */}
              <div className="relative z-10 pr-32">
                {/* Changed Icon Background and Icon Color to Green */}
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <TargetIcon className="text-green-600" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-4 leading-snug">
                  Designed to help districts develop mentors who effectively support new teachers—leading to a qualified and satisfied teacher in every classroom.
                </h3>
              </div>

              {/* Overlapping Person Image */}
              <motion.img
                src="https://i.imgur.com/H31QbtU.png"
                alt="Mentor book"
                className="absolute -right-20 -bottom-8 w-64 md:w-80 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
