'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import QuantitySurveyingSection from '@/components/QuantitySurveyingSection'
import TemporaryWorksSection from '@/components/TemporaryWorksSection'
import TrainingSection from '@/components/TrainingSection'
import ProjectsSection from '@/components/ProjectsSection'
import StatsSection from '@/components/StatsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import ProcessSection from '@/components/ProcessSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <QuantitySurveyingSection />
      <TemporaryWorksSection />
      <TrainingSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <ProjectsSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  )
}
