import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDaysIcon } from 'lucide-react';

const HEAD = "[font-family:'Poppins',sans-serif]";

export function BookTourFinalCtaSection() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-[#254C2F] px-6 py-7 md:px-10 md:py-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">

          {/* Icon + text */}
          <div className="flex items-center gap-5 flex-1 text-center md:text-left">
            <div className="hidden sm:flex w-14 h-14 rounded-xl bg-white/10 items-center justify-center flex-shrink-0">
              <CalendarDaysIcon size={28} className="text-white" />
            </div>
            <div>
              <h2 className={`text-lg md:text-2xl font-bold uppercase text-white leading-snug ${HEAD}`}>
                New Teacher Success Starts With a Mentor.
              </h2>
              <p className="text-white/80 mt-1">Start the journey this summer.</p>
            </div>
          </div>

          {/* Button */}
          <a
            href="#reserve"
            className={`flex-shrink-0 inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#254C2F] font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-md ${HEAD}`}>
            Reserve Your Seat Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
