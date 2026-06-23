import React from 'react';
import { motion } from 'framer-motion';
import {
  GiftIcon,
  UserIcon,
  UsersIcon,
  CheckIcon,
  MailIcon,
  ArrowRightIcon } from
'lucide-react';

export function WorkshopRegistrationSection() {
  const tiers = [
  {
    Icon: UserIcon,
    name: 'One Seat',
    price: '$499',
    unit: 'per seat',
    desc: 'Workshop access for a single mentor.',
    features: [
    'All four on-demand video sessions',
    'Led by the authors, Jeffrey Craig & Brenda Kaylor',
    'Access available summer 2026'],

    featured: false
  },
  {
    Icon: UsersIcon,
    name: '10 Seats',
    price: '$2,500',
    unit: 'for 10 seats',
    desc: 'Equip a whole team of mentors.',
    features: [
    'Everything in the single seat',
    'Ten workshop seats for your district',
    'Just $250 per mentor'],

    featured: true
  }];


  return (
    <section id="workshop-registration" className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Register for the Workshops
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Want just the workshops?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-charcoal-600 leading-relaxed">
            Four on-demand video sessions led by the authors of{' '}
            <i>The Teacher Mentor's Handbook</i>, Jeffrey Craig and Brenda
            Kaylor — helping your mentors launch the school year with confidence,
            build strong relationships from day one, and guide new teachers
            through their first year.
          </motion.p>
        </div>

        {/* Complimentary-with-pre-order banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-8 flex flex-col md:flex-row items-center gap-5 text-center md:text-left">

          <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
            <GiftIcon size={24} className="text-teal-700" />
          </div>
          <p className="text-charcoal-700 leading-relaxed">
            <span className="font-bold text-navy-900">
              Still included free with the book.
            </span>{' '}
            Workshop access remains included with every pre-order of{' '}
            <i>The Teacher Mentor's Handbook</i> through{' '}
            <span className="font-semibold text-navy-900">June 30</span>. This
            complimentary offer ends next week — the fees below apply only if
            you'd like to register for the workshops <span className="italic">without</span>{' '}
            purchasing the book.
          </p>
        </motion.div>

        {/* Workshop-only pricing */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tiers.map((tier, i) => {
            const { Icon } = tier;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 md:p-10 flex flex-col ${
                tier.featured ?
                'shadow-2xl border-2 border-green-600' :
                'shadow-card border border-gray-100'}`
                }>

                {tier.featured &&
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-green-600 text-white text-xs font-bold uppercase tracking-wider">
                    Best Value
                  </div>
                }

                <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-6">
                  <Icon size={28} className="text-green-700" />
                </div>

                <h4 className="font-heading font-bold text-xl text-navy-900 mb-1">
                  {tier.name}
                </h4>
                <p className="text-charcoal-600 text-sm mb-6">{tier.desc}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-navy-900">
                    {tier.price}
                  </span>
                  <span className="text-charcoal-600 font-medium ml-2">
                    {tier.unit}
                  </span>
                </div>

                <ul className="space-y-4">
                  {tier.features.map((f, fi) =>
                  <li key={fi} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon size={14} className="text-teal-700" />
                      </div>
                      <span className="text-charcoal-800 text-sm">{f}</span>
                    </li>
                  )}
                </ul>
              </motion.div>);

          })}
        </div>

        {/* How to register */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-100 shadow-card p-8 md:p-10 text-center">

          <h4 className="font-heading font-bold text-xl text-navy-900 mb-3">
            How to register
          </h4>
          <p className="text-charcoal-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            To register without purchasing the book, send a purchase order (PO) to{' '}
            <a
              href="mailto:info@justaskpublications.com"
              className="font-semibold text-navy-900 underline decoration-2 decoration-paleblue-300 underline-offset-2 hover:decoration-navy-900 transition-colors">
              info@justaskpublications.com
            </a>{' '}
            and our team will get you set up.
          </p>
          {/* NOTE: After the complimentary offer ends next week, this CTA label
              can be changed from "Reach Out To Us" to "Register". */}
          <a
            href="mailto:info@justaskpublications.com?subject=Workshop%20Registration%20%E2%80%94%20Purchase%20Order"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#004c2e] text-white font-semibold text-lg hover:bg-[#003621] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            <MailIcon size={20} className="mr-2" />
            Reach Out To Us
            <ArrowRightIcon className="ml-2" size={20} />
          </a>
        </motion.div>
      </div>
    </section>);

}
