"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "@/assets/logo.png";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/#about' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full top-0 bg-primary-dark text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="-ml-12 -mb-4 flex items-center gap-2 cursor-pointer"
          >
            <Image src={Logo} alt="Projects Quantum Logo" width={250} height={250} />
          </motion.a>

          <div className="flex gap-5 items-center">
            <nav className="hidden lg:flex gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="hover:text-accent transition-colors duration-300 font-medium"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.a
              href="/contact-us"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:inline-block px-6 py-2 bg-accent text-primary-dark rounded-lg font-bold hover:bg-opacity-90 transition-all duration-300"
            >
              Contact Us
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-2xl" onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary-light"
          >
            <nav className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-accent transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
