'use client'

import HeroSection from '@/components/home/HeroSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import TrainingSection from '@/components/home/TrainingSection'
import ProcessSection from '@/components/home/ProcessSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ProjectsSection />
      <TrainingSection />
      <ProcessSection />
      <CTASection />
    </main>
  )
}
