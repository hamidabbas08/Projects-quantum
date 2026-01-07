'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AimsAndObjectivesSection from '@/components/ServicesSection'
import CoreServicesSection from '@/components/QuantitySurveyingSection'
import ScaffoldingDesignSection from '@/components/TemporaryWorksSection'
import ScaffoldingTypesSection from '@/components/TrainingSection'
import CTASection from '@/components/CTASection'

export default function Services() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <AimsAndObjectivesSection />
      <CoreServicesSection />
      <ScaffoldingDesignSection />
      <ScaffoldingTypesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
