import React from 'react';
export function Footer() {
  return (
    <footer className="bg-charcoal-900 py-12 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://i.imgur.com/vOLALGc.png"
              alt="Just ASK Publications"
              className="h-14 md:h-16 w-auto object-contain" />
            
          </div>

          {/* Copyright */}
          <div className="text-sm text-center md:text-right text-[#FFFFFF]">
            &copy; {new Date().getFullYear()} Just ASK Publications. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>);

}