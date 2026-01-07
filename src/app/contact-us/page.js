'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }, 500)
  }

  return (
    <main className="overflow-x-hidden">
      <Header />
      
      <section className="mt-20 py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Ready to discuss your project? Fill out the form below and we'll get back to you soon
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-primary-dark mb-2">Address</h3>
                <p className="text-gray-600">
                  4 Fenlands Meadow
                  <br />
                  Broughton, Aylesbury
                  <br />
                  HP22 7EW
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-primary-dark mb-2">Phone</h3>
                <p className="text-gray-600">+44 7440 125077</p>
                <p className="text-gray-600">+44 7405 710905</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-primary-dark mb-2">Email</h3>
                <p className="text-gray-600">info@projectsquantum.com</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="md:col-span-2 bg-gray-50 p-8 rounded-lg"
            >
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                >
                  ✓ Thank you! We'll get back to you soon.
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors mb-4"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors mb-4"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors mb-6 resize-none"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-accent text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
