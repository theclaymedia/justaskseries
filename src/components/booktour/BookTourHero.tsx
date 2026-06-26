import React from 'react';
import { motion } from 'framer-motion';
import { TicketIcon, MonitorIcon, ClockIcon, ArrowRightIcon } from 'lucide-react';

const HEAD = "[font-family:'Poppins',sans-serif]";

const features = [
{ Icon: TicketIcon, label: 'FREE' },
{ Icon: MonitorIcon, label: 'LIVE VIRTUAL' },
{ Icon: ClockIcon, label: '30 MINUTES' }];


export function BookTourHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
      {/* Soft decorative background */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-green-50 via-white to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>

            <p className={`text-sm font-bold tracking-[0.2em] uppercase text-[#254C2F] mb-5 ${HEAD}`}>
              Live Webinar Series
            </p>

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.05] tracking-tight mb-6 ${HEAD}`}>
              <span className="text-charcoal-900">Summer Modern </span>
              <span className="text-[#254C2F]">Mentoring Tour</span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-charcoal-800 mb-5">
              Build a stronger mentoring program before the school year begins.
            </p>

            <p className="text-base md:text-lg text-charcoal-600 leading-relaxed mb-8 max-w-xl">
              Join Brenda and Jeff for five free 30-minute sessions designed for
              district leaders, mentor coordinators, principals, and lead mentors
              who want to strengthen induction, equip mentors, and help new
              teachers start strong.
            </p>

            <a
              href="#reserve"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#254C2F] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#1a3a23] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${HEAD}`}>
              Reserve Your Seat
              <ArrowRightIcon size={18} />
            </a>

            {/* Feature row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-10">
              {features.map((f) => {
                const { Icon } = f;
                return (
                  <div key={f.label} className="flex items-center gap-2">
                    <Icon size={20} className="text-[#254C2F]" />
                    <span className={`text-sm font-bold uppercase tracking-wide text-charcoal-800 ${HEAD}`}>
                      {f.label}
                    </span>
                  </div>);

              })}
            </div>
          </motion.div>

          {/* Right: webinar laptop image (badge already baked into asset) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative">

            <img
              src="/tour/Hero_Section_Webinar_Image.png"
              alt="Summer Modern Mentoring Tour — Live Webinar Series with Brenda Kaylor and Jeffrey Craig"
              className="w-full h-auto object-contain drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>);

}
