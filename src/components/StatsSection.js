"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import sectionImage from "@/assets/ninth-section.png";

const StatsSection = () => {
  const services = [
    "Tendering, Cost planning and estimation- We do all pre-construction support to win the projects.",
    "Quantity Surveying- The team provides contractual expertise, variations, claims and bringing knowledge and experience to our client's commercial teams.",
    "Commercial Management- We provide expert advice including pre-and post-contract support on all major forms of contract including NEC and JCT.",
    "Dispute Resolution- We prevent, manage and resolve contract disputes at all stages of adjudication. Work with our experienced and expert dispute managers.",
    "Expert Contract Advice- We offer expert advice at every stage of construction contracts including procurement, subcontracts and supply-chain strategies. Find out more about our contract health checks.",
    "Programming- Our programming team can assist with your NEC pre-contract tendering programme, NEC post-contract periodic programme production and NEC compensation event assessment programmes.",
    "Lecturing- Construction courses related Programming and Conditions of contract",
  ];

  return (
    <section
      className="relative overflow-hidden min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${sectionImage.src})` }}
    >
      {/* Dark Overlay */}
      <div className="max-lg:hidden block absolute inset-0 bg-[#092540]/40"></div>
      <div className="max-lg:block hidden absolute inset-0 bg-[#092540]/70"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Heading with Border */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-2 h-24 bg-accent flex-shrink-0"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Project Controls & Commercial Management Services
                </h2>
              </div>

              {/* Services List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                    style={{
                      maxWidth:
                        index >= 1 && index <= 3
                          ? "450px"
                          : index >= 4 && index <= 6
                          ? "300px"
                          : "none",
                    }}
                  >
                    <span className="text-accent font-bold flex-shrink-0 mt-1">
                      •
                    </span>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {service}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Empty */}
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
