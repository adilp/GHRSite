import Image from 'next/image'
import Header from '@/components/Header'
import EventCard from '@/components/EventCard'
import ProjectCard from '@/components/ProjectCard'
import NewsArticlePreview from '@/components/NewsArticlePreview'
import newsData from '@/mock-data/news.json'
import eventsData from '@/mock-data/events.json'
import projectsData from '@/mock-data/projects.json'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        {/* Hero Section */}
        <section className='relative h-[50vh] w-full'>
          {/* Background image container */}
          <div className='absolute inset-0 z-0 blur-[2px]'>
            <Image
              // src='/hero2.png'
              src='https://images.unsplash.com/photo-1735679356705-7c06b780c7a4?q=80&w=4240&auto=format&fit=crop'
              alt='Community volunteers'
              fill
              className='object-cover object-center'
              priority
            />
            {/* Combined gradient: white fade at top, blue tint at bottom */}
            <div className='absolute inset-0 bg-gradient-to-b from-white via-white/88 via-white/90 to-rotary-blue/40' />
          </div>

          {/* Content */}
          <div className='relative z-10 flex flex-col items-center justify-center h-full text-rotary-blue'>
            <h1 className='text-6xl md:text-7xl font-sans mb-4 text-center'>
              Rotary Club of Greater Hoover
            </h1>
            <p className='text-2xl md:text-3xl'>Service Above Self</p>
          </div>
        </section>

        {/* About Us / Our Mission Section */}
        <section className='relative overflow-hidden bg-off-white h-[50vh] flex items-center'>
          {/* Background logo watermark */}
          <div className='absolute inset-0 flex items-center justify-center opacity-5'>
            <Image
              src='/rotary-international-7.svg'
              alt=''
              width={600}
              height={600}
            />
          </div>

          <div className='container mx-auto px-4 relative z-10'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              {/* Left column - Text */}
              <div>
                <p className='text-rotary-blue uppercase tracking-wide mb-2'>
                  Our Mission
                </p>
                <h2 className='text-4xl md:text-5xl font-serif mb-6'>
                  Connecting for Good
                </h2>
                <p className='text-gray-700 text-lg leading-relaxed'>
                  The Rotary Club of Greater Hoover aims to be  
                  a beacon of service in our community. We are neighbors,
                  friends, and leaders who share a passion for making a
                  difference through meaningful service projects, fellowship,
                  and lasting friendships. Our members come from all walks of
                  life, united by our commitment to &quot;Service Above
                  Self&quot; and our dedication to creating positive change both
                  locally and globally.
                </p>
              </div>

              {/* Right column - Image grid */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='luxury-card overflow-hidden'>
                  <Image
                    // src='https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&h=200&fit=crop'
                    src='https://images.unsplash.com/photo-1627655128406-0fb41ddf4155?q=300&w=200&auto=format&fit=crop'
                    alt='Club meeting'
                    width={300}
                    height={200}
                    className='w-full h-32 object-cover'
                  />
                </div>
                <div className='luxury-card overflow-hidden'>
                  <Image
                    src='https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=200&fit=crop'
                    alt='Social event'
                    width={300}
                    height={200}
                    className='w-full h-32 object-cover'
                  />
                </div>
                <div className='luxury-card overflow-hidden'>
                  <Image
                    src='https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop'
                    alt='Volunteer activity'
                    width={300}
                    height={200}
                    className='w-full h-32 object-cover'
                  />
                </div>
                <div className='luxury-card overflow-hidden'>
                  <Image
                    src='https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=200&fit=crop'
                    alt='Community service'
                    width={300}
                    height={200}
                    className='w-full h-32 object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Projects Section */}
        <section className='section-spacing bg-white'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-serif mb-4'>
                Our Impactful Projects
              </h2>
              <p className='text-xl text-gray-600'>
                Making a difference through community service and global
                initiatives
              </p>
            </div>

            {/* Projects Grid with horizontal scroll on mobile */}
            <div className='flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible'>
              {projectsData.map((project) => (
                <div key={project.id} className='flex-shrink-0 w-80 md:w-auto'>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className='section-spacing bg-off-white'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-serif mb-4'>
                Join Our Next Event
              </h2>
              <p className='text-xl text-gray-600'>
                Connect, serve, and make a difference together
              </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
              {eventsData.slice(0, 3).map((event) => (
                <EventCard key={event.slug} {...event} />
              ))}
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
