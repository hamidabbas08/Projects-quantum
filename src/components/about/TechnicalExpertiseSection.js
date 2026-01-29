"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TechnicalExpertiseSection = ({ data }) => {
  if (!data) return null;

  // Get section data
  const sectionLabel = data.sectionLabel
  const title = data.title
  const subtitle = data.subtitle
  const statLabel = data.statLabel
  const image = data.image?.src
  
  // Get expertise items from services (items with 'items' array, sorted by order)
  const expertise = (data.services || [])
    .filter(s => s.items && s.items.length > 0)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .map((e) => ({ 
      title: e.title, 
      badge: e.badge,
      items: e.items || [] 
    }));
  
  // Get "Our Journey" from services (has description but no items)
  const journeyService = data.services?.find(s => s.description && (!s.items || s.items.length === 0))
  const journeyTitle = journeyService?.title
  const journeyDescription = journeyService?.description
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">
            {sectionLabel}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mt-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Expertise Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {expertise.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-200 hover:shadow-[0_20px_50px_rgba(10,37,64,0.12)] hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-accent/30 rounded-l-2xl" />
                <h3 className="text-lg font-bold text-primary-dark mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-br from-accent/20 to-accent/5 text-accent rounded-lg flex items-center justify-center text-sm font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)]">
                    {section.badge || index + 1}
                  </span>
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-accent flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Image & Clients */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Image */}
            <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-medium">
                  {statLabel}
                </p>
              </div>
            </div>
            {/* Company History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary-dark rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-3">{journeyTitle}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {journeyDescription}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertiseSection;
