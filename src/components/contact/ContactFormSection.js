'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const icons = {
  clock: (
    <svg className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  team: (
    <svg className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

const ContactFormSection = ({ data }) => {
  if (!data) return null

  const displayData = data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject || 'New Contact Form Submission',
          message: formData.message,
          from_name: 'Projects Quantum Website',
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">{displayData.badge}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mt-4 mb-6">
              {displayData.title}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {displayData.subtitle}
            </p>

            <div className="space-y-6">
              {(displayData.features || []).map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(10,37,64,0.12)] border border-gray-100 hover:border-accent/40 transition-all duration-300 cursor-pointer group"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 group-hover:from-accent group-hover:to-accent/80 rounded-xl flex items-center justify-center transition-all duration-300 shadow-[0_4px_12px_rgba(212,165,116,0.15)] group-hover:shadow-[0_6px_20px_rgba(212,165,116,0.3)]">
                    {feature.iconImage?.src ? (
                      <Image
                        src={feature.iconImage.src}
                        alt={feature.title}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    ) : feature.iconText ? (
                      <span className="text-xl text-accent group-hover:text-white transition-colors duration-300">{feature.iconText}</span>
                    ) : (
                      icons[feature.iconType] || icons.clock
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-primary-dark">{feature.title}</p>
                    <p className="text-gray-500 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-[0_15px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(10,37,64,0.15)] border border-gray-100 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary-light to-accent" />
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{displayData.successMessage}</span>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+44 7XXX XXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-accent to-accent/90 text-white font-semibold rounded-xl hover:from-accent/90 hover:to-accent transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 shadow-[0_8px_25px_rgba(212,165,116,0.35)] hover:shadow-[0_12px_35px_rgba(212,165,116,0.5)]"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    {displayData.submitButtonText}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection
