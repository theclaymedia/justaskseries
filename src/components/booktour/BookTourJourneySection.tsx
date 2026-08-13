import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

const HEAD = "[font-family:'Poppins',sans-serif]";

const steps = [
{
  label: 'Step 1',
  color: '#254C2F',
  icon: '/tour/step1.png',
  title: 'Tour Recordings',
  desc: 'Explore what great modern mentoring looks like, one session at a time.',
  href: '#sessions',
  anchor: true,
  cta: 'Watch the sessions'
},
{
  label: 'Step 2',
  color: '#1d4ed8',
  icon: '/tour/step2.png',
  title: 'Mentor Launch Workshop',
  desc: 'Help mentors begin the school year with confidence and clarity.',
  href: '/mentor-launch-workshops',
  cta: 'Workshop details'
},
{
  label: 'Step 3',
  color: '#7c3aed',
  icon: '/tour/step3.png',
  title: 'JAMS',
  desc: 'Ongoing, just-in-time support throughout the school year.',
  href: 'https://justaskmentoringseries.com/',
  external: true,
  cta: 'Explore JAMS'
}];


export function BookTourJourneySection() {
  return (
    <section id="journey" className="bg-gray-50 border-y border-gray-200 py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-xl md:text-2xl font-bold uppercase tracking-wide text-[#254C2F] mb-8 ${HEAD}`}>
          The Modern Mentoring Journey
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4">
          {steps.map((step, i) => {
            const cardInner =
            <div className="flex flex-row items-center text-left gap-5 w-full">
                <img
                src={step.icon}
                alt={step.title}
                className="w-20 h-20 rounded-full shadow-md flex-shrink-0" />

                <div className="min-w-0">
                  <p
                  className={`text-xs font-bold uppercase tracking-widest mb-1 ${HEAD}`}
                  style={{ color: step.color }}>
                    {step.label}
                  </p>
                  <h3 className={`text-lg font-bold uppercase text-charcoal-900 mb-1.5 ${HEAD}`}>
                    {step.title}
                  </h3>
                  <p className="text-charcoal-600 text-sm leading-relaxed">{step.desc}</p>
                  {step.href &&
                  <span
                    className={`inline-flex items-center gap-1 mt-2 text-sm font-semibold ${HEAD}`}
                    style={{ color: step.color }}>
                      {step.cta}
                      <ArrowRightIcon size={15} />
                    </span>
                  }
                </div>
              </div>;


            const baseCls =
            'rounded-2xl bg-white border border-gray-200 p-6 md:p-7 w-full h-full shadow-sm';
            const linkCls = `${baseCls} transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-gray-300`;

            let card;
            if (step.href && step.external) {
              card =
              <a href={step.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  {cardInner}
                </a>;

            } else if (step.href && step.anchor) {
              card =
              <a href={step.href} className={linkCls}>
                  {cardInner}
                </a>;

            } else if (step.href) {
              card =
              <Link to={step.href} className={linkCls}>
                  {cardInner}
                </Link>;

            } else {
              card = <div className={baseCls}>{cardInner}</div>;
            }

            return (
              <React.Fragment key={step.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex-1 flex">

                  {card}
                </motion.div>

                {/* Arrow between steps */}
                {i < steps.length - 1 &&
                <div className="flex items-center justify-center flex-shrink-0">
                    <ArrowRightIcon
                    size={44}
                    strokeWidth={2.5}
                    className="text-charcoal-700 rotate-90 lg:rotate-0" />
                  </div>
                }
              </React.Fragment>);

          })}
        </div>

        <p className="text-center text-charcoal-500 mt-8">
          Three simple steps. One powerful system. Greater impact for new teachers.
        </p>
      </div>
    </section>
  );
}
