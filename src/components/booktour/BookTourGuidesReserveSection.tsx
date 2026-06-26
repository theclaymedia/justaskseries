import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, WifiIcon, PlayCircleIcon, WrenchIcon } from 'lucide-react';

const HEAD = "[font-family:'Poppins',sans-serif]";

const guides = [
{
  name: 'Brenda Kaylor',
  img: '/tour/Brenda_Kaylor.png',
  bio:
  "Co-author of The Teacher Mentor's Handbook and a leader in teacher induction and mentoring for decades. Brenda brings heart, clarity, and practical wisdom to every session."
},
{
  name: 'Jeffrey Craig',
  img: '/tour/Jeffrey_Craig.png',
  bio:
  'Co-author and mentoring expert who helps schools build systems that work. Jeff brings strategy, real-world insight, and a passion for helping educators succeed.'
}];


const perks = [
{ Icon: CalendarDaysIcon, label: '5 free 30-minute sessions' },
{ Icon: WifiIcon, label: 'Live virtual format' },
{ Icon: PlayCircleIcon, label: 'Replay available for registrants' },
{ Icon: WrenchIcon, label: 'Practical tools & resources included' }];


const sessionOptions = [
'July 7 — The Legacy',
'July 28 — Mentor Moves That Matter',
'July 14 — Starting Strong',
'August 4 — Launching Modern Mentoring',
'July 21 — When Things Go Wrong',
'I plan to attend all sessions'];


const inputClass =
'w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-[#254C2F] focus:ring-1 focus:ring-[#254C2F] transition-colors';
const labelClass = `block text-sm font-semibold text-charcoal-800 mb-1.5 ${HEAD}`;

export function BookTourGuidesReserveSection() {
  return (
    <section id="guides" className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* ===== Left: Meet Your Guides ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5">

            <h2 className={`text-xl md:text-2xl font-bold uppercase tracking-wide text-[#254C2F] mb-8 ${HEAD}`}>
              Meet Your Guides
            </h2>

            <div className="space-y-7">
              {guides.map((g) =>
              <div key={g.name} className="flex items-start gap-5">
                  <img
                  src={g.img}
                  alt={g.name}
                  className="w-52 h-52 rounded-full object-cover flex-shrink-0 ring-2 ring-gray-100" />
                  <div>
                    <h3 className={`text-lg font-bold text-[#254C2F] mb-1 ${HEAD}`}>{g.name}</h3>
                    <p className="text-charcoal-600 text-sm leading-relaxed">{g.bio}</p>
                  </div>
                </div>
              )}
            </div>

            <p className="text-charcoal-700 text-sm leading-relaxed mt-7">
              Together, Brenda and Jeff share real examples, proven tools, and
              guidance from <i>The Teacher Mentor's Handbook</i> and the Just ASK
              Mentoring Series.
            </p>
          </motion.div>

          {/* ===== Right: Reserve Your Seat ===== */}
          <motion.div
            id="reserve"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 scroll-mt-28 rounded-2xl bg-gray-50 border border-gray-100 p-6 md:p-10">

            <h2 className={`text-xl md:text-2xl font-bold uppercase tracking-wide text-[#254C2F] text-center leading-snug mb-8 ${HEAD}`}>
              Reserve Your Seat for the<br className="hidden sm:block" /> Summer Modern Mentoring Tour
            </h2>

            {/* Perks row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-9">
              {perks.map((p) => {
                const { Icon } = p;
                return (
                  <div key={p.label} className="flex flex-col items-center text-center">
                    <Icon size={28} className="text-[#254C2F] mb-2" strokeWidth={1.75} />
                    <span className="text-xs text-charcoal-600 leading-snug max-w-[120px]">
                      {p.label}
                    </span>
                  </div>);

              })}
            </div>

            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name*</label>
                  <input type="text" required placeholder="Enter your name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Title / Role*</label>
                  <input type="text" required placeholder="Enter your title" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>District / Organization*</label>
                  <input type="text" required placeholder="Enter your district or organization" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email Address*</label>
                  <input type="email" required placeholder="Enter your email address" className={inputClass} />
                </div>
              </div>

              {/* Sessions checkboxes */}
              <div>
                <label className={labelClass}>
                  Which sessions will you attend?{' '}
                  <span className="font-normal text-charcoal-500">(Select all that apply)</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-1">
                  {sessionOptions.map((opt) =>
                  <label key={opt} className="flex items-center gap-2.5 text-sm text-charcoal-700 cursor-pointer">
                      <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-[#254C2F] focus:ring-[#254C2F] accent-[#254C2F]" />
                      {opt}
                    </label>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>Questions or priorities for your mentoring program?</label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you hope to get from the tour..."
                  className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                className={`w-full py-4 rounded-full bg-[#254C2F] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#1a3a23] transition-colors shadow-md ${HEAD}`}>
                Reserve My Seat
              </button>

              <p className="text-center text-xs text-charcoal-400">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
