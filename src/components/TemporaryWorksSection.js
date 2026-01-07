'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TemporaryWorksSection = () => {
  const services = [
    {
      title: 'Scaffolding Design',
      description: 'Custom scaffolding solutions for any project requirement',
    },
    {
      title: 'Formwork Systems',
      description: 'Advanced formwork design and installation services',
    },
    {
      title: 'Safety Planning',
      description: 'Comprehensive safety measures and compliance',
    },
    {
      title: 'Site Management',
      description: 'Complete temporary works management on-site',
    },
  ]

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Temporary <span className="text-accent">Works</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Expert scaffolding and formwork solutions for safe construction
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/formwork-collage.jpg"
              alt="Formwork Systems"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/worker-scaffolding.jpg"
              alt="Scaffolding Work"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TemporaryWorksSection
