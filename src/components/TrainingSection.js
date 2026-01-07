'use client'

import { motion } from 'framer-motion'
import sectionImage from '@/assets/sixth-section.png'

const ScaffoldingTypesSection = () => {
  const scaffoldTypes = [
    'Independent access scaffold with loading base, NIKO<br/> tracks, hoist-run offs and protection fans.',
    'Free-standing scaffoldings',
    'Pavement and Gantry',
    'Cantilevered Access',
    'Edge protections',
    'Riser Shaft',
    'Birdcages',
    'Back propping',
    'Ladder access towers',
    'Ramps',
    'Lifting frames',
    'Adaptions',
    'Temporary Roof',
  ]

  return (
    <section 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${sectionImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 max-lg:bg-primary-dark/70 z-0" />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Types of Scaffold Designs */}
            <div className="flex items-start gap-4 mb-8 max-w-3xl">
              <div className="w-2 h-20 bg-accent flex-shrink-0"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Types of Scaffold designs
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-3 ml-6 max-w-3xl"
            >
              {scaffoldTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="text-accent font-semibold min-w-fit">{index + 1}.</span>
                  <span 
                    className="text-gray-200 text-base"
                    dangerouslySetInnerHTML={{ __html: type }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ScaffoldingTypesSection
