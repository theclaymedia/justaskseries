import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, CheckIcon } from 'lucide-react';

export function WorkshopSection() {
  const sessions = [
    'Clarify mentor roles and expectations',
    'Establish partnership agreements',
    'Organize the start of the school year',
    'Build sustainable mentoring structures',
    'Implement the Modern Mentor framework effectively' // Added 5th point to match the 5-session count
  ];


  return (
    <section
      id="workshop"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://i.imgur.com/Xn0psBM.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-paleblue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-mustard-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-navy-900/80 rounded-[2.5rem] p-8 md:p-16 shadow-2xl overflow-hidden relative border border-white/5">
          {/* Inner geometric accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 transform skew-x-12 translate-x-20"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-paleblue-100 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                <CalendarDaysIcon size={18} />
                <span>Included with Pre-Order</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Beginning-of-Year Mentoring Workshop
              </h2>

              <p className="text-xl text-paleblue-100 mb-8">
                Five sessions designed to help districts:
              </p>

              <ul className="space-y-5 mb-10">
                {sessions.map((session, index) =>
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4">
                  
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                      <CheckIcon size={14} className="text-white" />
                    </div>
                    <span className="text-lg text-white font-medium">{session}</span>
                  </motion.li>
                )}
              </ul>
            </motion.div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-xl relative z-20">
              
              <h3 className="text-xl font-bold text-navy-900 mb-6 text-center border-b border-gray-100 pb-6">
                A Complete Mentoring System
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  {/* Changed #1 from red (brick) to green */}
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 border border-green-100">
                    <span className="font-bold text-green-700 text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal-900">The Book</h4>
                    <p className="text-charcoal-600">provides the framework.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 border border-teal-100">
                    <span className="font-bold text-teal-600 text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal-900">The Workshop</h4>
                    {/* Changed description text */}
                    <p className="text-charcoal-600">starts the year strong.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-mustard-50 flex items-center justify-center flex-shrink-0 border border-mustard-100">
                    <span className="font-bold text-mustard-600 text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal-900">JAMS</h4>
                    <p className="text-charcoal-600">supports ongoing implementation.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);
}
