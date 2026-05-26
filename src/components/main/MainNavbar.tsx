import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PhoneIcon } from 'lucide-react';

export function MainNavbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Image */}
          <Link to="/" className="flex items-center">
            <img
              src="https://i.imgur.com/rnTHIbj.png"
              alt="Just ASK Publications"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-medium text-charcoal-700 hover:text-[#004c2e] transition-colors"
            >
              About JAMS
            </a>
            <Link
              to="/mentor-launch-workshops"
              className="text-sm font-medium text-charcoal-700 hover:text-[#004c2e] transition-colors"
            >
              Workshops
            </Link>
            <a
              href="#resources"
              className="text-sm font-medium text-charcoal-700 hover:text-[#004c2e] transition-colors"
            >
              Resources
            </a>
            <a
              href="#leaders"
              className="text-sm font-medium text-charcoal-700 hover:text-[#004c2e] transition-colors"
            >
              Leaders
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-charcoal-700 hover:text-[#004c2e] transition-colors"
            >
              Contact
            </a>

            {/* Phone Button Updated to #004c2e */}
            <a
              href="tel:703-535-5434"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#004c2e] text-white font-medium text-sm hover:bg-[#004c2e] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <PhoneIcon size={16} fill="currentColor" />
              Call Us: 703-535-5434
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
