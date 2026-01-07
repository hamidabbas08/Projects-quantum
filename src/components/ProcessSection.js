"use client";

import { motion } from "framer-motion";
import sectionImage from "@/assets/seventh-section.png";
import Image from "next/image";

const ProcessSection = () => {
  const temporaryWorks = [
    "Hoardings",
    "Sheet Piling",
    "Working Platforms",
    "Cofferdam",
    "Haul Roads",
    "Fencing",
    "Thrust Block Designs",
    "Retaining Walls",
    "Slope Stability",
    "Formwork",
    "Propping/Needling",
    "UG Services Check",
    "Service Protection Concrete Slabs",
  ];

  return (
    <section className="relative overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-accent rounded-full opacity-5 z-10"
      />
      {/* Content Section at Top - White Background */}
      <div className="bg-[#092540] py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Centered Heading */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Other temporary works designs:
              </h2>
            </div>
          </motion.div>

          {/* Grid Layout - 2 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {temporaryWorks.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <span className="text-accent font-semibold min-w-fit">•</span>
                <span className="text-white text-base">{work}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Image Section Below */}
        <div
          className="mt-16 rounded-2xl max-w-7xl mx-auto relative h-[70vh] overflow-hidden"
          style={{
            backgroundImage: `url(${sectionImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(31, 41, 55, 0.4) 50%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
