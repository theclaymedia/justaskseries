import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon, QuoteIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const dots = [
'bg-[#E53E3E]', 'bg-[#ED8936]', 'bg-[#ECC94B]', 'bg-[#48BB78]',
'bg-[#38B2AC]', 'bg-[#4299E1]', 'bg-[#9F7AEA]'];


export function TestimonialsSection() {
  const testimonials = [
  {
    title: 'Great Resource for any Teacher',
    text: 'A great resource for any teacher, particularly a novice teacher. The book is a hands-on resource that was readily available with clear, concise, organized ideas that were usable in the classroom. It is one we plan to use throughout the year in our teacher induction program.',
    author: 'Director of Staff Development'
  },
  {
    title: 'Helpful Survival Tips and Strategies',
    text: 'I found myself thinking about my own classroom effectiveness and began taking notes on ideas and strategies that I wanted to try! This book provided me with a plethora of ideas, tips, tools, and activities that I plan to implement in my own classroom this year, and to share with my new and veteran colleagues. This book should be required reading for all teachers.',
    author: 'High School Social Studies Teacher'
  },
  {
    title: 'Valuable Resource for New Teachers',
    text: 'A valuable resource for new teachers in developing best practices in a standards based classroom. This book is clearly organized, concisely written, teacher friendly and rich in effective strategies to promote learning. This book will definitely be my main resource for working with new teachers!',
    author: 'Induction Coach'
  },
  {
    title: 'A Go-To Book',
    text: 'I have 2 teachers that I mentor right now. This book really helped me put the details in perspective. The calendar ideas are very beneficial. This is a "go-to" book.',
    author: 'Mentor'
  },
  {
    title: 'The best mentor source book on the market',
    text: 'Paula Rutherford created the best mentor source book on the market when she wrote 21st Century Mentor’s Handbook. Rutherford breaks the support down into the following categories: personal; professional; curriculum, instruction, and assessment; organizational systems; students; colleagues; school and school system; parents and community; and special educators. This book is a comprehensive resource for anyone working with inexperienced educators.',
    author: 'Professional Development Leader'
  }];


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Logic to get exactly 3 visible items, wrapping around the end of the array
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 hidden lg:flex">
        {dots.map((color, i) =>
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`w-8 h-8 rounded-full ${color}`} />

        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-32 relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-navy-900">What Educators Say</h2>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors">
              
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors">
              
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {getVisibleTestimonials().map((testimonial, index) =>
              <motion.div
                key={`${testimonial.author}-${currentIndex}-${index}`} // Unique key for animation
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col relative h-full min-h-[400px]">
                
                  <QuoteIcon className="absolute top-6 right-6 text-gray-200" size={40} />
                  <h3 className="text-xl font-bold text-navy-900 mb-4 pr-8">{testimonial.title}</h3>
                  <p className="text-charcoal-600 mb-8 italic flex-grow">"{testimonial.text}"</p>
                  <div className="mt-auto">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) =>
                    <StarIcon key={i} className="text-[#ECC94B] fill-current" size={16} />
                    )}
                    </div>
                    <p className="text-sm font-bold text-[#A52A2A] uppercase tracking-wider">
                      -{testimonial.author}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Dark Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#1A202C] rounded-2xl p-8 md:p-10 text-center shadow-xl">
          
          <p className="text-white font-medium md:text-lg leading-relaxed max-w-4xl mx-auto">
            JAMS provides guidance for mentors to support new teachers with{' '}
            <span className="text-[#ECC94B] font-bold">
              Personal Well-Being, Professional/Mentoring Logistics,
              Instructional Delivery, and Environment, Organization and Systems.
            </span>{' '}
            Teacher Leadership &amp; Partnerships, Collegial Relationships,
            School and School System Policies and Procedures, and Working with
            Parents &amp; Partners.
          </p>
        </motion.div>
      </div>
    </section>);

}