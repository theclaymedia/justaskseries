import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
export function MentorBenefitsSection() {
  const benefits = [
  'A Short Motivational Video with reminders of the most important topics and issues to address with their new teachers based on the season in the school calendar',
  'A Monthly Mentoring Guide highlighting the most important topics with links to resources to use that month',
  'Office Hours via Zoom to ask the Just ASK team questions and share ideas with fellow mentors across the country',
  'An Email with resources and links they can use while coaching that month'];

  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://i.imgur.com/i7k5hdP.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Grid Container */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 min-h-[600px]">
        {/* Blue Content Box (Spans 2 columns on desktop) */}
        <div className="md:col-span-2 bg-[#1e73be] p-8 md:p-16 flex flex-col justify-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFFFFF]">
            Each month, mentors will receive:
          </h2>
          <ul className="space-y-6 mb-10">
            {benefits.map((benefit, index) =>
            <li key={index} className="flex items-start gap-3">
                <Plus className="text-white mt-1 flex-shrink-0" size={20} />
                <p className="text-sm md:text-base font-medium leading-relaxed">
                  {benefit}
                </p>
              </li>
            )}
          </ul>
          <button className="w-fit px-6 py-2 bg-white text-black font-bold rounded-md hover:bg-gray-100 transition-colors uppercase text-sm">
            More Info
          </button>
        </div>

        {/* Mosaic Right Side (2 columns) */}
        <div className="md:col-span-2 grid grid-cols-2 grid-rows-2">
          {/* Top Right: Orange Box */}
          <div className="bg-[#e67e22] p-6 md:p-10 flex items-center justify-center text-center order-2 md:order-1">
            <p className="text-white font-bold text-sm md:text-lg leading-snug">
              Just in time content in small enough chunks to match how mentors
              and teachers consume content and fit into busy schedules.
            </p>
          </div>

          {/* Top Far Right: Image (Boys Smiling) */}
          <div className="relative overflow-hidden order-1 md:order-2">
            <img
              src="https://i.imgur.com/lD2UVEi.jpeg"
              alt="Students smiling"
              className="absolute inset-0 w-full h-full object-cover" />
            
          </div>

          {/* Bottom Left: Image (Teachers working) */}
          <div className="relative overflow-hidden order-3">
            <img
              src="https://i.imgur.com/OXqtstN.jpeg"
              alt="Mentors collaborating"
              className="absolute inset-0 w-full h-full object-cover" />
            
          </div>

          {/* Bottom Right: Purple Box */}
          <div className="bg-[#5e2e71] p-6 md:p-10 flex items-center justify-center order-4">
            <p className="text-white font-bold text-xs md:text-sm leading-relaxed">
              Just ASK mentoring materials are used in all 50 states and
              recommended in districts across the county, including in CA, TX,
              FL, NY, CO, IL, ND, DE, NC, VA and MA.
            </p>
          </div>
        </div>
      </div>
    </section>);

}