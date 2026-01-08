'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sectionImage from '@/assets/fourth-section.png'

const DesignIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
  </svg>
)

const ProjectIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const TrainingIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const CoreServicesSection = () => {
  const coreServices = [
    {
      title: 'Design and Engineering of Temporary Works',
      Icon: DesignIcon,
      description: 'Expert scaffolding and temporary works design solutions'
    },
    {
      title: 'Project Controls & Commercial Management',
      Icon: ProjectIcon,
      description: 'Complete project oversight and commercial expertise'
    },
    {
      title: 'Training and professional Construction Coaching Service',
      Icon: TrainingIcon,
      description: 'Industry-leading training and development programs'
    },
  ]

  return (
    <section className="py-24 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src={sectionImage}
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Core Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Services We Offer
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-accent/60 transition-all duration-500 h-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(212,165,116,0.2)] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-500" />
                <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent/80 group-hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(212,165,116,0.3)] group-hover:shadow-[0_8px_30px_rgba(212,165,116,0.5)] relative z-10">
                  <service.Icon />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-300 relative z-10">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreServicesSection
