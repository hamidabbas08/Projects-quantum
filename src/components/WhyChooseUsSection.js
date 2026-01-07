'use client'

import { motion } from 'framer-motion'

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: '🏆',
      title: 'Proven Track Record',
      description: '20+ years of experience with 500+ completed projects',
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: 'CIOB & RICS certified professionals with deep expertise',
    },
    {
      icon: '💡',
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology and modern construction methods',
    },
    {
      icon: '📊',
      title: 'Cost Effective',
      description: 'Maximize value and minimize unnecessary expenses',
    },
    {
      icon: '⏱️',
      title: 'On-Time Delivery',
      description: 'Reliable project management and timely completion',
    },
    {
      icon: '🤝',
      title: 'Client Focused',
      description: 'Your success is our priority - transparent communication',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary-dark to-primary-light text-white relative overflow-hidden">
      {/* Background animation */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent rounded-full opacity-5"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-accent">Projects Quantum</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            Delivering excellence in every project we undertake
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            >
              <p className="text-5xl mb-4">{reason.icon}</p>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-200">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
