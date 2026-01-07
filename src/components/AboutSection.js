'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
    >
      {/* Blueprint Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/blueprint-bg.jpg"
          alt="Blueprint Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            About <span className="text-accent">Projects Quantum</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Delivering innovative construction solutions for over 20 years
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/team.jpg"
              alt="Our Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-primary-dark mb-6">
              Why Choose Us?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Projects Quantum is a leading provider of quantity surveying, civil engineering, and construction management services. With a team of highly qualified professionals, we deliver exceptional results on every project.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {['Expert Team with 20+ Years Experience', 'CIOB & RICS Certified Professionals', 'Innovative Solutions & Technology', 'Client-Focused Approach'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
