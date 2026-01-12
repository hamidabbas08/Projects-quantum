"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterClient = ({ footerData }) => {
  const currentYear = new Date().getFullYear();

  if (!footerData) return null;

  const logo = footerData.logo || {
    src: "/images/logo.png",
    alt: "Projects Quantum Logo",
  };
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
            <p className="-mt-14 text-gray-300 text-sm">{tagline}</p>
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
                    <a
                      href={link.href}
                      className="hover:text-accent transition"
                    >
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
              <p className="flex gap-1.5 items-center text-sm text-gray-300 mb-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{address}</span>
              </p>
              <p className="flex gap-1.5 items-center text-sm text-gray-300 mb-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>{" "}
                <span>{email}</span>
              </p>
              <p className="flex gap-1.5 items-center text-sm text-gray-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {phone}
              </p>
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
