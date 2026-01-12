'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ContactInfoSection = ({ data }) => {
  // Default icons for different types
  const icons = {
    location: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    phone: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    email: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }

  if (!data || data.length === 0) return null

  const contactInfo = data.map(item => ({
    iconType: item.iconType || 'location',
    iconText: item.iconText || null,
    iconImage: item.iconImage || null,
    title: item.title,
    details: item.details || []
  }))

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl p-8 text-center transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(10,37,64,0.15)] border border-gray-100 hover:border-accent/40 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 group-hover:from-accent group-hover:to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent group-hover:text-white transition-all duration-300 shadow-[0_4px_15px_rgba(212,165,116,0.2)] group-hover:shadow-[0_8px_25px_rgba(212,165,116,0.4)] relative z-10">
                {info.iconImage?.src ? (
                  <Image
                    src={info.iconImage.src}
                    alt={info.title}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                ) : info.iconText ? (
                  <span className="text-2xl">{info.iconText}</span>
                ) : (
                  icons[info.iconType] || icons.location
                )}
              </div>
              <h3 className="text-xl font-bold text-primary-dark group-hover:text-white mb-4 transition-colors duration-300 relative z-10">
                {info.title}
              </h3>
              <div className="space-y-1 relative z-10">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactInfoSection
