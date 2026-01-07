'use client'

import { motion } from 'framer-motion'

const CTASection = () => {
  return (
    <section className="py-20 bg-accent text-primary-dark relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 right-0 w-96 h-96 bg-primary-dark rounded-full opacity-5"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>

          <p className="text-lg text-primary-dark text-opacity-80 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Get in touch with our team today for a free consultation.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-dark text-accent font-bold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </motion.a>
            <motion.a
              href="tel:+447440125077"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white bg-opacity-20 text-primary-dark font-bold rounded-lg hover:bg-opacity-30 transition-all duration-300"
            >
              Call Us Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
