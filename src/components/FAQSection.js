'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What services does Projects Quantum offer?',
      answer: 'We provide comprehensive quantity surveying, civil engineering, temporary works, and project management services for construction projects of all sizes.',
    },
    {
      question: 'Are your professionals certified?',
      answer: 'Yes, all our professionals are CIOB and RICS certified with extensive experience in the construction industry.',
    },
    {
      question: 'How long have you been in the industry?',
      answer: 'Projects Quantum has over 20 years of experience delivering exceptional results for clients across the UK and beyond.',
    },
    {
      question: 'Do you offer training programs?',
      answer: 'Yes, we offer comprehensive training and development programs including CIOB, RICS, and construction safety certifications.',
    },
    {
      question: 'What is your project experience?',
      answer: 'We have successfully completed over 500 projects ranging from small residential developments to large commercial complexes and infrastructure projects.',
    },
    {
      question: 'How do I get a quote?',
      answer: 'Contact us through our website or phone number provided in the footer. We will schedule a consultation to understand your project requirements.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-primary-dark text-left">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-accent text-2xl flex-shrink-0 ml-4"
                >
                  ▼
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
