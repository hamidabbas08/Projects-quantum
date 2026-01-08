'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sectionImage from '@/assets/eight-section.png'

const ProjectsSection = () => {
  const designItems = [
    { title: 'Design drawings', icon: '📐' },
    { title: 'Design Calculations', icon: '🔢' },
    { title: "Designer's Risk Assessment (DRA)", icon: '⚠️' },
    { title: 'Design Check Certificates (DCC)', icon: '✅' },
    { title: 'CAT 3 and CAT 3 – Check Categories', icon: '📋' },
    { title: 'Network rail forms (if reqd.)', icon: '🚂' },
    { title: 'Site visits – if required (Inside M25 £300/half day)', icon: '🏗️' },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-dark/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={sectionImage}
                alt="Design Submission Package"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 bg-accent text-white rounded-2xl p-6 shadow-xl"
            >
              <p className="text-4xl font-bold">7+</p>
              <p className="text-sm opacity-90">Comprehensive Deliverables</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">What's Included</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mt-4 mb-6">
              Design Submission Package
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Our comprehensive design submission package includes everything you need for successful project approval and execution.
            </p>

            <div className="space-y-4">
              {designItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(10,37,64,0.15)] hover:bg-primary-dark hover:border-primary-dark transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center text-2xl shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(255,255,255,0.8)] group-hover:bg-gradient-to-br group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-primary-dark group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
