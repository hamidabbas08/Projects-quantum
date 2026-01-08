'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sectionImage from '@/assets/third-section.png'

const AimsObjectivesSection = () => {
  const objectives = [
    'Provide exceptional construction consultancy services that exceed client expectations, ensuring high standards in value engineering, project management, cost estimation, and training.',
    'Facilitate a collaborative approach between designers, engineers, quantity surveyors and cost planners to foster innovation, creativity, and cost efficiency throughout the project lifecycle.'
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Purpose</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mt-4 mb-8">
              Aims & Objectives
            </h2>
            
            <div className="space-y-6">
              {objectives.map((objective, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                  className="flex gap-4 bg-white rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(10,37,64,0.12)] border border-gray-100 hover:border-accent/40 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-1.5 bg-gradient-to-b from-accent to-accent/50 rounded-full flex-shrink-0 group-hover:from-accent group-hover:to-primary-light transition-colors duration-300" />
                  <p className="text-gray-600 leading-relaxed group-hover:text-primary-dark transition-colors duration-300">
                    {objective}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="mt-12 bg-gradient-to-r from-primary-dark to-primary-light rounded-2xl p-8 shadow-[0_15px_50px_rgba(10,37,64,0.3)] hover:shadow-[0_25px_60px_rgba(10,37,64,0.4)] transition-all duration-300 relative overflow-hidden border border-white/10"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Our Motto</h3>
              <p className="text-gray-200 italic leading-relaxed relative z-10">
                "At the heart of everything we do is the belief that every great project begins with a vision. 'Where Your Ideas Become Reality' isn't just a slogan – it's the driving force behind our approach to every client and every challenge."
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={sectionImage}
                alt="Construction Site"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-white text-4xl font-bold">15+</span>
            </div>
            <p className="absolute -bottom-4 left-28 text-primary-dark font-medium">Years Experience</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AimsObjectivesSection
