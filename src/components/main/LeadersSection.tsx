import React from 'react';
import { motion } from 'framer-motion';
export function LeadersSection() {
  const leaders = [
  {
    name: 'Brenda Kaylor',
    image: 'https://i.imgur.com/8dooW8n.jpeg',
    bio: "Brenda Kaylor is an experienced consultant and author working with school districts across the United States. Brenda was the Director of Professional Development in St. Vrain Valley School District, Longmont, Colorado. Before assuming that position, she was Director of Professional Development in Brighton Public Schools, Colorado. Brenda holds a Bachelor of Arts in Elementary Education from Adams State College, a Master of Arts in Elementary Education from the University of Northern Colorado, and Professional Certification in Educational Administration from the University of Denver."
  },
  {
    name: 'Jeffrey Craig',
    image: 'https://justaskmentoringseries.com/wp-content/uploads/2024/05/Jeff-Craig.png',
    bio: 'Jeffrey Craig, Ed.D. is a lifelong educator. His leadership as a teacher, principal, and district leader impacted students and adults in many ways. He was a teacher and team leader in Canandaigua, NY. He was a middle school principal in Greece, NY, and in Syracuse, NY. As an Assistant Superintendent for a regional educational service agency, Craig worked with leaders from dozens of school districts across New York as they led their school and district improvement initiatives. He concluded his administrative career as the assistant superintendent in Cortland, NY. Craig also helped prepare the next generation of school administrators, both for roles as principals and district leaders, as an adjunct professor at SUNY Oswego and SUNY Cortland. His articles have been published in a number of respected educational journals.'
  }];

  // JAMS Brand Colors motif for the bottom left
  const dots = ['bg-[#E53E3E]', 'bg-[#ED8936]', 'bg-[#48BB78]', 'bg-[#9F7AEA]'];
  return (
    <section
      id="leaders"
      className="py-24 bg-gray-50 border-y border-gray-200 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="text-3xl md:text-4xl font-bold text-navy-900">
            
            Meet JAMS Leaders
          </motion.h2>
        </div>

        <div className="space-y-8 relative z-10">
          {leaders.map((leader, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2
            }}
            className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
            
              <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-lg overflow-hidden border-2 border-gray-100">
                <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover" />
              
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  {leader.name}
                </h3>
                <p className="text-charcoal-700 leading-relaxed text-sm md:text-base">
                  {leader.bio}
                </p>
              </div>
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
          className="flex justify-start gap-2 mt-12 relative z-0">
          
          {dots.map((color, i) =>
          <div
            key={i}
            className={`w-8 h-8 rounded-full ${color} opacity-80`} />

          )}
        </motion.div>
      </div>
    </section>);

}
