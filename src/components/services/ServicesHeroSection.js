'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sectionImage from '@/assets/fifth-section.png'

const ServicesHeroSection = () => {
  const scaffoldingTypes = [
    {
      title: 'Traditional T&F Scaffolding',
      badge: 'T&F',
      description: "This type of scaffolding uses tubes and fittings (T&F) to create a temporary structure for supporting work platforms and materials during construction. It's versatile and can be adapted to various shapes and heights."
    },
    {
      title: 'Systems Scaffolding',
      badge: 'SYS',
      description: 'This modular scaffolding system uses pre-engineered components that are easy to assemble and dismantle. Common types include Ringlock, Cuplock, and Haki, which offer flexibility and efficiency for different construction projects.'
    }
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={sectionImage}
          alt="Scaffolding Design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-primary-dark/70" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
            Our Services
          </motion.span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Scaffolding Design
            <span className="block text-accent">Services</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {scaffoldingTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-accent/50 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(212,165,116,0.2)] relative overflow-hidden cursor-pointer group"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors duration-500" />
                <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-accent/10 group-hover:from-accent group-hover:to-accent/80 rounded-xl flex items-center justify-center mb-4 shadow-[0_4px_15px_rgba(212,165,116,0.3)] group-hover:shadow-[0_8px_25px_rgba(212,165,116,0.5)] transition-all duration-300 relative z-10">
                  <span className="text-accent group-hover:text-white text-xl font-bold transition-colors duration-300">{type.badge}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{type.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed relative z-10">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}

export default ServicesHeroSection
