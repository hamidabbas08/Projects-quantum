'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sectionImage from '@/assets/eight-section.png'

const ProjectsSection = () => {
  const designItems = [
    'Design drawings',
    'Design Calculations',
    "Designer's Risk Assessment (DRA)",
    'Design Check Certificates (DCC)',
    'CAT 3 and CAT 3 – Check Categories.',
    'Network rail forms (if reqd.)',
    'Site visits – if required (Inside M25 £300/half day',
  ]

  return (
    <section id="projects" className="relative overflow-hidden min-h-screen">
      {/* Background with Diagonal Split */}
      <div className="absolute inset-0 flex">
        {/* Left Dark Section */}
        <div className="w-1/2 bg-[#2c3e50] relative">
          <div 
            className="absolute right-0 top-0 bottom-0 w-64 bg-primary-dark"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 0 100%)',
              transform: 'translateX(100%)'
            }}
          />
        </div>
        
        {/* Right Image Section */}
        <div className="w-1/2 relative">
          <Image
            src={sectionImage}
            alt="Design Submission Engineering"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Heading with Border */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-2 h-24 bg-accent flex-shrink-0"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Design Submission Package Includes:
                </h2>
              </div>

              {/* List Items */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-3 ml-6"
              >
                {designItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-accent font-semibold min-w-fit">{index + 1}.</span>
                    <span className="text-gray-200 text-base">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Empty space for image background */}
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
