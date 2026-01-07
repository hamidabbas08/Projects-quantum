'use client'

import { motion } from 'framer-motion'
import sectionImage from '@/assets/fifth-section.png'

const ScaffoldingDesignSection = () => {
  return (
    <section 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${sectionImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary-dark/80 z-0" />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Scaffolding Design Services */}
            <div className="flex items-start gap-4 mb-8 max-w-2xl">
              <div className="w-2 h-20 bg-accent flex-shrink-0"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Scaffolding design services including
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6 ml-6 max-w-2xl"
            >
              {/* Traditional T&F Scaffolding */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  • Traditional T&F Scaffolding:
                </h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  This type of scaffolding uses tubes and fittings (T&F) to create a temporary structure for supporting work platforms and materials during construction. It's versatile and can be adapted to various shapes and heights.
                </p>
              </div>

              {/* Systems Scaffolding */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  • Systems Scaffolding:
                </h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  This modular scaffolding system uses pre-engineered components that are easy to assemble and dismantle. Common types include Ringlock, Cuplock, and Haki, which offer flexibility and efficiency for different construction projects.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ScaffoldingDesignSection
