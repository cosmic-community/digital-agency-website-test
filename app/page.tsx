import { getServices, getTeamMembers, getCaseStudies, getTestimonials } from '@/lib/cosmic'
import { Service, TeamMember, CaseStudy, Testimonial } from '@/types'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import TeamSection from '@/components/TeamSection'
import CTASection from '@/components/CTASection'

export default async function HomePage() {
  // Fetch all data in parallel
  const [services, teamMembers, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials(),
  ])

  return (
    <>
      <HeroSection />
      <ServicesSection services={services as Service[]} />
      <CaseStudiesSection caseStudies={caseStudies as CaseStudy[]} />
      <TestimonialsSection testimonials={testimonials as Testimonial[]} />
      <TeamSection teamMembers={teamMembers as TeamMember[]} />
      <CTASection />
    </>
  )
}