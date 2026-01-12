import { getAboutPageData } from '@/lib/contentful'
import AboutHeroSection from '@/components/about/AboutHeroSection'
import TeamExpertiseSection from '@/components/about/TeamExpertiseSection'
import TechnicalExpertiseSection from '@/components/about/TechnicalExpertiseSection'
import AboutCTASection from '@/components/about/AboutCTASection'

export default async function AboutPage() {
  const { heroSection, teamSection, teamExpertise, technicalExpertise, ctaSection } = await getAboutPageData()

  return (
    <main className="overflow-x-hidden">
      <AboutHeroSection data={heroSection} />
      <TeamExpertiseSection data={teamExpertise} />
      <TechnicalExpertiseSection data={technicalExpertise} />
      <AboutCTASection data={ctaSection} />
    </main>
  )
}
