'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TrainingSection = ({ data }) => {
  if (!data) return null

  const sectionLabel = data.sectionLabel
  const title = data.title
  const description = data.description
  const image = data.image?.src
  const scaffoldingType = data.scaffoldingTypes?.[0] || null
  
  // Map services from Contentful
  const trainingServices = data.services?.map(s => ({ 
    title: s.title, 
    description: s.description,
    iconText: s.iconText || null,
    iconImage: s.iconImage || null,
  })) || []

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">{sectionLabel}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mt-4">
            {title}
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/30 to-transparent" />
            
            {/* Overlay Content */}
            {scaffoldingType && (
              <div className="absolute top-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                >
                  <h3 className="text-xl max-sm:text-base font-bold text-white mb-2">{scaffoldingType.title}</h3>
                  <p className="text-gray-200 text-sm">
                    {scaffoldingType.description}
                  </p>
                </motion.div>
              </div>
            )}
          </motion.div>

          {/* Right - Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {trainingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -8 }}
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                className="group bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_rgba(10,37,64,0.2)] border border-gray-200 hover:border-accent/40 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-[0_4px_12px_rgba(212,165,116,0.15),inset_0_2px_4px_rgba(255,255,255,0.8)] group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent/80 group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(212,165,116,0.4)] transition-all duration-300 overflow-hidden">
                  <span className="group-hover:scale-125 transition-transform">
                    {service.iconImage ? (
                      <Image
                        src={service.iconImage.src}
                        alt={service.iconImage.alt || service.title}
                        width={42}
                        height={42}
                        className="object-contain"
                      />
                    ) : (
                      service.iconText || '📋'
                    )}
                  </span>
                </div>
                <h3 className="text-lg max-sm:text-base font-bold text-primary-dark mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrainingSection
