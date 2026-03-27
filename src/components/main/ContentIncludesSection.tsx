import React from 'react';
import { motion } from 'framer-motion';
export function ContentIncludesSection() {
  const items = [
  {
    num: '01',
    text: 'The most important topics to be discussing for each month of the school year',
    color: 'text-brick-600',
    borderColor: 'border-brick-600'
  },
  {
    num: '02',
    text: 'A path to guiding new teachers through the stages of Anticipation, Survival, Disillusionment, Reflection, and back to Anticipation',
    color: 'text-mustard-500',
    borderColor: 'border-mustard-500'
  },
  {
    num: '03',
    text: 'Best Practices in Planning, Instruction, Assessment, Creating a Productive Learning Environment, and Professionalism and Collaboration',
    color: 'text-green-600',
    borderColor: 'border-green-600'
  },
  {
    num: '04',
    text: 'Guidance and tools for Peer Observations and Data-Driven Discussions',
    color: 'text-navy-800',
    borderColor: 'border-navy-800'
  },
  {
    num: '05',
    text: 'Resources for Instructional Planning including Planning Assessment, Active Learning Structures, Building Your Own RAFT, Homework Planning, Unit Planning, and more',
    color: 'text-purple-600',
    borderColor: 'border-purple-600'
  },
  {
    num: '06',
    text: 'Hear from those who have gone before you…reflections on and accounts of induction and mentoring practices in action by mentors',
    color: 'text-teal-600',
    borderColor: 'border-teal-600'
  }];

  // JAMS Brand Colors motif for the bottom right
  const dots = [
  'bg-[#E53E3E]',
  'bg-[#ED8936]',
  'bg-[#ECC94B]',
  'bg-[#48BB78]',
  'bg-[#38B2AC]',
  'bg-[#4299E1]',
  'bg-[#9F7AEA]'];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
            className="text-2xl md:text-3xl font-bold text-navy-900 max-w-3xl mx-auto leading-snug">
            
            Mentors and Teachers will receive a manageable amount of content,
            ready to use including:
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {items.map((item, index) =>
          <motion.div
            key={index}
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
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className={`flex gap-6 items-start border-t-2 ${item.borderColor} pt-6`}>
            
              <span
              className={`text-5xl md:text-6xl font-bold font-heading leading-none ${item.color}`}>
              
                {item.num}
              </span>
              <p className="text-charcoal-700 font-medium pt-2">{item.text}</p>
            </motion.div>
          )}
        </div>

        {/* Decorative Dots Row */}
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          className="flex justify-end gap-2 mt-12">
          
          {dots.map((color, i) =>
          <div
            key={i}
            className={`w-8 h-8 rounded-full ${color} opacity-80`} />

          )}
        </motion.div>
      </div>
    </section>);

}
