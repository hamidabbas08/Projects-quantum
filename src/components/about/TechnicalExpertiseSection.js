'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sectionImage from '@/assets/elevnth-section.jpeg'

const TechnicalExpertiseSection = () => {
  const expertise = [
    {
      category: 'Lead Designer',
      items: [
        'BSc Civil Eng, MSc Structural Eng, CCIS qualified',
        'Working towards Chartership status',
        'Over 15 years of experience in temporary and permanent works designs'
      ]
    },
    {
      category: 'Design Standards',
      items: [
        'American Standards, Building regulations and Health and Safety regulations',
        'Well verse with design softwares'
      ]
    },
    {
      category: 'Software Expertise',
      items: [
        'TEDDS 2024, CADSPILED WALL SUITE, ETDOL',
        'Beam Analysis, Slope, WALLAP, TENDON',
        'FIBOS ENGINEERING SAP 2000'
      ]
    }
  ]

  const clients = [
    'Network Rail', 'National Grid', 'Cadent', 'House of Fraser',
    'Crown Properties', 'London Boroughs and Councils'
  ]

  const contractors = [
    'MACE', 'McLaren', 'BAM Construct', 'Kier', 'Fusion', 'Axis Europe'
  ]

  const subcontractors = ['Alandale', 'GFS', 'Mercer', 'GKR']

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Technical Excellence</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mt-4">
            Our Technical Expertise
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Expertise Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {expertise.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-200 hover:shadow-[0_20px_50px_rgba(10,37,64,0.12)] hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-accent/30 rounded-l-2xl" />
                <h3 className="text-lg font-bold text-primary-dark mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-br from-accent/20 to-accent/5 text-accent rounded-lg flex items-center justify-center text-sm font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)]">
                    {index + 1}
                  </span>
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Company History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary-dark rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-3">Our Journey</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The team consists of experienced professionals with experience in various construction strategies. Key members are particularly recognized as market experts. The business partners, who have been freelancing for the past five years, formally established the company in September 2023.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Image & Clients */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Image */}
            <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={sectionImage}
                alt="Technical Expertise"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-medium">Numerous multidisciplinary projects across the UK</p>
              </div>
            </div>

            {/* Clients */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-200 hover:shadow-[0_15px_40px_rgba(10,37,64,0.1)] transition-all duration-300">
              <h3 className="text-lg font-bold text-primary-dark mb-4">Our Clients</h3>
              <div className="flex flex-wrap gap-2">
                {clients.map((client, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent/5 hover:text-accent hover:border-accent/20 hover:shadow-[0_4px_12px_rgba(212,165,116,0.15)] transition-all duration-300 cursor-pointer"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* Contractors */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-200 hover:shadow-[0_15px_40px_rgba(10,37,64,0.1)] transition-all duration-300">
              <h3 className="text-lg font-bold text-primary-dark mb-4">Major Contractors</h3>
              <div className="flex flex-wrap gap-2">
                {contractors.map((contractor, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-accent/15 to-accent/5 text-accent rounded-lg text-sm font-medium border border-accent/20 shadow-[0_2px_8px_rgba(212,165,116,0.1)] hover:shadow-[0_4px_16px_rgba(212,165,116,0.25)] transition-all duration-300 cursor-pointer"
                  >
                    {contractor}
                  </span>
                ))}
              </div>
            </div>

            {/* Subcontractors */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-200 hover:shadow-[0_15px_40px_rgba(10,37,64,0.1)] transition-all duration-300">
              <h3 className="text-lg font-bold text-primary-dark mb-4">Subcontractors</h3>
              <div className="flex flex-wrap gap-2">
                {subcontractors.map((sub, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-primary-dark/15 to-primary-dark/5 text-primary-dark rounded-lg text-sm border border-primary-dark/10 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(10,37,64,0.15)] transition-all duration-300 cursor-pointer"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalExpertiseSection
