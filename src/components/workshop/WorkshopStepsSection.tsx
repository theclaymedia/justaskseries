import React from 'react';
import { motion } from 'framer-motion';
import {
  PartyPopperIcon,
  CompassIcon,
  MessagesSquareIcon,
  RocketIcon,
  HeartIcon,
  SearchIcon,
  Users2Icon,
  CheckCircle2Icon,
  BookOpenIcon } from
'lucide-react';

export function WorkshopStepsSection() {
  const steps = [
  {
    num: 1,
    Icon: PartyPopperIcon,
    TagIcon: HeartIcon,
    title: "Congratulations (and Thank You)! You're a Mentor!",
    desc: 'Celebrate the role, the impact, and the opportunity ahead.',
    tag: 'Celebrate & Get Inspired',
    numBg: 'bg-navy-900',
    iconWrap: 'bg-paleblue-100 text-navy-900',
    topBorder: 'border-navy-900',
    tagBg: 'bg-navy-900'
  },
  {
    num: 2,
    Icon: CompassIcon,
    TagIcon: SearchIcon,
    title: 'So… What Does a Mentor Actually Do?',
    desc: 'Explore the mentor role, responsibilities, and the biggest ways to make a difference.',
    tag: 'Understand the Role',
    numBg: 'bg-green-600',
    iconWrap: 'bg-green-50 text-green-700',
    topBorder: 'border-green-600',
    tagBg: 'bg-green-600'
  },
  {
    num: 3,
    Icon: MessagesSquareIcon,
    TagIcon: Users2Icon,
    title: 'Setting the Stage for Mentoring Success',
    desc: 'Build a strong foundation for a trusting, productive mentoring relationship.',
    tag: 'Build the Partnership',
    numBg: 'bg-teal-600',
    iconWrap: 'bg-teal-50 text-teal-700',
    topBorder: 'border-teal-600',
    tagBg: 'bg-teal-600'
  },
  {
    num: 4,
    Icon: RocketIcon,
    TagIcon: CheckCircle2Icon,
    title: 'Here We Go! Starting the Year Off Right',
    desc: 'Kick off the year with confidence and practical strategies for the first weeks and beyond.',
    tag: 'Launch a Strong Start',
    numBg: 'bg-purple-600',
    iconWrap: 'bg-purple-50 text-purple-700',
    topBorder: 'border-purple-600',
    tagBg: 'bg-purple-600'
  }];


  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="workshops" className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Four Workshops
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-navy-900">
            Preparing mentors for the year ahead
          </motion.h3>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((step) => {
            const { Icon, TagIcon } = step;
            return (
              <motion.div
                key={step.num}
                variants={item}
                className={`bg-white rounded-2xl shadow-card hover:shadow-soft transition-shadow duration-300 border-t-4 ${step.topBorder} overflow-hidden flex flex-col`}>

                <div className="p-8 flex-1 flex flex-col items-center text-center">
                  <span className={`w-9 h-9 rounded-full ${step.numBg} text-white text-sm font-bold flex items-center justify-center shadow-md mb-5`}>
                    {step.num}
                  </span>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${step.iconWrap}`}>
                    <Icon size={30} />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-navy-900 mb-3 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-charcoal-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className={`${step.tagBg} text-white py-3 px-4 flex items-center justify-center gap-2 text-sm font-semibold`}>
                  <TagIcon size={16} />
                  {step.tag}
                </div>
              </motion.div>);

          })}
        </motion.div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-card p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between">

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-paleblue-100 flex items-center justify-center flex-shrink-0">
              <BookOpenIcon size={24} className="text-navy-900" />
            </div>
            <p className="text-charcoal-700 text-sm md:text-base">
              <span className="font-bold text-navy-900">
                Rooted in research. Written for practice.
              </span>{' '}
              Practical guidance from <i>The Teacher Mentor's Handbook</i> to help
              you support new teachers — and strengthen your school community.
            </p>
          </div>
          <p className="font-heading italic text-teal-700 text-lg md:text-xl text-center md:text-right whitespace-nowrap">
            Your Support. Their Success.
            <br />
            Our Future.
          </p>
        </motion.div>
      </div>
    </section>);

}
