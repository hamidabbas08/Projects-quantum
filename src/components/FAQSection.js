'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sectionImage from '@/assets/elevnth-section.jpeg'

const FAQSection = () => {
  const bulletPoints = [
    'Lead designer is qualified with BSc Civil Eng, MSc Structural Eng, CCIS qualified, working towards Chartership status and has over 15 years of experience in temporary and permanent works designs.',
    'Well verse with design softwares, American Standards, Building regulations and Health and Safety regulations',
    'Well verse with design softwares such as TEDDS 2024, CADSPILED WALL SUITE, ETDOL, Beam Analysis, Slope, WALLAP, TENDON, FIBOS ENGINEERING SAP 2000',
    'The team consists of experienced professionals with experience in various construction strategies. Key members are particularly recognized as market experts. The business partners, who have been freelancing for the past five years, formally established the company in September 2023.',
    'We have undertaken numerous multidisciplinary projects in UK.',
    'Clients such as Network Rail, National Grid, Cadent, House of Fraser, Crown Properties, and various London Boroughs and Councils. We have collaborated with major contractors including MACE, McLaren, BAM Construct, Kier, Fusion, and Axis Europe and Subcon tractors like Alandale, GFS, Mercer, and GKR.'
  ]

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 md:h-full"
            >
              <Image
                src={sectionImage}
                alt="Technical team expertise"
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>

            {/* Right - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-primary-dark p-8 rounded-xl"
            >
              {/* Bullet Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {bulletPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <span className="text-accent font-bold flex-shrink-0 mt-1">•</span>
                    <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
