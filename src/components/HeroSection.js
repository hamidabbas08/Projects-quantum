'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen relative flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Construction"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary-light/80" />
      </div>

      {/* Background animation */}
      <div className="absolute inset-0 opacity-10 z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 grid md:grid-cols-2 gap-8 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Building Excellence in Construction
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-200 mb-8"
          >
            Expert quantity surveying, civil engineering, and construction management services for your ambitious projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-3 bg-accent text-primary-dark font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Get Quote
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-primary-dark transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Right side - floating image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-96 md:h-[500px] hidden md:block"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/modern-architecture.jpg"
              alt="Modern Architecture"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary-dark/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
