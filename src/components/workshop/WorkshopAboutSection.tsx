import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';

export function WorkshopAboutSection() {
  const points = [
  'Launch the school year with confidence',
  'Build strong mentor–mentee relationships from day one',
  'Guide new teachers through the challenges of their first year'];


  return (
    <section id="about-workshop" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              On-demand sessions, led by the authors
            </h2>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
              The workshop includes four on-demand video sessions based on{' '}
              <i>The Teacher Mentor's Handbook</i> and led by the authors,
              Jeffrey Craig and Brenda Kaylor.
            </p>
            <p className="text-charcoal-700 font-medium mb-4">
              Mentors will learn how to:
            </p>
            <ul className="space-y-4">
              {points.map((p, i) =>
              <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon size={14} className="text-teal-700" />
                  </div>
                  <span className="text-charcoal-800">{p}</span>
                </li>
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6">

            <div className="bg-paleblue-50 border border-paleblue-200 rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-navy-900 mb-3">
                Included with every pre-order
              </h3>
              <p className="text-charcoal-700 leading-relaxed">
                One workshop access is included with each pre-ordered purchase of{' '}
                <i>The Teacher Mentor's Handbook</i> and will be available{' '}
                <span className="font-semibold">summer 2026</span> to support
                your mentors as they work with new teachers.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-navy-900 mb-3">
                Designed to work with JAMS
              </h3>
              <p className="text-charcoal-700 leading-relaxed">
                Built to be used alongside the{' '}
                <a
                  href="https://justaskmentoringseries.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-navy-900 underline decoration-2 decoration-paleblue-300 underline-offset-2 hover:decoration-navy-900 transition-colors">
                  Just ASK Mentoring Series (JAMS)
                </a>
                , providing ongoing access to videos, community, and events that
                help mentors continue growing all year long.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
