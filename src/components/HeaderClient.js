'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
import DefaultLogo from '@/assets/logo.png'

const Header = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)

  if (!data) return null

  const logo = data.logo || { src: DefaultLogo, alt: 'Projects Quantum Logo' }
  const navItems = data.navItems || []
  const ctaButton = data.ctaButton || { text: 'Contact Us', link: '/contact-us' }

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
          >
            <Link href="/" className="-ml-12 -mb-4 flex items-center gap-2 cursor-pointer">
              {logo.src ? (
                <Image
                  src={typeof logo.src === 'string' ? logo.src : DefaultLogo}
                  alt={logo.alt || 'Projects Quantum Logo'}
                  width={250}
                  height={250}
                  unoptimized={typeof logo.src === 'string'}
                />
              ) : (
                <Image src={DefaultLogo} alt="Projects Quantum Logo" width={250} height={250} />
              )}
            </Link>
          </motion.div>

          <div className="flex gap-5 items-center">
            <nav className="hidden sm:flex gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="hover:text-accent transition-colors duration-300 font-medium"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href={ctaButton.link}
                className="hidden sm:inline-block px-6 py-2 bg-accent text-primary-dark rounded-lg font-bold hover:bg-opacity-90 transition-all duration-300"
              >
                {ctaButton.text}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button className="sm:hidden text-2xl" onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="sm:hidden absolute top-20 left-0 right-0 bg-gradient-to-b from-primary-dark to-primary-light border-t border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          >
            <nav className="flex flex-col p-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 transition-all duration-300 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300" />
                    <span className="font-medium text-white group-hover:text-accent transition-colors duration-300">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* Contact Us Button in Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link
                  href={ctaButton.link}
                  className="mt-4 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-accent to-accent/90 text-primary-dark rounded-xl font-bold hover:from-accent/90 hover:to-accent transition-all duration-300 shadow-[0_8px_20px_rgba(212,165,116,0.3)]"
                  onClick={() => setIsOpen(false)}
                >
                  {ctaButton.text}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header
