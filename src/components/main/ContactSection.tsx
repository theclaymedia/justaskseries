import React from 'react';
import { motion } from 'framer-motion';

export function ContactSection() {
  // JAMS Brand Colors motif for the bottom - Kept as requested
  const dots = [
    'bg-[#E53E3E]',
    'bg-[#ED8936]',
    'bg-[#ECC94B]',
    'bg-[#48BB78]',
    'bg-[#38B2AC]',
    'bg-[#4299E1]',
    'bg-[#9F7AEA]'
  ];

  return (
    <section id="contact" className="bg-white relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left Content / Form Area */}
        <div className="py-20 px-4 sm:px-6 lg:px-16 xl:px-24 flex flex-col justify-center bg-white relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            
            {/* Updated text color to #004c2e */}
            <h2 className="text-sm font-bold tracking-widest uppercase text-[#004c2e] mb-4">
              Let's get in touch
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Just ASK Publications & Professional Development
            </h3>
            <p className="text-charcoal-600 mb-10">
              Please submit the form below and a member of the 
              Just ASK team will contact you shortly.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-charcoal-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004c2e] focus:border-[#004c2e] outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-charcoal-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004c2e] focus:border-[#004c2e] outline-none transition-all" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004c2e] focus:border-[#004c2e] outline-none transition-all" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-1">
                  Questions or Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004c2e] focus:border-[#004c2e] outline-none transition-all resize-none">
                </textarea>
              </div>

              {/* Updated Button to #004c2e */}
              <button
                type="submit"
                className="px-8 py-4 rounded-xl bg-[#004c2e] text-white font-bold hover:bg-[#004c2e] transition-colors shadow-md w-full sm:w-auto">
                Send Message
              </button>
            </form>

            {/* Decorative Dots Row */}
            <div className="flex justify-start gap-2 mt-12">
              {dots.map((color, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 rounded-full ${color} opacity-80`} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="relative hidden lg:block bg-gray-200">
          <img
            src="https://i.imgur.com/Oub7Ce4.jpeg"
            alt="Students in classroom"
            className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/20 mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
}
