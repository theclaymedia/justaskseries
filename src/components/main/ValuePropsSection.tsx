import React, { Children } from 'react';
import { motion } from 'framer-motion';
export function ValuePropsSection() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };
  return (
    <section id="about" className="bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true
        }}
        className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
        
        {/* Main Banner - Span 2 columns */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-2 relative min-h-[400px] flex items-center bg-gray-900 overflow-hidden">
          
          {/* Background Image Placeholder - Replace 'src' with your classroom image */}
          <img
            src="https://i.imgur.com/YWNizDn.jpeg"
            alt="Classroom"
            className="absolute inset-0 w-full h-full object-cover opacity-60" />
          
          <div className="relative z-10 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6">
              Do you believe it is critical for new teachers to be set up to
              survive and thrive in the classroom?
            </h2>
            <p className="text-4xl md:text-6xl text-white italic tracking-tighter mb-8 font-[700] font-[Poppins,_sans-serif]">
              WE DO!
            </p>
            <button className="bg-[#3182CE] hover:bg-[#2B6CB0] text-white font-bold py-3 px-8 rounded text-sm uppercase tracking-widest transition-colors">
              Show Me How
            </button>
          </div>
        </motion.div>

        {/* Orange Tile */}
        <motion.div
          variants={itemVariants}
          className="bg-[#ED8936] p-8 md:p-10 flex flex-col justify-center text-white">
          
          <p className="text-sm md:text-base font-medium leading-relaxed">
            JAMS – the Just ASK Mentoring Series (JAMS) is designed to give you
            your time back and reconnect educators with the joy that put you in
            the classroom in the first place.
          </p>
        </motion.div>

        {/* Purple Tile */}
        <motion.div
          variants={itemVariants}
          className="bg-[#6B46C1] p-8 md:p-10 flex flex-col justify-center text-white">
          
          <p className="text-sm md:text-base font-medium leading-relaxed">
            JAMS provides year-long support for mentors working with new
            teachers to deliver the right content for each stage of the school
            year.
          </p>
        </motion.div>

        {/* Top Right Image Placeholder */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:block bg-gray-200">
          
          <img
            src="https://i.imgur.com/iVp8EPC.jpeg"
            alt="Teacher working"
            className="w-full h-full object-cover" />
          
        </motion.div>

        {/* Bottom Row Logic (Using a second grid or flex for alignment) */}
        {/* Note: To match the exact offset look, we continue the grid or use absolute positioning */}

        {/* Spacer for large screens to align green tile */}
        <div className="hidden lg:block md:col-span-2"></div>

        {/* Green Tile */}
        <motion.div
          variants={itemVariants}
          className="bg-[#68D391] p-8 md:p-10 flex flex-col justify-center text-white">
          
          <p className="text-sm md:text-base font-medium leading-relaxed">
            Education has changed and the new environment is loaded with
            distractions that take away from what matters most –{' '}
            <span className="font-bold">student learning!</span>
          </p>
        </motion.div>

        {/* Black Tile */}
        <motion.div
          variants={itemVariants}
          className="bg-black p-8 md:p-10 hidden md:block">
        </motion.div>

        {/* Bottom Right Image Placeholder */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:block bg-gray-200">
          
          <img
            src="https://i.imgur.com/q089IGT.jpeg"
            alt="Student learning"
            className="w-full h-full object-cover" />
          
        </motion.div>
      </motion.div>
    </section>);

}