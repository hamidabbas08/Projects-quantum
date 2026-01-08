'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sectionImage from '@/assets/seventh-section.png'

const ProcessSection = () => {
  const temporaryWorks = [
    { name: 'Hoardings', icon: '🚧' },
    { name: 'Sheet Piling', icon: '🏗️' },
    { name: 'Working Platforms', icon: '⬛' },
    { name: 'Cofferdam', icon: '🌊' },
    { name: 'Haul Roads', icon: '🛤️' },
    { name: 'Fencing', icon: '🔒' },
    { name: 'Thrust Block Designs', icon: '🧱' },
    { name: 'Retaining Walls', icon: '🧱' },
    { name: 'Slope Stability', icon: '⛰️' },
    { name: 'Formwork', icon: '📦' },
    { name: 'Propping/Needling', icon: '🔩' },
    { name: 'UG Services Check', icon: '🔍' },
    { name: 'Service Protection Slabs', icon: '🛡️' },
  ]

  return (
    <section className="py-24 bg-primary-dark relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-white/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-white/5 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Temporary Works Designs
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Comprehensive temporary works solutions for all your construction needs
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {temporaryWorks.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{work.icon}</span>
                <span className="text-white font-medium group-hover:text-accent transition-colors">
                  {work.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[50vh] rounded-3xl overflow-hidden"
        >
          <Image
            src={sectionImage}
            alt="Temporary Works"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent" />
          
          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-white mb-3">Expert Engineering Solutions</h3>
              <p className="text-gray-300">
                Our team of experienced engineers delivers safe, efficient, and cost-effective temporary works designs for projects of all scales.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection
