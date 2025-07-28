import { getCaseStudies } from '@/lib/cosmic'
import { CaseStudy } from '@/types'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Studies | Digital Agency',
  description: 'Explore our successful project case studies and see how we have helped businesses transform their digital presence.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies() as CaseStudy[]

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy) => (
            <article key={caseStudy.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {caseStudy.metadata?.featured_image && (
                <div className="aspect-video">
                  <img
                    src={`${caseStudy.metadata.featured_image.imgix_url}?w=600&h=340&fit=crop&auto=format,compress`}
                    alt={caseStudy.metadata?.project_title || caseStudy.title}
                    width="600"
                    height="340"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-primary-600 font-medium">
                    {caseStudy.metadata?.client_name}
                  </div>
                  {caseStudy.metadata?.project_duration && (
                    <div className="text-sm text-gray-500">
                      {caseStudy.metadata.project_duration}
                    </div>
                  )}
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {caseStudy.metadata?.project_title || caseStudy.title}
                </h2>
                
                {caseStudy.metadata?.project_overview && (
                  <p className="text-gray-600 mb-6">
                    {caseStudy.metadata.project_overview}
                  </p>
                )}

                {caseStudy.metadata?.related_services && caseStudy.metadata.related_services.length > 0 && (
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Services:</div>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.metadata.related_services.map((service, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {service.metadata?.service_name || service.title}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <Link 
                  href={`/case-studies/${caseStudy.slug}`}
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Read Full Case Study
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}