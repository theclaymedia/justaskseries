import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircleIcon, ClockIcon, CalendarDaysIcon, FileTextIcon } from 'lucide-react';

const HEAD = "[font-family:'Poppins',sans-serif]";

type Session = {
  num: number;
  title: string;
  desc: string;
  recorded: string;
  duration: string;
  videoUrl: string | null;
  resourceUrl: string | null;
  resourceLabel: string;
};

// Each session renders from this array. When a recording is ready, paste its
// embed URL into `videoUrl` (YouTube/Vimeo/Wistia "embed" src, not the watch
// link) and the card swaps the placeholder for the real player automatically.
// Same for `resourceUrl` — point it at the handout and the link appears.
const sessions: Session[] = [
{
  num: 1,
  title: 'Starting Strong',
  desc:
  'How mentors help new teachers begin with confidence — setting the tone in the first weeks and building trust that lasts all year.',
  recorded: 'July 7, 2026',
  duration: '30 min',
  videoUrl: null,
  resourceUrl: null,
  resourceLabel: 'Session handout'
},
{
  num: 2,
  title: 'The Legacy',
  desc: 'Where the vision came from and why it matters now.',
  recorded: 'July 14, 2026',
  duration: '30 min',
  videoUrl: null,
  resourceUrl: null,
  resourceLabel: 'Session handout'
},
{
  num: 3,
  title: 'When Things Go Wrong',
  desc: 'How mentors respond when challenges appear.',
  recorded: 'July 21, 2026',
  duration: '30 min',
  videoUrl: null,
  resourceUrl: null,
  resourceLabel: 'Session handout'
},
{
  num: 4,
  title: 'Mentor Moves That Matter',
  desc: 'Simple practices that make mentoring more effective.',
  recorded: 'July 28, 2026',
  duration: '30 min',
  videoUrl: null,
  resourceUrl: null,
  resourceLabel: 'Session handout'
},
{
  num: 5,
  title: 'Launching Modern Mentoring',
  desc: 'How to connect books, workshops, and JAMS into one system.',
  recorded: 'August 4, 2026',
  duration: '30 min',
  videoUrl: null,
  resourceUrl: null,
  resourceLabel: 'Session handout'
}];


/** 16:9 player slot — real embed once `videoUrl` is set, placeholder until then. */
function SessionVideo({ session }: { session: Session }) {
  if (session.videoUrl) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-charcoal-900 ring-1 ring-black/5">
        <iframe
          src={session.videoUrl}
          title={`Session ${session.num}: ${session.title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full" />
      </div>);

  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#254C2F] to-[#12291a] ring-1 ring-black/5 flex items-center justify-center">
      <PlayCircleIcon size={60} strokeWidth={1.5} className="text-white/70" />
    </div>);

}

/** Session number + recorded date + runtime, shared by both card sizes. */
function SessionMeta({ session }: { session: Session }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-charcoal-500">
      <span className="flex items-center gap-1.5">
        <CalendarDaysIcon size={16} className="text-charcoal-400 flex-shrink-0" />
        Recorded {session.recorded}
      </span>
      <span className="flex items-center gap-1.5">
        <ClockIcon size={16} className="text-charcoal-400 flex-shrink-0" />
        {session.duration}
      </span>
    </div>);

}

function ResourceLink({ session }: { session: Session }) {
  if (!session.resourceUrl) return null;
  return (
    <a
      href={session.resourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#254C2F] hover:text-[#1a3a23] transition-colors ${HEAD}`}>
      <FileTextIcon size={16} />
      {session.resourceLabel}
    </a>);

}

export function BookTourRecordingsSection() {
  const [featured, ...rest] = sessions;

  return (
    <section id="sessions" className="bg-white py-10 md:py-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-xl md:text-2xl font-bold uppercase tracking-wide text-[#254C2F] text-center mb-3 ${HEAD}`}>
          Session Recordings
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-charcoal-600 max-w-2xl mx-auto mb-12">
          All five sessions from the Summer Modern Mentoring Tour, free to watch
          on your own schedule. Start anywhere, or share a single session with
          your mentor team.
        </motion.p>

        {/* ===== Featured: Session 1 ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gray-50 border border-gray-100 p-5 md:p-8 mb-8">

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <SessionVideo session={featured} />

            <div>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full bg-[#254C2F] text-white text-[11px] font-bold uppercase tracking-widest ${HEAD}`}>
                  Session {featured.num}
                </span>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 text-[11px] font-bold uppercase tracking-widest text-charcoal-500 ${HEAD}`}>
                  Start here
                </span>
              </div>

              <h3 className={`text-2xl md:text-3xl font-bold text-[#254C2F] mb-3 ${HEAD}`}>
                {featured.title}
              </h3>
              <p className="text-charcoal-600 text-base leading-relaxed mb-5">
                {featured.desc}
              </p>

              <SessionMeta session={featured} />
              <ResourceLink session={featured} />
            </div>
          </div>
        </motion.div>

        {/* ===== Sessions 2–5 ===== */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {rest.map((s, i) =>
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl bg-white border border-gray-200 shadow-sm p-5 flex flex-col">

              <SessionVideo session={s} />

              <div className="pt-5 flex-1 flex flex-col">
                <span
                className={`text-[11px] font-bold uppercase tracking-widest text-charcoal-400 mb-1.5 ${HEAD}`}>
                  Session {s.num}
                </span>
                <h3 className={`text-xl font-bold text-[#254C2F] mb-2 ${HEAD}`}>
                  {s.title}
                </h3>
                <p className="text-charcoal-600 text-base leading-snug mb-4 flex-1">
                  {s.desc}
                </p>

                <SessionMeta session={s} />
                <ResourceLink session={s} />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
