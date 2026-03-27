import React from 'react';
import { motion } from 'framer-motion';
export function ContentSection() {
  const leftBullets = [
  'Holds student learning as the central goal of our work',
  'Addresses teachers as leaders of learning and change',
  'Features K-12 practitioner examples',
  'Includes practical applications of evidence-based practices',
  'Dedicated to equitable, engaging, and empowering learning'];

  const rightBullets = [
  'New teacher tools including needs assessments, self-assessments, and goal setting and reflection formats',
  'Tools for peer observation and data-driven discussions',
  'Mentoring calendar',
  'Mentor responses to challenges and concerns of new teachers',
  "Cross-references the highly acclaimed new teacher resource Why Didn't I Learn This in College?"];

  // Helper to render the multi-colored dot icon
  const FlowerIcon = () =>
  <div className="flex-shrink-0 mt-1.5 w-4 h-4 rounded-full bg-gradient-to-tr from-blue-500 via-red-500 to-yellow-500 shadow-sm" />;

  return (
    <section id="resources" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            
            Receive just in time content based on the stages of a new teacher
            including:
          </motion.h2>
        </div>

        {/* Content Area */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">
          {/* Left Text Block */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="w-full lg:w-1/3">
            
            <h3 className="text-3xl font-serif italic font-bold mb-8 text-gray-900 leading-tight">
              Why Didn't I Learn <br /> This in College?
            </h3>
            <ul className="space-y-6">
              {leftBullets.map((text, i) =>
              <li key={i} className="flex items-start gap-4">
                  <FlowerIcon />
                  <span className="text-lg text-gray-700 leading-snug">
                    {text}
                  </span>
                </li>
              )}
            </ul>
          </motion.div>

          {/* Centered Books Image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            className="w-full lg:w-1/3 flex flex-col items-center">
            
            <img
              src="https://i.imgur.com/uJIDT4g.png"
              alt="Just ASK Mentoring Books"
              className="w-full max-w-md h-auto object-contain drop-shadow-2xl mb-12" />
            

            {/* Buttons positioned directly under the books like the screenshot */}
            <div className="flex gap-4 w-full justify-center">
              <button className="px-6 py-3 bg-[#2b7ec1] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors uppercase tracking-wider text-sm shadow-md">
                View Sample
              </button>
              <button className="px-6 py-3 bg-[#69bc45] text-white font-bold rounded-lg hover:bg-green-700 transition-colors uppercase tracking-wider text-sm shadow-md">
                View Sample
              </button>
            </div>
          </motion.div>

          {/* Right Text Block */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="w-full lg:w-1/3">
            
            <h3 className="text-3xl font-serif italic font-bold mb-8 text-gray-900 leading-tight">
              The 21st Century <br /> Mentor's Handbook
            </h3>
            <ul className="space-y-6">
              {rightBullets.map((text, i) =>
              <li key={i} className="flex items-start gap-4">
                  <FlowerIcon />
                  <span className="text-lg text-gray-700 leading-snug">
                    {text}
                  </span>
                </li>
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>);

}