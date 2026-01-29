"use client";

import { motion } from "framer-motion";

const ScaffoldTypesSection = ({ sectionData }) => {
  if (!sectionData) return null;

  // Get section details from sectionData (from Contentful)
  const sectionLabel = sectionData.sectionLabel;
  const title = sectionData.title;
  const description = sectionData.description;
  
  // Get scaffold types from services array
  const scaffoldTypes = sectionData.services || [];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {scaffoldTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="group bg-white rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(10,37,64,0.15)] border border-gray-200 hover:border-accent/40 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-accent/20 to-accent/5 text-accent rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)] group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent/80 group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(212,165,116,0.4)] transition-all duration-300">
                  {type.badge || String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed group-hover:text-primary-dark transition-colors duration-300">
                  {type.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScaffoldTypesSection;
