import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon } from 'lucide-react';

export function WorkshopContactSection() {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>

          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
            Questions?
          </h2>
          <p className="text-lg text-charcoal-600 mb-8">
            For specific questions, please reach out and we'll be glad to help.
          </p>
          <a
            href="mailto:info@justaskpublications.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#004c2e] text-white font-semibold text-lg hover:bg-[#003621] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            <MailIcon size={20} />
            info@justaskpublications.com
          </a>
        </motion.div>
      </div>
    </section>);

}
