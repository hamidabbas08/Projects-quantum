'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import StatsSection from '@/components/StatsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import ProcessSection from '@/components/ProcessSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <StatsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
