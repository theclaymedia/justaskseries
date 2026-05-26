import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, AlertCircleIcon } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-charcoal-600">
            Pre-order the new book today to secure the complete mentoring system
            for your district.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            
            {/* Left side: Pricing */}
            <div className="p-10 md:w-1/2 bg-gray-50 border-r border-gray-100 flex flex-col justify-center">
              {/* Changed badge from brick to teal/green */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-bold uppercase tracking-wider mb-6 self-start">
                Special Offer
              </div>

              <div className="mb-2">
                <span className="text-5xl font-bold text-navy-900">$39.95</span>
                <span className="text-charcoal-600 font-medium ml-2">
                  per book
                </span>
              </div>
              {/* Changed text from brick to green-600 */}
              <p className="text-green-600 font-bold mb-8">
                Pre-Order Price
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-charcoal-600 pb-4 border-b border-gray-200">
                  <span>Regular Price</span>
                  {/* Changed strikethrough color from brick to gray/navy */}
                  <span className="font-semibold line-through decoration-navy-900/30">
                    $49.95 per book
                  </span>
                </div>
                <div className="flex items-center gap-2 text-charcoal-700 font-medium">
                  <AlertCircleIcon size={18} className="text-mustard-500" />
                  <span>Volume discounts begin at 100 copies</span>
                </div>
              </div>
            </div>

            {/* Right side: Includes */}
            <div className="p-10 md:w-1/2 bg-white">
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                District pre-orders include:
              </h3>

              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon size={14} className="text-teal-700" />
                  </div>
                  <span className="text-charcoal-800 font-medium">
                    Workshop access
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon size={14} className="text-teal-700" />
                  </div>
                  <span className="text-charcoal-800 font-medium">
                    JAMS access through the end of summer
                  </span>
                </li>
              </ul>

              <a
                href="#contact"
                className="block w-full py-4 px-6 rounded-xl bg-[#004c2e] text-white text-center font-bold text-lg hover:bg-[#003621] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Pre-Order the Book
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
