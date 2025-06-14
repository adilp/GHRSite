import Header from '@/components/Header';
import EventCard from '@/components/EventCard';
import NewsArticlePreview from '@/components/NewsArticlePreview';
import newsData from '@/mock-data/news.json';
import eventsData from '@/mock-data/events.json';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden luxury-gradient">
          <div className="container mx-auto px-8 py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl md:text-7xl font-light tracking-tight text-gray-800 mb-8">
                Service Above Self
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                Join leaders, exchange ideas, and take action to make a positive impact in our community and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 font-medium text-lg">
                  Learn More
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-medium text-lg">
                  Join Today
                </button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-gray-100/30"></div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-gray-800 mb-6">A Legacy of Service</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  For over a century, Rotary has connected people from all continents and cultures to advance world understanding, goodwill, and peace.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-10 h-10 bg-amber-500 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-light text-gray-800 mb-4">Community Impact</h3>
                  <p className="text-gray-600 leading-relaxed">Making a difference in local communities through service projects and initiatives.</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-light text-gray-800 mb-4">Global Network</h3>
                  <p className="text-gray-600 leading-relaxed">Connecting with over 1.4 million members worldwide to create lasting change.</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-10 h-10 bg-green-500 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-light text-gray-800 mb-4">Leadership Development</h3>
                  <p className="text-gray-600 leading-relaxed">Developing leadership skills and professional connections through fellowship.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Upcoming Events</h2>
                <p className="text-xl text-gray-600">Join us for meaningful gatherings and service opportunities</p>
              </div>
              <div className="grid gap-8">
                {eventsData.map(event => (
                  <EventCard key={event.slug} {...event} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Latest News</h2>
                <p className="text-xl text-gray-600">Stay updated with our community impact and achievements</p>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                {newsData.map(article => (
                  <NewsArticlePreview key={article.slug} {...article} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
