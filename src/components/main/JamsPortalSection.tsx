import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon } from 'lucide-react';

export function JamsPortalSection() {
  // Extracting the video ID from the URL provided
  const videoId = "76HquX1B3hs";

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Extend your reach and impact with
          </h2>
          <h3 className="text-4xl md:text-5xl italic font-bold text-[#48BB78] mb-12 font-[Poppins,_sans-serif]">
            Just ASK
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto max-w-4xl">
          
          {/* Browser/Video Mockup */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Browser Header */}
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="mx-auto bg-white rounded-md px-16 md:px-32 py-1 text-[10px] md:text-xs text-gray-400 border border-gray-200 hidden sm:block">
                jams.justaskpublications.com
              </div>
            </div>

            {/* Actual YouTube Video Area */}
            <div className="relative aspect-video bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                title="Just ASK Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
              </iframe>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-teal-100/30 via-blue-100/30 to-yellow-100/30 blur-3xl rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12">
          
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gray-900 text-white font-semibold text-lg hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            
            Preview JAMS
          </a>
        </motion.div>
      </div>
    </section>);

}