import { getServices } from '@/lib/cosmic'
import { Service } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Digital Agency',
  description: 'Explore our comprehensive digital services including web development, UI/UX design, and digital strategy consulting.',
}

export default async function ServicesPage() {
  const services = await getServices() as Service[]

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed in the modern marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {service.metadata?.featured_image && (
                <div className="aspect-video">
                  <img
                    src={`${service.metadata.featured_image.imgix_url}?w=600&h=340&fit=crop&auto=format,compress`}
                    alt={service.metadata?.service_name || service.title}
                    width="600"
                    height="340"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.metadata?.service_name || service.title}
                </h2>
                
                {service.metadata?.short_description && (
                  <p className="text-gray-600 mb-6">
                    {service.metadata.short_description}
                  </p>
                )}

                {service.metadata?.full_description && (
                  <div 
                    className="text-gray-600 mb-6 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: service.metadata.full_description }}
                  />
                )}

                {service.metadata?.key_features && service.metadata.key_features.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.metadata.key_features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.metadata?.starting_price && (
                  <div className="text-2xl font-bold text-primary-600 mb-4">
                    Starting at {service.metadata.starting_price}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}