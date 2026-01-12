"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterClient = ({ footerData }) => {
  const currentYear = new Date().getFullYear();
  
  if (!footerData) return null;

  const logo = footerData.logo || { src: "/images/logo.png", alt: "Projects Quantum Logo" };
  const tagline = footerData.tagline;
  const quickLinks = footerData.quickLinks || [];
  const address = footerData.address;
  const email = footerData.email;
  const phone = footerData.phone;
  const socialLinks = footerData.socialLinks || {};
  const copyrightText = footerData.copyrightText;

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {logo?.src && (
              <Image
                src={logo.src}
                alt={logo.alt || "Projects Quantum Logo"}
                width={250}
                height={250}
                className="-mt-16 -ml-10"
              />
            )}
            <p className="-mt-14 text-gray-300 text-sm">
              {tagline}
            </p>
          </motion.div>

          <div className="flex gap-14 sm:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-4 text-nowrap">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-accent transition">
                      {link.label}
                    </a>
                  </li>
                ))}
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
                📍 {address}
              </p>
              <p className="text-sm text-gray-300 mb-2">
                📧 {email}
              </p>
              <p className="text-sm text-gray-300">📱 {phone}</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300"
        >
          <p>{copyrightText}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {socialLinks.linkedin && (
              <a 
                href={socialLinks.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-accent transition"
              >
                <FaLinkedin />
              </a>
            )}
            {socialLinks.facebook && (
              <a 
                href={socialLinks.facebook} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-accent transition"
              >
                <FaFacebook />
              </a>
            )}
            {socialLinks.twitter && (
              <a 
                href={socialLinks.twitter} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-accent transition"
              >
                <FaTwitter />
              </a>
            )}
            {socialLinks.instagram && (
              <a 
                href={socialLinks.instagram} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-accent transition"
              >
                <FaInstagram />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterClient;
