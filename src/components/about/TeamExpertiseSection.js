'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sectionImage from '@/assets/twelth-section.jpg'

const TeamExpertiseSection = () => {
  const teamDetails = [
    {
      title: 'Professional Qualifications',
      description: 'Chartered Surveyors (MRICS/MCIOB) or BSc QS qualified team.',
      icon: '🎓'
    },
    {
      title: 'Industry Standards',
      description: 'Expertise in Revit ISI, AASHTO, SLS, ICP/D- EC, ICE, NHC, IDMM, SMM7 & CESSM4.',
      icon: '📋'
    },
    {
      title: 'Software Proficiency',
      description: 'Revit Architecture (BIM) & Auto CAD, ASTA, Primavera P6 & MS Project, CAN9 Estimation Software (CCS), SAGE ACC Pac, SPSS & Oracle.',
      icon: '💻'
    }
  ]

  const teamDescription = `The team comprises Chartered professionals with extensive experience in the UK, Middle East, Southeast Asia, and South Asia across sectors such as infrastructure, commercial, residential, and oil & gas. Their areas of expertise include quantity surveying, commercial management, and sub-contracts. They are highly skilled in project controls, procurement, facility management, tender management, and pre-construction. The team is also proficient in contract and cost management, project estimation, building, construction management, and value engineering.`

  const regions = ['UK', 'Middle East', 'Southeast Asia', 'South Asia']
  const sectors = ['Infrastructure', 'Commercial', 'Residential', 'Oil & Gas']

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark/5 rounded-full blur-3xl" />

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
                alt="Commercial Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent" />
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="absolute -left-6 top-1/4 bg-white rounded-2xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-gray-100"
            >
              <p className="text-3xl font-bold text-accent">15+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="absolute -right-6 bottom-1/4 bg-primary-dark rounded-2xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-white/10"
            >
              <p className="text-3xl font-bold text-accent">4+</p>
              <p className="text-sm text-gray-300">Regions Served</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mt-4 mb-8">
              Commercial Team Expertise
            </h2>

            <div className="space-y-4 mb-8">
              {teamDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 8 }}
                  className="flex gap-4 p-5 bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(10,37,64,0.12)] hover:border-accent/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center text-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)]">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark mb-1">{detail.title}</h4>
                    <p className="text-gray-600 text-sm">{detail.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-600 leading-relaxed mb-8"
            >
              {teamDescription}
            </motion.p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {[...regions, ...sectors].map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-accent/15 to-accent/5 text-accent rounded-full text-sm font-medium border border-accent/20 shadow-[0_2px_8px_rgba(212,165,116,0.15)] hover:shadow-[0_4px_16px_rgba(212,165,116,0.3)] cursor-pointer transition-all duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TeamExpertiseSection
