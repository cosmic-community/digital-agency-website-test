import Link from 'next/link'
import { TeamMember } from '@/types'

interface TeamSectionProps {
  teamMembers: TeamMember[]
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced team of designers, developers, and strategists are dedicated to bringing your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.slice(0, 3).map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              {member.metadata?.profile_photo && (
                <div className="mb-6">
                  <img
                    src={`${member.metadata.profile_photo.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
                    alt={member.metadata?.full_name || member.title}
                    width="120"
                    height="120"
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                </div>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.metadata?.full_name || member.title}
              </h3>
              
              {member.metadata?.job_title && (
                <div className="text-primary-600 font-medium mb-4">
                  {member.metadata.job_title}
                </div>
              )}

              {member.metadata?.years_experience && (
                <div className="text-sm text-gray-600 mb-4">
                  {member.metadata.years_experience} years of experience
                </div>
              )}

              {member.metadata?.bio && (
                <div 
                  className="text-gray-600 mb-6 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: member.metadata.bio }}
                />
              )}

              <div className="flex justify-center space-x-4">
                {member.metadata?.email && (
                  <a
                    href={`mailto:${member.metadata.email}`}
                    className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                )}
                
                {member.metadata?.linkedin_url && (
                  <a
                    href={member.metadata.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/team" className="btn-primary">
            Meet the Full Team
          </Link>
        </div>
      </div>
    </section>
  )
}