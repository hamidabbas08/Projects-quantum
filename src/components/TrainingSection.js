'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TrainingSection = () => {
  const trainings = [
    {
      title: 'CIOB Professional Review',
      description: 'Preparation and guidance for CIOB professional review process',
    },
    {
      title: 'RICS Training',
      description: 'Comprehensive RICS qualification and training programs',
    },
    {
      title: 'Construction Safety',
      description: 'CSCS and safety certifications for construction professionals',
    },
    {
      title: 'Advanced Surveying',
      description: 'Specialist training in quantity surveying techniques',
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/training-icons.jpg"
          alt="Training Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Training &amp; <span className="text-accent">Development</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Professional training and certification programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainings.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-yellow-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-primary-dark to-primary-light p-8 rounded-xl text-white h-full flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
                <div>
                  <h3 className="text-lg font-bold mb-3">{training.title}</h3>
                  <p className="text-gray-200 text-sm">{training.description}</p>
                </div>
                <button className="mt-4 px-4 py-2 bg-accent text-primary-dark font-bold rounded-lg text-sm hover:bg-opacity-90 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrainingSection
