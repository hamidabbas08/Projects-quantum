'use client'

import AboutHeroSection from '@/components/about/AboutHeroSection'
import TeamExpertiseSection from '@/components/about/TeamExpertiseSection'
import TechnicalExpertiseSection from '@/components/about/TechnicalExpertiseSection'
import AboutCTASection from '@/components/about/AboutCTASection'

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutHeroSection />
      <TeamExpertiseSection />
      <TechnicalExpertiseSection />
      <AboutCTASection />
    </main>
  )
}
