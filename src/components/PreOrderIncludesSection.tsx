import React from 'react';
import { motion } from 'framer-motion';
import { BookIcon, MonitorPlayIcon, WrenchIcon, UsersIcon } from 'lucide-react';

export function PreOrderIncludesSection() {
  const includes = [
    {
      icon: <BookIcon size={32} />,
      title:(
    <>
      The new edition of <br /> 
      <span className="whitespace-nowrap">
        <i className="font-bold text-navy-900">The Teacher Mentor’s Handbook</i>
      </span>
    </>
  ),
      desc: '(June delivery)',
      // Changed from brick (red) to green
      color: 'bg-green-50 text-green-700 border-green-100'
    },
    {
      icon: <MonitorPlayIcon size={32} />,
      // Simplified title
      title: 'Immediate access to JAMS',
      desc: 'through the end of summer',
      color: 'bg-teal-50 text-teal-600 border-teal-100'
    },
    {
      icon: <WrenchIcon size={32} />,
      title: 'Companion mentoring tools',
      desc: 'aligned to the book',
      color: 'bg-mustard-50 text-mustard-600 border-mustard-100'
    },
    {
      icon: <UsersIcon size={32} />,
      // Updated from 4-part to 5-part
      title: 'A 5-part beginning-of-year mentoring workshop',
      desc: 'led by Brenda Kaylor and Jeff Craig',
      color: 'bg-navy-50 text-navy-800 border-navy-100'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="includes" className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            A Complete Mentoring System
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-navy-900">
            What District Pre-Orders Include
          </motion.h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {includes.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center group">
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border transition-transform duration-300 group-hover:scale-110 ${item.color}`}>
                {item.icon}
              </div>
              <h4 className="font-heading font-bold text-lg text-navy-900 mb-2 leading-snug">
                {item.title}
              </h4>
              <p className="text-charcoal-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
