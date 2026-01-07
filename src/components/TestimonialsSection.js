'use client'

import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'Project Director, BuildCorp',
      content: 'Projects Quantum exceeded our expectations with their professional approach and attention to detail.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Site Manager, Construction Ltd',
      content: 'Outstanding service and expertise. They saved us time and money on our major infrastructure project.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Developer, Urban Solutions',
      content: 'Their quantity surveying team provided invaluable guidance throughout our commercial development.',
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Client <span className="text-accent">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            What our clients say about working with us
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-accent" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-primary-dark">{testimonial.name}</p>
                <p className="text-sm text-accent">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
