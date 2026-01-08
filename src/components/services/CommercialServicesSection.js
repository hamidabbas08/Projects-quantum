'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sectionImage from '@/assets/ninth-section.png'

const CommercialServicesSection = () => {
  const commercialServices = [
    { title: 'Tendering, Cost planning and estimation', desc: 'We do all pre-construction support to win the projects.' },
    { title: 'Quantity Surveying', desc: "The team provides contractual expertise, variations, claims and bringing knowledge and experience to our client's commercial teams." },
    { title: 'Commercial Management', desc: 'We provide expert advice including pre-and post-contract support on all major forms of contract including NEC and JCT.' },
    { title: 'Dispute Resolution', desc: 'We prevent, manage and resolve contract disputes at all stages of adjudication. Work with our experienced and expert dispute managers.' },
    { title: 'Expert Contract Advice', desc: 'We offer expert advice at every stage of construction contracts including procurement, subcontracts and supply-chain strategies.' },
    { title: 'Programming', desc: 'Our programming team can assist with your NEC pre-contract tendering programme, NEC post-contract periodic programme production and NEC compensation event assessment programmes.' },
    { title: 'Lecturing', desc: 'Construction courses related Programming and Conditions of contract' },
  ]

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Comprehensive Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mt-4 mb-6">
              Project Controls & Commercial Management
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our experienced team provides end-to-end commercial management services to ensure your project's success from inception to completion.
            </p>
            
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={sectionImage}
                alt="Commercial Management"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-medium">Expert guidance for every project phase</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {commercialServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="group bg-white rounded-xl p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(10,37,64,0.15)] border border-gray-100 hover:border-accent/40 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 left-0 w-1 h-full bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <div className="flex gap-4 relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/5 group-hover:from-accent group-hover:to-accent/80 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)] group-hover:shadow-[0_4px_12px_rgba(212,165,116,0.4)]">
                    <span className="text-accent group-hover:text-white font-bold text-sm transition-colors duration-300">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark group-hover:text-white mb-2 transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 group-hover:text-gray-200 text-sm leading-relaxed transition-colors duration-300">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CommercialServicesSection
