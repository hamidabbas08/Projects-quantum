import { GraphQLClient, gql } from 'graphql-request'

// GraphQL endpoint for Contentful
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT || 'master'}`

// Create GraphQL client
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${
      process.env.CONTENTFUL_PREVIEW_MODE === 'true'
        ? process.env.CONTENTFUL_PREVIEW_TOKEN
        : process.env.CONTENTFUL_ACCESS_TOKEN
    }`,
  },
})

// Helper function to parse Contentful image
export function parseContentfulImage(asset) {
  if (!asset?.url) return null

  return {
    src: asset.url.startsWith('//') ? `https:${asset.url}` : asset.url,
    alt: asset.title || asset.description || '',
    width: asset.width || 800,
    height: asset.height || 600,
  }
}

// ============================================
// 1️⃣ HEADER (Logo + Navigation + CTA Button)
// ============================================
const HEADER_QUERY = gql`
  query GetHeader {
    headerCollection(limit: 1) {
      items {
        navItem1Label
        navItem1Link
        navItem2Label
        navItem2Link
        navItem3Label
        navItem3Link
        ctaButtonText
        ctaButtonLink
      }
    }
  }
`

export async function getHeader() {
  try {
    console.log('Fetching header from Contentful...')
    const data = await client.request(HEADER_QUERY)
    console.log('Header raw response:', JSON.stringify(data, null, 2))
    const item = data.headerCollection?.items?.[0]

    if (!item) {
      console.log('No header item found')
      return null
    }

    // Build navigation array from individual fields
    const navItems = []
    if (item.navItem1Label && item.navItem1Link) {
      navItems.push({ label: item.navItem1Label, href: item.navItem1Link })
    }
    if (item.navItem2Label && item.navItem2Link) {
      navItems.push({ label: item.navItem2Label, href: item.navItem2Link })
    }
    if (item.navItem3Label && item.navItem3Link) {
      navItems.push({ label: item.navItem3Label, href: item.navItem3Link })
    }

    return {
      navItems,
      ctaButton: {
        text: item.ctaButtonText || 'Contact Us',
        link: item.ctaButtonLink || '/contact-us',
      },
    }
  } catch (error) {
    console.error('Error fetching header:', error)
    return null
  }
}

// ============================================
// 3️⃣ STATS (Reusable)
// ============================================
const STATS_QUERY = gql`
  query GetStats {
    statCollection(order: order_ASC) {
      items {
        number
        label
        order
      }
    }
  }
`

export async function getStats() {
  try {
    const data = await client.request(STATS_QUERY)
    return data.statCollection?.items || []
  } catch (error) {
    console.error('Error fetching stats:', error)
    return []
  }
}

// ============================================
// 4️⃣ HERO SECTION (Unified for all pages)
// ============================================
const HERO_SECTION_QUERY = gql`
  query GetHeroSection($page: String!) {
    heroSectionCollection(where: { page: $page }, limit: 1) {
      items {
        page
        badge
        titleLine1
        titleLine2
        titleLine3
        highlightedWord
        subtitle
        ctaButtonText
        ctaButtonLink
        secondaryButtonText
        secondaryButtonLink
        backgroundImage {
          url
          title
          description
          width
          height
        }
        statsCollection {
          items {
            ... on Stat {
              number
              label
              order
            }
          }
        }
      }
    }
  }
`

export async function getHeroSection(page) {
  try {
    console.log(`Fetching hero section for page: ${page}...`)
    const data = await client.request(HERO_SECTION_QUERY, { page })
    console.log(`Hero section raw response for ${page}:`, JSON.stringify(data, null, 2))
    const item = data.heroSectionCollection?.items?.[0]

    if (!item) {
      console.log(`No hero section found for page: ${page}`)
      return null
    }

    return {
      page: item.page,
      badge: item.badge || '',
      titleLine1: item.titleLine1 || '',
      titleLine2: item.titleLine2 || '',
      titleLine3: item.titleLine3 || '',
      highlightedWord: item.highlightedWord || '',
      subtitle: item.subtitle || '',
      ctaButtonText: item.ctaButtonText || '',
      ctaButtonLink: item.ctaButtonLink || '',
      secondaryButtonText: item.secondaryButtonText || '',
      secondaryButtonLink: item.secondaryButtonLink || '',
      backgroundImage: parseContentfulImage(item.backgroundImage),
      stats: item.statsCollection?.items || [],
    }
  } catch (error) {
    console.error(`Error fetching hero section for ${page}:`, error)
    return null
  }
}

// ============================================
// 5️⃣ CTA SECTION (Unified for all pages)
// ============================================
const CTA_SECTION_QUERY = gql`
  query GetCTASection($page: String!) {
    ctaSectionCollection(where: { page: $page }, limit: 1) {
      items {
        page
        title
        subtitle
        buttonText
        buttonLink
        backgroundImage {
          url
          title
          width
          height
        }
        stat {
          ... on Stat {
            number
            label
          }
        }
      }
    }
  }
`

export async function getCTASection(page) {
  try {
    console.log(`Fetching CTA section for page: ${page}...`)
    const data = await client.request(CTA_SECTION_QUERY, { page })
    console.log(`CTA section raw response for ${page}:`, JSON.stringify(data, null, 2))
    const item = data.ctaSectionCollection?.items?.[0]

    if (!item) {
      console.log(`No CTA section found for page: ${page}`)
      return null
    }

    return {
      page: item.page,
      title: item.title || '',
      subtitle: item.subtitle || '',
      buttonText: item.buttonText || '',
      buttonLink: item.buttonLink || '',
      backgroundImage: parseContentfulImage(item.backgroundImage),
      stat: item.stat ? {
        number: item.stat.number || '',
        label: item.stat.label || '',
      } : null,
    }
  } catch (error) {
    console.error(`Error fetching CTA section for ${page}:`, error)
    return null
  }
}

// ============================================
// 6️⃣ SERVICE (Unified - core, commercial, scaffolding, etc.)
// ============================================
const SERVICES_BY_CATEGORY_QUERY = gql`
  query GetServicesByCategory($category: String!) {
    serviceCollection(order: order_ASC, where: { category: $category }) {
      items {
        title
        description
        icon {
          url
          title
          width
          height
        }
        badge
        category
        order
        image {
          url
          title
          width
          height
        }
        items
      }
    }
  }
`

const ALL_SERVICES_QUERY = gql`
  query GetAllServices {
    serviceCollection(order: order_ASC) {
      items {
        title
        description
        icon {
          url
          title
          width
          height
        }
        badge
        category
        order
        image {
          url
          title
          width
          height
        }
        items
      }
    }
  }
`

export async function getServices(category = null) {
  try {
    if (category) {
      const data = await client.request(SERVICES_BY_CATEGORY_QUERY, { category })
      return (
        data.serviceCollection?.items?.map((item) => ({
          ...item,
          icon: parseContentfulImage(item.icon),
          image: parseContentfulImage(item.image),
        })) || []
      )
    } else {
      const data = await client.request(ALL_SERVICES_QUERY)
      return (
        data.serviceCollection?.items?.map((item) => ({
          ...item,
          icon: parseContentfulImage(item.icon),
          image: parseContentfulImage(item.image),
        })) || []
      )
    }
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

// Helper functions for specific service categories
export async function getCoreServices() {
  return getServices('core')
}

export async function getCommercialServices() {
  return getServices('commercial')
}

export async function getScaffoldingServices() {
  return getServices('scaffolding')
}

export async function getDesignPackageItems() {
  return getServices('design-package')
}

export async function getProcessSteps() {
  return getServices('process')
}

export async function getTrainingItems() {
  return getServices('training')
}

// ============================================
// 7️⃣ SECTION (Generic reusable section)
// ============================================
const SECTION_QUERY = gql`
  query GetSection($sectionId: String!) {
    sectionCollection(where: { sectionId: $sectionId }, limit: 1) {
      items {
        sectionId
        sectionLabel
        title
        subtitle
        description
        image {
          url
          title
          width
          height
        }
        statNumber
        statLabel
        servicesCollection {
          items {
            ... on Service {
              title
              description
              badge
              category
              order
              image {
                url
                title
                width
                height
              }
              iconText
              iconImage {
                url
                title
                width
                height
              }
              items
            }
          }
        }
        scaffoldingTypeCollection {
          items {
            ... on ScaffoldingType {
              title
              badge
              description
              order
            }
          }
        }
      }
    }
  }
`

const SECTION_WITH_TAGS_QUERY = gql`
  query GetSectionWithTags($sectionId: String!) {
    sectionCollection(where: { sectionId: $sectionId }, limit: 1) {
      items {
        sectionId
        sectionLabel
        title
        subtitle
        description
        image {
          url
          title
          width
          height
        }
        statNumber
        statLabel
        servicesCollection {
          items {
            ... on Service {
              title
              description
              badge
              category
              order
              image {
                url
                title
                width
                height
              }
              iconText
              iconImage {
                url
                title
                width
                height
              }
              items
            }
          }
        }
        scaffoldingTypeCollection {
          items {
            ... on ScaffoldingType {
              title
              badge
              description
              order
            }
          }
        }
        tagsCollection {
          items {
            ... on Tag {
              tag
            }
          }
        }
      }
    }
  }
`

export async function getSection(sectionId, includeTags = false) {
  try {
    console.log(`Fetching section: ${sectionId}...`)
    const query = includeTags ? SECTION_WITH_TAGS_QUERY : SECTION_QUERY
    const data = await client.request(query, { sectionId })
    console.log(`Section raw response for ${sectionId}:`, JSON.stringify(data, null, 2))
    const item = data.sectionCollection?.items?.[0]

    if (!item) {
      console.log(`No section found for sectionId: ${sectionId}`)
      return null
    }

    return {
      sectionId: item.sectionId,
      sectionLabel: item.sectionLabel || '',
      title: item.title || '',
      subtitle: item.subtitle || '',
      description: item.description || '',
      image: parseContentfulImage(item.image),
      statNumber: item.statNumber || '',
      statLabel: item.statLabel || '',
      services:
        item.servicesCollection?.items?.map((service) => ({
          ...service,
          image: parseContentfulImage(service.image),
          iconText: service.iconText || null,
          iconImage: parseContentfulImage(service.iconImage),
        })) || [],
      scaffoldingTypes: item.scaffoldingTypeCollection?.items || [],
      tags: item.tagsCollection?.items?.flatMap(t => 
        t.tag ? t.tag.split(',').map(tag => tag.trim()) : []
      ) || [],
    }
  } catch (error) {
    console.error(`Error fetching section ${sectionId}:`, error)
    return null
  }
}

// Helper functions for specific sections
export async function getDesignSubmissionSection() {
  return getSection('design-submission')
}

export async function getTrainingSection() {
  return getSection('training')
}

export async function getProcessSection() {
  return getSection('process')
}

export async function getAimsObjectivesSection() {
  return getSection('aims-objectives')
}

export async function getCommercialServicesSection() {
  return getSection('commercial-services')
}

// ============================================
// 8️⃣ TEAM DETAIL
// ============================================
const TEAM_DETAILS_QUERY = gql`
  query GetTeamDetails {
    teamDetailCollection(order: order_ASC) {
      items {
        title
        description
        icon {
          url
          title
          width
          height
        }
        order
      }
    }
  }
`

export async function getTeamDetails() {
  try {
    const data = await client.request(TEAM_DETAILS_QUERY)
    return (
      data.teamDetailCollection?.items?.map((item) => ({
        ...item,
        icon: parseContentfulImage(item.icon),
      })) || []
    )
  } catch (error) {
    console.error('Error fetching team details:', error)
    return []
  }
}

// ============================================
// 9️⃣ TEAM SECTION
// ============================================
const TEAM_SECTION_QUERY = gql`
  query GetTeamSection {
    teamSectionCollection(limit: 1) {
      items {
        title
        description
        regions
        sectors
        yearsExperience
        regionsServed
        image {
          url
          title
          width
          height
        }
        detailsCollection {
          items {
            title
            description
            icon {
              url
              title
              width
              height
            }
            order
          }
        }
      }
    }
  }
`

export async function getTeamSection() {
  try {
    const data = await client.request(TEAM_SECTION_QUERY)
    const item = data.teamSectionCollection?.items?.[0]

    if (!item) return null

    return {
      title: item.title || '',
      description: item.description || '',
      regions: item.regions || [],
      sectors: item.sectors || [],
      yearsExperience: item.yearsExperience || '15+',
      regionsServed: item.regionsServed || '4+',
      image: parseContentfulImage(item.image),
      details:
        item.detailsCollection?.items?.map((detail) => ({
          ...detail,
          icon: parseContentfulImage(detail.icon),
        })) || [],
    }
  } catch (error) {
    console.error('Error fetching team section:', error)
    return null
  }
}

// ============================================
// 🔟 TECHNICAL EXPERTISE
// ============================================
const TECHNICAL_EXPERTISE_QUERY = gql`
  query GetTechnicalExpertise {
    technicalExpertiseCollection(order: order_ASC) {
      items {
        title
        items
        order
      }
    }
  }
`

export async function getTechnicalExpertise() {
  try {
    const data = await client.request(TECHNICAL_EXPERTISE_QUERY)
    return data.technicalExpertiseCollection?.items || []
  } catch (error) {
    console.error('Error fetching technical expertise:', error)
    return []
  }
}

// ============================================
// 1️⃣1️⃣ CONTACT INFO
// ============================================
const CONTACT_INFO_QUERY = gql`
  query GetContactInfo {
    contactInfoCollection(order: order_ASC) {
      items {
        title
        details
        order
        iconText
        iconImage {
          url
          title
          width
          height
        }
      }
    }
  }
`

export async function getContactInfo() {
  try {
    const data = await client.request(CONTACT_INFO_QUERY)
    const items = data.contactInfoCollection?.items || []
    
    // Determine icon type based on title
    const getIconType = (title) => {
      const lowerTitle = title?.toLowerCase() || ''
      // Check email first since "Email Address" contains both "email" and "address"
      if (lowerTitle.includes('email') || lowerTitle.includes('mail')) {
        return 'email'
      }
      if (lowerTitle.includes('phone') || lowerTitle.includes('call') || lowerTitle.includes('number')) {
        return 'phone'
      }
      if (lowerTitle.includes('address') || lowerTitle.includes('office') || lowerTitle.includes('location')) {
        return 'location'
      }
      return 'location'
    }
    
    // Map items with icon types and parsed images
    const contactInfoItems = items.map(item => ({
      ...item,
      iconType: getIconType(item.title),
      iconText: item.iconText || null,
      iconImage: parseContentfulImage(item.iconImage)
    }))
    
    // If no ContactInfo entries exist, use Footer data as fallback
    if (contactInfoItems.length === 0) {
      const footer = await getFooter()
      if (footer) {
        return [
          {
            title: 'Our Office',
            details: [footer.address],
            iconType: 'location',
            order: 1
          },
          {
            title: 'Email Us',
            details: [footer.email],
            iconType: 'email',
            order: 2
          },
          {
            title: 'Call Us',
            details: [footer.phone],
            iconType: 'phone',
            order: 3
          }
        ]
      }
    }
    
    return contactInfoItems
  } catch (error) {
    console.error('Error fetching contact info:', error)
    return []
  }
}

// ============================================
// 1️⃣2️⃣ CONTACT FORM SECTION (using Section content type)
// ============================================
export async function getContactFormSection() {
  // Use the generic getSection function with 'contact-details' sectionId
  const section = await getSection('contact-details')
  
  if (!section) {
    // Return default values if no section found
    return {
      badge: 'Send Message',
      title: 'Let\'s Start a Conversation',
      subtitle: 'Fill out the form below and we\'ll get back to you shortly.',
      submitButtonText: 'Send Message',
      successMessage: 'Thank you for your message!',
      features: [],
    }
  }

  // Map services to features with icon types
  const getIconType = (title) => {
    const lowerTitle = title?.toLowerCase() || ''
    if (lowerTitle.includes('time') || lowerTitle.includes('hour') || lowerTitle.includes('response') || lowerTitle.includes('fast')) {
      return 'clock'
    }
    if (lowerTitle.includes('secure') || lowerTitle.includes('safe') || lowerTitle.includes('protect') || lowerTitle.includes('quality')) {
      return 'shield'
    }
    if (lowerTitle.includes('team') || lowerTitle.includes('expert') || lowerTitle.includes('support')) {
      return 'team'
    }
    return 'clock'
  }

  const features = (section.services || []).map(service => ({
    title: service.title,
    description: service.description,
    iconType: getIconType(service.title),
    iconText: service.iconText || null,
    iconImage: service.iconImage || null,
  }))

  return {
    badge: section.sectionLabel || 'Send Message',
    title: section.title || 'Let\'s Start a Conversation',
    subtitle: section.subtitle || section.description || '',
    submitButtonText: section.statLabel || 'Send Message',
    successMessage: 'Thank you for your message! We\'ll get back to you shortly.',
    features,
  }
}

// ============================================
// 1️⃣3️⃣ SCAFFOLDING TYPES
// ============================================
const SCAFFOLDING_TYPES_QUERY = gql`
  query GetScaffoldingTypes {
    scaffoldingTypeCollection(order: order_ASC) {
      items {
        title
        badge
        description
        order
      }
    }
  }
`

export async function getScaffoldingTypes() {
  try {
    const data = await client.request(SCAFFOLDING_TYPES_QUERY)
    return data.scaffoldingTypeCollection?.items || []
  } catch (error) {
    console.error('Error fetching scaffolding types:', error)
    return []
  }
}

// Get floating badges for hero section (from ScaffoldingType)
export async function getFloatingBadges() {
  try {
    const data = await client.request(SCAFFOLDING_TYPES_QUERY)
    const items = data.scaffoldingTypeCollection?.items || []
    const badges = items.map(item => ({
      title: item.title || '',
      subtitle: item.badge || '',
      description: item.description || '',
      order: item.order || 0,
    }))
    
    // Remove duplicates by title
    const uniqueBadges = badges.filter((badge, index, self) =>
      index === self.findIndex(b => b.title === badge.title)
    )
    
    return uniqueBadges
  } catch (error) {
    console.error('Error fetching floating badges:', error)
    return []
  }
}

// ============================================
// 2️⃣ FOOTER (All footer data in one place)
// ============================================
const FOOTER_QUERY = gql`
  query GetFooter {
    footerCollection(limit: 1) {
      items {
        footerLogo {
          url
          title
          width
          height
        }
        tagline
        quickLink1Label
        quickLink1Link
        quickLink2Label
        quickLink2Link
        quickLink3Label
        quickLink3Link
        address
        email
        phone
        facebookUrl
        linkedInUrl
        twitterUrl
        instagramUrl
        copyrightText
      }
    }
  }
`

export async function getFooter() {
  try {
    const data = await client.request(FOOTER_QUERY)
    const item = data.footerCollection?.items?.[0]

    if (!item) return null

    // Build quick links array from individual fields
    const quickLinks = []
    if (item.quickLink1Label && item.quickLink1Link) {
      quickLinks.push({ label: item.quickLink1Label, href: item.quickLink1Link })
    }
    if (item.quickLink2Label && item.quickLink2Link) {
      quickLinks.push({ label: item.quickLink2Label, href: item.quickLink2Link })
    }
    if (item.quickLink3Label && item.quickLink3Link) {
      quickLinks.push({ label: item.quickLink3Label, href: item.quickLink3Link })
    }

    return {
      logo: parseContentfulImage(item.footerLogo),
      tagline: item.tagline || '',
      quickLinks,
      address: item.address || '',
      email: item.email || '',
      phone: item.phone || '',
      socialLinks: {
        facebook: item.facebookUrl || '',
        linkedin: item.linkedInUrl || '',
        twitter: item.twitterUrl || '',
        instagram: item.instagramUrl || '',
      },
      copyrightText: item.copyrightText || 'All rights reserved.',
    }
  } catch (error) {
    console.error('Error fetching footer:', error)
    return null
  }
}

// ============================================
// COMBINED DATA FETCHERS (for pages)
// ============================================

// Get all data needed for Home page
export async function getHomePageData() {
  const [heroSection, designSubmission, trainingSection, processSection, ctaSection, homeCTASection, floatingBadges] =
    await Promise.all([
      getHeroSection('home'),
      getSection('design-submission'),
      getSection('training'),
      getSection('process'),
      getCTASection('home'),
      getSection('home-cta'),
      getFloatingBadges(),
    ])

  console.log('============ HOME PAGE DATA ============')
  console.log('heroSection:', JSON.stringify(heroSection, null, 2))
  console.log('designSubmission:', JSON.stringify(designSubmission, null, 2))
  console.log('trainingSection:', JSON.stringify(trainingSection, null, 2))
  console.log('processSection:', JSON.stringify(processSection, null, 2))
  console.log('ctaSection:', JSON.stringify(ctaSection, null, 2))
  console.log('homeCTASection:', JSON.stringify(homeCTASection, null, 2))
  console.log('floatingBadges:', JSON.stringify(floatingBadges, null, 2))
  console.log('========================================')

  return {
    heroSection,
    designSubmission,
    trainingSection,
    processSection,
    ctaSection,
    homeCTASection,
    floatingBadges,
  }
}

// Get all data needed for About page
export async function getAboutPageData() {
  const [heroSection, teamSection, teamExpertise, technicalExpertiseSection, technicalExpertiseItems, ctaSection] = await Promise.all([
    getHeroSection('about'),
    getTeamSection(),
    getSection('team-expertise', false), // don't include tags for now - they're linked FROM Tag to Section
    getSection('technical-excellence'),
    getTechnicalExpertise(),
    getCTASection('about'),
  ])

  // Merge section data with expertise items
  const technicalExpertise = {
    ...technicalExpertiseSection,
    expertiseItems: technicalExpertiseItems,
  }

  console.log('============ ABOUT PAGE DATA ============')
  console.log('heroSection:', JSON.stringify(heroSection, null, 2))
  console.log('teamSection:', JSON.stringify(teamSection, null, 2))
  console.log('teamExpertise:', JSON.stringify(teamExpertise, null, 2))
  console.log('technicalExpertise:', JSON.stringify(technicalExpertise, null, 2))
  console.log('ctaSection:', JSON.stringify(ctaSection, null, 2))
  console.log('=========================================')

  return {
    heroSection,
    teamSection,
    teamExpertise,
    technicalExpertise,
    ctaSection,
  }
}

// Get all data needed for Services page
export async function getServicesPageData() {
  const [heroSection, scaffoldingTypes, servicesSection, aimsObjectives, coreServicesSection, comprehensiveServices, ctaSection] =
    await Promise.all([
      getHeroSection('services'),
      getScaffoldingTypes(),
      getSection('services'),
      getSection('aims-objectives'),
      getSection('core-services'),
      getSection('comprehensive-services'),
      getCTASection('services'),
    ])

  console.log('============ SERVICES PAGE DATA ============')
  console.log('heroSection:', JSON.stringify(heroSection, null, 2))
  console.log('scaffoldingTypes:', JSON.stringify(scaffoldingTypes, null, 2))
  console.log('servicesSection:', JSON.stringify(servicesSection, null, 2))
  console.log('aimsObjectives:', JSON.stringify(aimsObjectives, null, 2))
  console.log('coreServicesSection:', JSON.stringify(coreServicesSection, null, 2))
  console.log('comprehensiveServices:', JSON.stringify(comprehensiveServices, null, 2))
  console.log('ctaSection:', JSON.stringify(ctaSection, null, 2))
  console.log('=============================================')

  return {
    heroSection,
    scaffoldingTypes,
    servicesSection,
    aimsObjectives,
    coreServicesSection,
    comprehensiveServices,
    ctaSection,
  }
}

// Get all data needed for Contact page
export async function getContactPageData() {
  const [heroSection, contactInfo, contactFormSection] = await Promise.all([
    getHeroSection('contact'),
    getContactInfo(),
    getContactFormSection(),
  ])

  console.log('============ CONTACT PAGE DATA ============')
  console.log('heroSection:', JSON.stringify(heroSection, null, 2))
  console.log('contactInfo:', JSON.stringify(contactInfo, null, 2))
  console.log('contactFormSection:', JSON.stringify(contactFormSection, null, 2))
  console.log('============================================')

  return {
    heroSection,
    contactInfo,
    contactFormSection,
  }
}

export default client
