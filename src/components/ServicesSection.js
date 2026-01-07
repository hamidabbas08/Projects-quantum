'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaRuler, FaCog, FaShieldAlt, FaChartLine } from 'react-icons/fa'

const ServicesSection = () => {
  const services = [
    {
      icon: <FaRuler className="text-3xl" />,
      title: 'Quantity Surveying',
      description: 'Cost management, budgeting, and financial control for your projects',
      image: '/images/cost-management.jpg',
    },
    {
      icon: <FaCog className="text-3xl" />,
      title: 'Civil Engineering',
      description: 'Design, planning, and execution of infrastructure projects',
      image: '/images/civil-works.jpg',
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Temporary Works',
      description: 'Scaffolding design, formwork, and temporary structures',
      image: '/images/formwork-collage.jpg',
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'Project Management',
      description: 'End-to-end project management and coordination services',
      image: '/images/team.jpg',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive solutions for all your construction and engineering needs
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-dark/40 group-hover:bg-primary-dark/20 transition-all duration-300" />
              </div>
              <div className="p-6">
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
