'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Home', 'Services', 'Projects', 'About', 'Contact']

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed w-full top-0 bg-primary-dark text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold text-primary-dark">
              PQ
            </div>
            <span className="font-bold text-xl hidden sm:inline">PROJECTS QUANTUM</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="hover:text-accent transition-colors duration-300 font-medium"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:inline-block px-6 py-2 bg-accent text-primary-dark rounded-lg font-bold hover:bg-opacity-90 transition-all duration-300"
          >
            Get Quote
          </motion.button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-2xl" onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary-light"
          >
            <nav className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-accent transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header
