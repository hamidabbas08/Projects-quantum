'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sectionImage from '@/assets/second-section.png'

const AboutSection = () => {
  const contentItems = [
    { text: 'Aims and Objective', highlight: 'Aims' },
    { text: 'Motto', highlight: 'Mot' },
    { text: 'Services we offer', highlight: 'Serv' },
    { text: 'Commercial team expertise?', highlight: 'Com', isGold: true },
    { text: 'Why should customers choose us?', highlight: 'Why' },
  ]

  return (
    <section
      id="about"
      className="h-[70vh] lg:h-screen py-32 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={sectionImage}
          alt="Architectural Blueprint Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-12 bg-accent"></div>
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Contents
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 ml-6"
            >
              {contentItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <span className={`text-lg font-normal ${item.isGold ? 'text-accent' : 'text-gray-200'}`}>
                    • <span className={`font-semibold ${item.isGold ? 'text-accent' : 'text-white'}`}>{item.highlight}</span>
                    {item.text.replace(item.highlight, '')}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
