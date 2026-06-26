import React from 'react';
import { motion } from 'framer-motion';
import { LightbulbIcon, BookOpenIcon, UsersIcon, ClipboardCheckIcon } from 'lucide-react';

const HEAD = "[font-family:'Poppins',sans-serif]";

const items = [
{ Icon: LightbulbIcon, color: '#2f9e44', text: 'A clear idea to strengthen mentoring' },
{ Icon: BookOpenIcon, color: '#1d4ed8', text: 'A practical Just ASK resource or reflection tool' },
{ Icon: UsersIcon, color: '#7c3aed', text: 'Guidance from experienced mentoring leaders' },
{ Icon: ClipboardCheckIcon, color: '#166534', text: 'Next steps you can use before school begins' }];


export function BookTourWhatYouGetSection() {
  return (
    <section id="includes" className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-xl md:text-2xl font-bold uppercase tracking-wide text-[#254C2F] text-center mb-12 ${HEAD}`}>
          What You'll Get
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {items.map((item, i) => {
            const { Icon } = item;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center">

                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-md"
                  style={{ backgroundColor: item.color }}>
                  <Icon size={30} className="text-white" />
                </div>
                <p className="text-charcoal-700 leading-snug max-w-[180px]">
                  {item.text}
                </p>
              </motion.div>);

          })}
        </div>
      </div>
    </section>
  );
}
