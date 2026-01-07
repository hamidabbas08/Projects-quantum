'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sectionImage from '@/assets/fourth-section.png'

const CoreServicesSection = () => {
  const services = [
    'Design and Engineering of Temporary Works',
    'Project Controls & Commercial Management',
    'Training and professional Construction Coaching Service',
  ]

  return (
    <section className="relative overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[80vh]">
        {/* Left - Image Collage */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-md:order-2 relative min-h-[400px] md:min-h-full"
        >
          <Image
            src={sectionImage}
            alt="Construction and Engineering Services"
            fill
            className="object-cover"
          />
          {/* Diagonal overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary-dark/50" />
        </motion.div>

        {/* Right - Content */}
        <div className="max-md:order-1 bg-primary-dark py-16 px-8 md:px-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Services we offer */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-20 bg-accent"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Services we offer
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 ml-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="text-accent text-lg">•</span>
                  <span className="text-gray-200 text-lg">{service}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CoreServicesSection
