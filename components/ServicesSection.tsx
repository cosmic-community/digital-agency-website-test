import Link from 'next/link'
import { Service } from '@/types'

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed in the modern marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              {service.metadata?.featured_image && (
                <div className="mb-6">
                  <img
                    src={`${service.metadata.featured_image.imgix_url}?w=400&h=240&fit=crop&auto=format,compress`}
                    alt={service.metadata?.service_name || service.title}
                    width="400"
                    height="240"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.metadata?.service_name || service.title}
              </h3>
              
              {service.metadata?.short_description && (
                <p className="text-gray-600 mb-6">
                  {service.metadata.short_description}
                </p>
              )}

              {service.metadata?.key_features && service.metadata.key_features.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {service.metadata.key_features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex items-center justify-between">
                {service.metadata?.starting_price && (
                  <div className="text-2xl font-bold text-primary-600">
                    Starting at {service.metadata.starting_price}
                  </div>
                )}
                
                <Link 
                  href={`/services/${service.slug}`}
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}