'use client'

import ServicesHeroSection from '@/components/services/ServicesHeroSection'
import AimsObjectivesSection from '@/components/services/AimsObjectivesSection'
import ScaffoldTypesSection from '@/components/services/ScaffoldTypesSection'
import CoreServicesSection from '@/components/services/CoreServicesSection'
import CommercialServicesSection from '@/components/services/CommercialServicesSection'
import ServicesCTASection from '@/components/services/ServicesCTASection'

export default function Services() {
  return (
    <main className="overflow-x-hidden bg-white">
      <ServicesHeroSection />
      <AimsObjectivesSection />
      <ScaffoldTypesSection />
      <CoreServicesSection />
      <CommercialServicesSection />
      <ServicesCTASection />
    </main>
  )
}
