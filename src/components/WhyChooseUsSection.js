'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import sectionImage from '@/assets/twelth-section.jpg'

const WhyChooseUsSection = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])

  const teamDetails = [
    'Chartered Surveyors (MRICS/ MCIOB) or BSc QS qualified team.',
    'Expertise in Revit ISI, AASHTO, SLS, ICP/D- EC, ICE, NHC, IDMM, SMM7 & CESSM4.',
    'Revit Architecture (BIM) & Auto CAD, ASTA, Primavera P6 & MS Project, CAN9 Estimation Software (CCS), SAGE ACC Pac, SPSS & Oracle.'
  ]

  const teamDescription = `The team comprises Chartered professionals with extensive experience in the UK, Middle East, Southeast Asia, and South Asia across sectors such as infrastructure, commercial, residential, and oil & gas. Their areas of expertise include quantity surveying, commercial management, and sub-contracts. They are highly skilled in project controls, procurement, facility management, tender management, and pre-construction. The team is also proficient in contract and cost management, project estimation, building, construction management, and value engineering.`

  return (
    <section ref={sectionRef} className="relative overflow-hidden min-h-screen">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-[120%]"
        style={{ y }}
      >
        <Image
          src={sectionImage}
          alt="Commercial team expertise"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Heading with Border */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-2 h-24 bg-accent flex-shrink-0"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Commercial team expertise?
                </h2>
              </div>

              {/* Team Details List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4 mb-6"
              >
                {teamDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <span className="text-accent font-bold flex-shrink-0 mt-1">•</span>
                    <p className="text-gray-200 text-sm leading-relaxed">{detail}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Description Paragraph */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-200 text-sm leading-relaxed">{teamDescription}</p>
              </motion.div>
            </motion.div>

            {/* Right - Empty */}
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
