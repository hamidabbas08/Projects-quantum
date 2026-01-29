import { getHomePageData } from '@/lib/contentful'
import HeroSection from '@/components/home/HeroSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import TrainingSection from '@/components/home/TrainingSection'
import ProcessSection from '@/components/home/ProcessSection'
import CTASection from '@/components/home/CTASection'

export default async function Home() {
  const { heroSection, designSubmission, trainingSection, processSection, ctaSection, homeCTASection, floatingBadges } = await getHomePageData()

  return (
    <main className="overflow-x-hidden">
      <HeroSection data={heroSection} floatingBadges={floatingBadges} />
      <ProjectsSection data={designSubmission} />
      <TrainingSection data={trainingSection} />
      <ProcessSection data={processSection} />
      <CTASection data={ctaSection} homeCTAData={homeCTASection} />
    </main>
  )
}
