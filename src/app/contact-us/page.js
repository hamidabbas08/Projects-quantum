'use client'

import ContactHeroSection from '@/components/contact/ContactHeroSection'
import ContactInfoSection from '@/components/contact/ContactInfoSection'
import ContactFormSection from '@/components/contact/ContactFormSection'

export default function ContactUsPage() {
  return (
    <main className="overflow-x-hidden">
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
    </main>
  )
}
