'use client'

import { motion } from 'framer-motion'

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We meet with you to understand your project requirements and goals',
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Our team develops a comprehensive project plan and strategy',
    },
    {
      number: '03',
      title: 'Execution',
      description: 'We execute the project with precision and attention to detail',
    },
    {
      number: '04',
      title: 'Completion',
      description: 'Final delivery with full documentation and client handover',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Our <span className="text-accent">Process</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A structured approach to ensure project success
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center mb-6"
                >
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-primary-dark font-bold text-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10 bg-gradient-to-br from-accent to-yellow-400">
                    {step.number}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <h3 className="text-xl font-bold text-primary-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
