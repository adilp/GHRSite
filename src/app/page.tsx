import Image from 'next/image'
import Header from '@/components/Header'
import EventCard from '@/components/EventCard'
import NewsArticlePreview from '@/components/NewsArticlePreview'
import newsData from '@/mock-data/news.json'
import eventsData from '@/mock-data/events.json'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className='min-h-screen pt-20'>
        {/* Hero Section */}
        <section className='relative overflow-hidden'>
          {/* Background image with overlay */}
          <div className='absolute inset-0 blur-[8px]'>
            <Image
              src='https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop'
              // src='https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?q=80&w=3000&auto=format&fit=crop'
              // src='https://images.unsplash.com/photo-1603478804503-dc909c7f5ce5?q=80&w=3070&auto=format&fit=crop'
              alt='Rotary meeting'
              width={2070}
              height={1200}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent'></div>
          </div>

          <div className='relative z-10 container mx-auto px-8 py-32'>
            <div className='max-w-2xl'>
              <h1 className='text-5xl md:text-6xl font-light text-white mb-6 leading-tight'>
                Service Above Self
              </h1>
              <p className='text-xl text-white/90 mb-8 leading-relaxed'>
                Join us in making a difference. We are neighbors, friends, and
                leaders who share a passion for community service and
                friendship.
              </p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <a
                  href='/contact'
                  className='inline-flex items-center justify-center px-8 py-3 bg-[#f7a81b] text-white rounded-full hover:bg-[#e89a0a] transition-colors font-medium'
                >
                  Contact Us
                </a>
                <a
                  href='/donate'
                  className='inline-flex items-center justify-center px-8 py-3 bg-[#003da5] text-white rounded-full hover:bg-[#002d7a] transition-colors font-medium'
                >
                  Donate Online
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className='py-24 bg-white'>
          <div className='container mx-auto px-8'>
            <div className='max-w-6xl mx-auto'>
              <div className='text-center mb-16'>
                <h2 className='text-4xl font-light text-gray-800 mb-6'>
                  A Legacy of Service
                </h2>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                  For over a century, Rotary has connected people from all
                  continents and cultures to advance world understanding,
                  goodwill, and peace.
                </p>
              </div>
              <div className='grid md:grid-cols-3 gap-12'>
                <div className='luxury-card p-8 text-center group'>
                  <div className='w-24 h-24 rotary-gradient rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300'>
                    <svg
                      className='w-12 h-12 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-2xl font-medium text-[#003da5] mb-4'>
                    Community Impact
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Making a difference in local communities through service
                    projects and initiatives that transform lives.
                  </p>
                </div>
                <div className='luxury-card p-8 text-center group'>
                  <div className='w-24 h-24 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300'>
                    <svg
                      className='w-12 h-12 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-2xl font-medium text-[#003da5] mb-4'>
                    Global Network
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Connecting with over 1.4 million members worldwide to create
                    lasting change and understanding.
                  </p>
                </div>
                <div className='luxury-card p-8 text-center group'>
                  <div className='w-24 h-24 bg-gradient-to-br from-[#019fcb] to-[#0080c0] rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300'>
                    <svg
                      className='w-12 h-12 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-2xl font-medium text-[#003da5] mb-4'>
                    Leadership Development
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Developing leadership skills and professional connections
                    through fellowship and service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className='py-24 luxury-gradient'>
          <div className='container mx-auto px-8'>
            <div className='max-w-6xl mx-auto'>
              <div className='text-center mb-16'>
                <span className='inline-block px-4 py-1 bg-[#f7a81b]/10 text-[#f7a81b] rounded-full text-sm font-medium mb-4'>
                  Join Us
                </span>
                <h2 className='text-5xl font-light text-[#003da5] mb-6 heading-luxury'>
                  Upcoming Events
                </h2>
                <p className='text-xl text-gray-600'>
                  Connect, serve, and make a difference together
                </p>
              </div>
              <div className='grid gap-8'>
                {eventsData.map((event) => (
                  <EventCard key={event.slug} {...event} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className='py-24 bg-white'>
          <div className='container mx-auto px-8'>
            <div className='max-w-6xl mx-auto'>
              <div className='text-center mb-16'>
                <span className='inline-block px-4 py-1 bg-[#003da5]/10 text-[#003da5] rounded-full text-sm font-medium mb-4'>
                  News & Stories
                </span>
                <h2 className='text-5xl font-light text-[#003da5] mb-6 heading-luxury'>
                  Latest Updates
                </h2>
                <p className='text-xl text-gray-600'>
                  Discover how we&apos;re making an impact in our community
                </p>
              </div>
              <div className='grid md:grid-cols-2 gap-12'>
                {newsData.map((article) => (
                  <NewsArticlePreview key={article.slug} {...article} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
