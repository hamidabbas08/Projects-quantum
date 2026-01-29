import { getServicesPageData } from '@/lib/contentful'
import ServicesHeroSection from '@/components/services/ServicesHeroSection'
import AimsObjectivesSection from '@/components/services/AimsObjectivesSection'
import ScaffoldTypesSection from '@/components/services/ScaffoldTypesSection'
import CoreServicesSection from '@/components/services/CoreServicesSection'
import CommercialServicesSection from '@/components/services/CommercialServicesSection'
import ServicesCTASection from '@/components/services/ServicesCTASection'

export default async function Services() {
  const { heroSection, scaffoldingTypes, servicesSection, aimsObjectives, coreServicesSection, comprehensiveServices, ctaSection } = await getServicesPageData()

  return (
    <main className="overflow-x-hidden bg-white">
      <ServicesHeroSection data={{ ...heroSection, scaffoldingTypes }} />
      <AimsObjectivesSection data={aimsObjectives} />
      <ScaffoldTypesSection sectionData={servicesSection} />
      <CoreServicesSection data={coreServicesSection} />
      <CommercialServicesSection data={comprehensiveServices} />
      <ServicesCTASection data={ctaSection} />
    </main>
  )
}
