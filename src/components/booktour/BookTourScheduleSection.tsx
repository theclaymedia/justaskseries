import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDaysIcon } from 'lucide-react';

const HEAD = "[font-family:'Poppins',sans-serif]";

const sessions = [
{
  num: 1,
  title: 'The Legacy',
  desc: 'Where the vision came from and why it matters now.',
  date: 'TUESDAY, JULY 7',
  time: '1:00 PM ET / 10:00 AM PT'
},
{
  num: 2,
  title: 'Starting Strong',
  desc: 'How mentors help new teachers begin with confidence.',
  date: 'TUESDAY, JULY 14',
  time: '1:00 PM ET / 10:00 AM PT'
},
{
  num: 3,
  title: 'When Things Go Wrong',
  desc: 'How mentors respond when challenges appear.',
  date: 'TUESDAY, JULY 21',
  time: '1:00 PM ET / 10:00 AM PT'
},
{
  num: 4,
  title: 'Mentor Moves That Matter',
  desc: 'Simple practices that make mentoring more effective.',
  date: 'TUESDAY, JULY 28',
  time: '1:00 PM ET / 10:00 AM PT'
},
{
  num: 5,
  title: 'Launching Modern Mentoring',
  desc: 'How to connect books, workshops, and JAMS into one system.',
  date: 'TUESDAY, AUGUST 4',
  time: '1:00 PM ET / 10:00 AM PT'
}];


export function BookTourScheduleSection() {
  return (
    <section id="schedule" className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-xl md:text-2xl font-bold uppercase tracking-wide text-[#254C2F] text-center mb-12 ${HEAD}`}>
          Tour Schedule
        </motion.h2>

        <div className="space-y-2.5">
          {sessions.map((s, i) =>
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-r-xl rounded-l-none bg-gray-50 border border-gray-100 overflow-hidden p-0 sm:pr-6">

              {/* Session badge */}
              <div className="flex-shrink-0 w-20 h-20 rounded-r-xl rounded-l-none bg-[#254C2F] text-white flex flex-col items-center justify-center leading-none">
                <span className={`text-[10px] font-semibold uppercase tracking-widest text-white/80 ${HEAD}`}>
                  Session
                </span>
                <span className={`text-3xl font-extrabold mt-1 ${HEAD}`}>{s.num}</span>
              </div>

              {/* Title + description */}
              <div className="flex-1 min-w-0 px-5 sm:px-0">
                <h3 className={`text-xl font-bold text-[#254C2F] mb-1 ${HEAD}`}>
                  {s.title}
                </h3>
                <p className="text-charcoal-600 text-base leading-snug">{s.desc}</p>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3 sm:flex-shrink-0 sm:pl-4 px-5 pb-5 sm:p-0">
                <CalendarDaysIcon size={24} className="text-charcoal-400 flex-shrink-0" />
                <div>
                  <p className={`text-base font-bold text-[#254C2F] uppercase tracking-wide ${HEAD}`}>
                    {s.date}
                  </p>
                  <p className="text-base text-charcoal-500">{s.time}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
