'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sectionImage from '@/assets/thirteen-section.png'

const CTASection = () => {
  const reasons = [
    'Specialized skills and expertise under one roof.',
    'Less overhead to the company- cost-effective.',
    'Can pay daily rates/ wages.',
    'No pension.',
    'No other HR and Admin costs.',
    'Contract basis/ Project basis - project-based work.',
    'No office space/ electricity/ internet/ mobile.',
    'Last but not the least that "Where your ideas become reality"'
  ]

  return (
    <section className="relative overflow-hidden min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${sectionImage.src})` }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Heading with Border */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-2 h-24 bg-accent flex-shrink-0"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Why should customers choose us?
                </h2>
              </div>

              {/* Reasons List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <span className="text-accent font-bold flex-shrink-0 mt-1">•</span>
                    <p className="text-gray-200 text-sm leading-relaxed">{reason}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Empty */}
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
