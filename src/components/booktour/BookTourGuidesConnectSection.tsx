import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircleIcon, ClockIcon, ShareIcon, WrenchIcon, CheckCircle2Icon, XIcon } from 'lucide-react';

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
{ Icon: PlayCircleIcon, label: '5 recorded sessions' },
{ Icon: ClockIcon, label: '25–40 minutes each' },
{ Icon: ShareIcon, label: 'Watch anytime, share with your team' },
{ Icon: WrenchIcon, label: 'Practical tools & resources included' }];


// Ordered to read down the two columns on desktop.
const topicOptions = [
'Starting new teachers strong',
'Building a mentoring system',
'Mentor moves & practical tools',
'Mentor Launch Workshops',
'Supporting mentors through challenges',
'Just ASK Mentoring Series (JAMS)'];


const inputClass =
'w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-[#254C2F] focus:ring-1 focus:ring-[#254C2F] transition-colors';
const labelClass = `block text-sm font-semibold text-charcoal-800 mb-1.5 ${HEAD}`;

export function BookTourGuidesConnectSection() {
  const [showToast, setShowToast] = useState(false);
  const timerRef = useRef(null);

  // Demo only: the native "required" validation blocks submit until the form is
  // filled, so this fires only on a completed submission. No data is sent.
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setShowToast(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShowToast(false), 4000);
    form.reset();
  };

  return (
    <section id="guides" className="bg-white py-12 md:py-14">
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
              Across the series, Brenda and Jeff share real examples, proven
              tools, and guidance from <i>The Teacher Mentor's Handbook</i> and
              the Just ASK Mentoring Series.
            </p>
          </motion.div>

          {/* ===== Right: Start a Conversation ===== */}
          <motion.div
            id="connect"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 scroll-mt-28 rounded-2xl bg-gray-50 border border-gray-100 p-6 md:p-10">

            <h2 className={`text-xl md:text-2xl font-bold uppercase tracking-wide text-[#254C2F] text-center leading-snug mb-3 ${HEAD}`}>
              Bring Modern Mentoring<br className="hidden sm:block" /> to Your Team
            </h2>

            <p className="text-center text-charcoal-600 text-sm leading-relaxed max-w-lg mx-auto mb-8">
              Watched a session and want to talk it through? Tell us a little
              about your program and Brenda or Jeff will reach out to you
              directly.
            </p>

            {/* What's included row */}
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
            <form onSubmit={handleSubmit} className="space-y-5">
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
                <div>
                  <label className={labelClass}>
                    Phone{' '}
                    <span className="font-normal text-charcoal-500">(optional)</span>
                  </label>
                  <input type="tel" placeholder="Enter your phone number" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>
                    Best time to reach you{' '}
                    <span className="font-normal text-charcoal-500">(optional)</span>
                  </label>
                  <input type="text" placeholder="e.g. weekday mornings ET" className={inputClass} />
                </div>
              </div>

              {/* Topic checkboxes */}
              <div>
                <label className={labelClass}>
                  Which topics matter most to your program?{' '}
                  <span className="font-normal text-charcoal-500">(Select all that apply)</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-1">
                  {topicOptions.map((opt) =>
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
                  placeholder="Tell us what you're working on this year..."
                  className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                className={`w-full py-4 rounded-full bg-[#254C2F] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#1a3a23] transition-colors shadow-md ${HEAD}`}>
                Start the Conversation
              </button>

              <p className="text-center text-xs text-charcoal-400">
                We respect your privacy. We'll only use this to follow up with you.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Demo confirmation toast */}
      <AnimatePresence>
        {showToast &&
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-xl bg-[#254C2F] text-white pl-4 pr-3 py-4 shadow-2xl max-w-sm">

            <CheckCircle2Icon size={24} className="text-white flex-shrink-0" />
            <p className="text-sm font-medium leading-snug">
              Thanks — we've got your details and will be in touch shortly.
            </p>
            <button
            type="button"
            onClick={() => setShowToast(false)}
            aria-label="Dismiss"
            className="ml-1 text-white/70 hover:text-white transition-colors flex-shrink-0">

              <XIcon size={18} />
            </button>
          </motion.div>
        }
      </AnimatePresence>
    </section>
  );
}
