"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import sectionImage from "@/assets/third-section.png";

const AimsAndObjectivesSection = () => {
  return (
    <section id="services" className="relative overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Left - Content */}
        <div className="bg-primary-dark py-36 px-8 md:px-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Aims and Objective */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-16 bg-accent"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Aims and Objective
                </h2>
              </div>

              <div className="space-y-6 text-gray-200 leading-relaxed">
                <p>
                  Provide exceptional construction consultancy services that
                  exceed client expectations, ensuring high standards in value
                  engineering, project management, cost estimation, and
                  training.
                </p>
                <p>
                  Facilitate a collaborative approach between designers,
                  engineers, quantity surveyors and cost planners to foster
                  innovation, creativity, and cost efficiency throughout the
                  project lifecycle.
                </p>
              </div>
            </div>

            {/* Motto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-12 bg-accent"></div>
                <h3 className="text-4xl md:text-5xl font-bold text-white">
                  Motto
                </h3>
              </div>

              <p className="text-gray-200 leading-relaxed italic">
                At the heart of everything we do is the belief that every great
                project begins with a vision. "Where Your Ideas Become Reality"
                isn't just a slogan – it's the driving force behind our approach
                to every client and every challenge.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative min-h-[400px] md:min-h-full"
        >
          <Image
            src={sectionImage}
            alt="Construction Site with Scaffolding"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary-dark/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default AimsAndObjectivesSection;
