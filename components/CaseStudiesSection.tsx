import Link from 'next/link'
import { CaseStudy } from '@/types'

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.slice(0, 2).map((caseStudy) => (
            <div key={caseStudy.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                <div className="text-sm text-primary-600 font-medium mb-2">
                  {caseStudy.metadata?.client_name}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {caseStudy.metadata?.project_title || caseStudy.title}
                </h3>
                
                {caseStudy.metadata?.project_overview && (
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {caseStudy.metadata.project_overview}
                  </p>
                )}

                <div className="flex items-center justify-between">
                  {caseStudy.metadata?.project_duration && (
                    <div className="text-sm text-gray-500">
                      Duration: {caseStudy.metadata.project_duration}
                    </div>
                  )}
                  
                  <Link 
                    href={`/case-studies/${caseStudy.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                  >
                    View Case Study
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies" className="btn-primary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}