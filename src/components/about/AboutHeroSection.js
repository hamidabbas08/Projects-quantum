'use client'

import { motion } from 'framer-motion'
import Image from 'next/image' 

const AboutHeroSection = ({ data }) => {
  if (!data) return null

  const badge = data.badge
  const titleLine1 = data.titleLine1
  const titleLine2 = data.titleLine2
  const subtitle = data.subtitle
  const backgroundImage = data.backgroundImage?.src

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={titleLine1}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-primary-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6"
          >
            {badge}
          </motion.span>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {titleLine1}
            <span className="block text-accent">{titleLine2}</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-xl">
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}

export default AboutHeroSection
