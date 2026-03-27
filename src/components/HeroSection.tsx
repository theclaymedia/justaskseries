import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, CheckCircle2 } from 'lucide-react';

export function HeroSection() {
  const preOrderItems = [
    "Special pre-release pricing",
    { text: "Immediate JAMS access", link: "https://hub-edxgrjo70n.membership.io/login" },
    "Summer mentoring workshop"
  ];

  return (
    <section className="relative pt-24 pb-10 lg:pt-32 lg:pb-20 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Adjusted grid columns to 6/6 for better balance and no overlap */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="z-20">
            
            {/* Linked Badge at Top */}
            <a 
              href="https://justaskpublications.com/products/books/the-21st-century-mentors-handbook/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-8 hover:bg-green-100 transition-colors"
            >
              <CalendarIcon size={14} />
              <span>Get Your Mentoring Program Ready Before August</span>
            </a>

            {/* Headline: Structured to stack Pre-Order above the one-line title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900 leading-[1.2]">
              <span className="block text-3xl md:text-4xl mb-2 opacity-90">Pre-Order</span>
              <span className="whitespace-nowrap italic">The Teacher Mentor’s Handbook</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl font-semibold text-green-700 mb-8 leading-relaxed max-w-xl">
              A new edition of the <span className="italic">The 21st Century Mentor’s Handbook</span> + pre-order launch package to equip your mentors.
            </p>

            {/* Pop-out Pre-order Box */}
            <div className="bg-green-100/50 backdrop-blur-sm rounded-2xl p-6 border border-green-200 mb-10 shadow-sm max-w-xl">
              <p className="text-sm font-bold text-navy-900 mb-4 uppercase tracking-wide">
                Pre-order by May 1 and receive:
              </p>
              
              <div className="grid grid-cols-1 gap-y-3">
                {preOrderItems.map((item, i) =>
                  <div key={i} className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                    <CheckCircle2 className="text-green-600 flex-shrink-0" size={18} />
                    <span className="leading-snug">
                      {typeof item === 'string' ? item :
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-medium text-green-700 underline hover:text-green-800">
                          {item.text}
                        </a>
                      }
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-[#004c2e] text-white font-bold text-lg hover:bg-[#003621] transition-all shadow-lg hover:-translate-y-1"
              >
                Pre-Order Now
              </a>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end">
            
            {/* Background Circle - scaled slightly to stay behind book */}
            <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-mustard-400 rounded-full z-0 opacity-80" />

            {/* Floating Badge */}
            <motion.div
              animate={{ rotate: [12, 16, 12] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 right-0 md:right-8 z-20 bg-[#005F56] text-white font-black px-6 py-4 rounded-xl shadow-xl border-4 border-white transform rotate-12">
              <p className="text-sm md:text-base uppercase tracking-tighter text-center leading-none mb-1">
                New Edition
              </p>
              <p className="text-md md:text-lg font-bold text-center tracking-tight">
                June 2026
              </p>
            </motion.div>

            {/* Book Image */}
            <motion.img
              src="https://i.imgur.com/H31QbtU.png"
              alt="The Modern Mentor’s Handbook"
              className="relative z-10 w-[80%] md:w-[70%] lg:w-[85%] drop-shadow-[0_25px_40px_rgba(0,0,0,0.25)]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} 
            />
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
