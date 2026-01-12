import { getContactPageData } from '@/lib/contentful'
import ContactHeroSection from '@/components/contact/ContactHeroSection'
import ContactInfoSection from '@/components/contact/ContactInfoSection'
import ContactFormSection from '@/components/contact/ContactFormSection'

export default async function ContactUsPage() {
  const { heroSection, contactInfo, contactFormSection } = await getContactPageData()

  return (
    <main className="overflow-x-hidden">
      <ContactHeroSection data={heroSection} />
      <ContactInfoSection data={contactInfo} />
      <ContactFormSection data={contactFormSection} />
    </main>
  )
}
