'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const StatsSection = () => {
  const stats = [
    { number: '20+', label: 'Years Experience', color: 'from-blue-500 to-blue-600' },
    { number: '500+', label: 'Projects Completed', color: 'from-green-500 to-green-600' },
    { number: '150+', label: 'Happy Clients', color: 'from-purple-500 to-purple-600' },
    { number: '50+', label: 'Expert Team Members', color: 'from-orange-500 to-orange-600' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/engineer-silhouette.jpg"
          alt="Engineer Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/90" />
      </div>

      {/* Background animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-accent rounded-full opacity-5 z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-accent">Track Record</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Proven success in delivering exceptional construction and surveying solutions
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${stat.color} p-8 rounded-xl shadow-xl text-center hover:shadow-2xl transition-all duration-300`}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-lg font-semibold text-gray-100">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection
