'use client'

import { motion } from 'framer-motion'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-accent">PROJECTS QUANTUM</h3>
            <p className="text-gray-300 text-sm">
              Leading construction engineering and quantity surveying services.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-accent transition">Home</a></li>
              <li><a href="#services" className="hover:text-accent transition">Services</a></li>
              <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
              <li><a href="#about" className="hover:text-accent transition">About</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm text-gray-300 mb-2">
              📍 4 Fenlands Meadow, Broughton, Aylesbury, HP22 7EW
            </p>
            <p className="text-sm text-gray-300 mb-2">
              📧 info@projectsquantum.com
            </p>
            <p className="text-sm text-gray-300">
              📱 +44 7440 125077
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-accent transition">
                <FaLinkedin />
              </a>
              <a href="#" className="text-2xl hover:text-accent transition">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-accent transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-accent transition">
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300"
        >
          <p>&copy; {currentYear} Projects Quantum. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition">Terms & Conditions</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
