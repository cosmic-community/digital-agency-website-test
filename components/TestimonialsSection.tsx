import { Testimonial } from '@/types'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const renderStars = (rating: string) => {
    const numStars = parseInt(rating)
    return (
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < numStars ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-8">
              {testimonial.metadata?.rating && 
                renderStars(testimonial.metadata.rating.key)
              }
              
              {testimonial.metadata?.testimonial_text && (
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.metadata.testimonial_text}"
                </blockquote>
              )}
              
              <div className="flex items-center">
                {testimonial.metadata?.client_photo && (
                  <img
                    src={`${testimonial.metadata.client_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata?.client_name || 'Client'}
                    width="60"
                    height="60"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                )}
                
                <div>
                  {testimonial.metadata?.client_name && (
                    <div className="font-semibold text-gray-900">
                      {testimonial.metadata.client_name}
                    </div>
                  )}
                  
                  <div className="text-sm text-gray-600">
                    {testimonial.metadata?.job_title && testimonial.metadata?.company_name ? (
                      `${testimonial.metadata.job_title} at ${testimonial.metadata.company_name}`
                    ) : testimonial.metadata?.job_title ? (
                      testimonial.metadata.job_title
                    ) : testimonial.metadata?.company_name ? (
                      testimonial.metadata.company_name
                    ) : (
                      'Verified Client'
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}