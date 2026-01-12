'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sectionImage from '@/assets/twelth-section.jpg'

const TeamExpertiseSection = ({ data }) => {
  if (!data) return null

  const sectionLabel = data.sectionLabel || 'Our Team'
  const title = data.title
  const description = data.description
  const image = data.image?.src || sectionImage
  const statNumber = data.statNumber
  const statLabel = data.statLabel
  
  // Get tags from Contentful (comma-separated values split into array)
  const tags = data.tags || []
  
  // Separate stat items (items with numeric title like "4+") from regular team details
  const allServices = data.services || []
  const statItems = allServices.filter(s => /^\d+\+?$/.test(s.title))
  const teamDetails = allServices.filter(s => !/^\d+\+?$/.test(s.title)).map(s => ({ 
    title: s.title, 
    description: s.description,
    iconText: s.iconText || null,
    iconImage: s.iconImage || null
  }))

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent" />
            </div>

            {/* Floating Cards */}
            {statNumber && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="absolute -left-6 top-1/4 bg-white rounded-2xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-gray-100"
              >
                <p className="text-3xl font-bold text-accent">{statNumber}</p>
                <p className="text-sm text-gray-600">{statLabel}</p>
              </motion.div>
            )}

          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">{sectionLabel}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mt-4 mb-8">
              {title}
            </h2>

            <div className="space-y-4 mb-8">
              {teamDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 8 }}
                  className="flex gap-4 p-5 bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(10,37,64,0.12)] hover:border-accent/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center text-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)]">
                    {detail.iconImage?.src ? (
                      <Image 
                        src={detail.iconImage.src} 
                        alt={detail.title} 
                        width={28} 
                        height={28} 
                        className="object-contain"
                      />
                    ) : (
                      <span>{detail.iconText}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark mb-1">{detail.title}</h4>
                    <p className="text-gray-600 text-sm">{detail.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-600 leading-relaxed mb-8"
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TeamExpertiseSection
