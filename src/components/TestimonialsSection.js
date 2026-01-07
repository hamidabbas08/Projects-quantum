'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sectionImage from '@/assets/tenth-section.png'

const TestimonialsSection = () => {
  const trainingServices = [
    'CIOB/RICS Professional Review: PQL helps assess candidates\' qualifications, experience, and competencies to become chartered members of the Chartered Institute of Building (CIOB) or the Royal Institution of Chartered Surveyors (RICS).',
    'FIDIC, NEC, and JCT Courses: These courses focus on the international (FIDIC), UK-based NEC, and JCT contract standards, enhancing professionals\' understanding of contract administration, dispute resolution, and project management best practices.',
    'Training for PMP Preparation/ASTA/Primavera: These training sessions cover essential project management principles for the PMP exam and advanced scheduling software like ASTA Powerproject and Primavera P6, vital for managing complex project timelines.',
    'CIOB & RICS Coaching: Tailored coaching helps candidates prepare for CIOB and RICS membership assessments, focusing on industry standards, ethics, and competencies required for success in professional reviews.'
  ]

  return (
    <section className="relative overflow-hidden min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${sectionImage.src})` }}>
      {/* Dark Overlay */}
      <div className="max-md:block hidden absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
                <h2 className="max-w-3xl text-4xl md:text-5xl font-bold text-white leading-tight">
                  Training and professional construction coaching Service
                </h2>
              </div>

              {/* Description Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6 text-gray-200 leading-relaxed mb-8"
              >
                {trainingServices.map((service, index) => (
                  <div key={index} className={index === 2 || index === 3 ? 'max-w-[360px]' : 'max-w-xl'}>
                    <p className="text-sm">{service}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
