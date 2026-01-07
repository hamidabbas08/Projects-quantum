'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Commercial Complex',
      location: 'London',
      type: 'High-Rise Development',
      value: '$45M',
      image: '/images/hero.jpg',
    },
    {
      title: 'Infrastructure Bridge',
      location: 'Manchester',
      type: 'Civil Engineering',
      value: '$32M',
      image: '/images/bridge-illustration.jpg',
    },
    {
      title: 'Residential Tower',
      location: 'Birmingham',
      type: 'Mixed-Use Development',
      value: '$28M',
      image: '/images/construction-site.jpg',
    },
    {
      title: 'Industrial Complex',
      location: 'Leeds',
      type: 'Manufacturing Facility',
      value: '$18M',
      image: '/images/rebar-collage.jpg',
    },
    {
      title: 'Marina Development',
      location: 'Southampton',
      type: 'Waterfront Project',
      value: '$55M',
      image: '/images/civil-works.jpg',
    },
    {
      title: 'Tech Campus',
      location: 'Cambridge',
      type: 'Commercial Hub',
      value: '$38M',
      image: '/images/modern-architecture.jpg',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Our <span className="text-accent">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Showcase of our completed and ongoing projects
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-accent font-semibold mb-3">{project.location}</p>
                <p className="text-gray-600 text-sm mb-4">{project.type}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-2xl font-bold text-primary-dark">{project.value}</p>
                  <p className="text-gray-500 text-xs">Project Value</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
