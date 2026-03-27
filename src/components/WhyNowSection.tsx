import React from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircleIcon,
  CheckCircleIcon,
  TrendingDownIcon,
  ClockIcon,
  UsersIcon,
  ShieldAlertIcon } from
'lucide-react';

export function WhyNowSection() {
  const painPoints = [
  {
    icon: <AlertCircleIcon className="text-[#004c2e]" size={24} />,
    text: 'Informal expectations'
  },
  {
    icon: <TrendingDownIcon className="text-[#004c2e]" size={24} />,
    text: 'Inconsistent structures'
  },
  {
    icon: <ClockIcon className="text-[#004c2e]" size={24} />,
    text: 'One-time orientation sessions'
  },
  {
    icon: <ShieldAlertIcon className="text-[#004c2e]" size={24} />,
    text: 'Limited ongoing support'
  }];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Why This Book Now?
            </h2>
            <p className="text-lg text-charcoal-700 mb-8 leading-relaxed">
              Mentors are expected to support new teachers in one of the most
              demanding professional environments in decades.
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
              <p className="font-semibold text-navy-900 mb-6">
                Yet many mentoring programs rely on:
              </p>
              <ul className="space-y-4">
                {painPoints.map((point, index) =>
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                  
                    {/* Updated ring color to green theme */}
                    <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                      {point.icon}
                    </div>
                    <span className="text-charcoal-800 font-medium">
                      {point.text}
                    </span>
                  </motion.li>
                )}
              </ul>
            </div>
          </motion.div>

          {/* Right: The Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center">
            
            {/* Card Container */}
            <div className="relative w-full max-w-xl bg-navy-900 text-white rounded-2xl p-8 md:p-10 shadow-xl overflow-visible">
              
              {/* Decorative arch */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 rounded-bl-full"></div>

              {/* Blob behind image */}
              <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[260px] h-[260px] bg-mustard-400/30 rounded-[60%_40%_50%_50%/50%_60%_40%_50%] blur-2xl z-0"></div>

              {/* Person Image (OVERFLOW RIGHT) */}
              <motion.img
                src="https://i.imgur.com/nSaYdqA.png"
                alt="Mentor holding book"
                className="hidden md:block absolute right-[-80px] bottom-[-20px] w-[350px] z-20 drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />

              {/* Content (kept left) */}
              <div className="relative z-10 md:pr-40">
                
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <CheckCircleIcon size={28} className="text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-heading font-bold mb-5 leading-snug text-white">
                  {/* Updated Name and Italicized */}
                  <i>The Teacher Mentor's Handbook</i> provides a clear, year-long
                  framework for mentoring that is structured, practical, and
                  aligned to today's needs.
                </h3>

                <div className="h-px w-full bg-white/20 my-6"></div>

                <p className="text-base text-paleblue-100 font-medium flex items-start gap-3">
                  <UsersIcon
                    className="flex-shrink-0 mt-1 text-mustard-400"
                    size={22} />
                  
                  <span>
                    It helps districts move from mentoring as goodwill to
                    mentoring as a system.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
