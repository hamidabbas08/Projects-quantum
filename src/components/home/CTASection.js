'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import sectionImage from '@/assets/thirteen-section.png'

const CTASection = () => {
  const reasons = [
    { text: 'Specialized skills and expertise under one roof', icon: '🎯' },
    { text: 'Less overhead to the company - cost-effective', icon: '💰' },
    { text: 'Flexible payment options - daily rates/wages', icon: '📊' },
    { text: 'No pension or additional HR/Admin costs', icon: '✅' },
    { text: 'Contract basis / Project basis - project-based work', icon: '📋' },
    { text: 'No office space/electricity/internet/mobile costs', icon: '🏠' },
    { text: '"Where your ideas become reality"', icon: '✨' }
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={sectionImage}
          alt="Why Choose Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-primary-dark/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Benefits</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8">
              Why Choose <span className="text-accent">Us?</span>
            </h2>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 8 }}
                  className="group flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:bg-white/15 hover:border-accent/40 hover:shadow-[0_8px_32px_rgba(212,165,116,0.2)] transition-all duration-300 cursor-pointer"
                >
                  <span className="text-2xl">{reason.icon}</span>
                  <p className="text-gray-200 group-hover:text-white transition-colors">
                    {reason.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-10 shadow-[0_25px_60px_rgba(0,0,0,0.25)] border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary-light to-accent" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-6 shadow-[0_4px_12px_rgba(212,165,116,0.2),inset_0_2px_4px_rgba(255,255,255,0.9)] relative z-10">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-primary-dark mb-4 relative z-10">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 mb-8">
                Let's discuss how our expertise can help bring your construction vision to life. Our team is ready to assist you.
              </p>

              <Link href="/contact-us">
                <button className="w-full py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
                  Contact Us Today
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 bg-gradient-to-br from-accent to-primary-light rounded-full border-2 border-white" />
                    ))}
                  </div>
                  <div>
                    <p className="text-primary-dark font-semibold">Join 200+ Clients</p>
                    <p className="text-gray-500 text-sm">Who trust us with their projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
