'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const AboutCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-dark via-primary-light to-primary-dark relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Our Expert Team?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our experienced professionals can help deliver your next construction project successfully.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact-us">
              <motion.button 
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(212,165,116,0.4)] hover:shadow-[0_15px_40px_rgba(212,165,116,0.5)]"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button 
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold border border-white/30 hover:border-white/50 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] backdrop-blur-sm"
              >
                View Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutCTASection
