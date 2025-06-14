import Link from 'next/link';

type Props = {
  title: string;
  eventDate: string;
  location: string;
  slug: string;
};

export default function EventCard({ title, eventDate, location, slug }: Props) {
  const date = new Date(eventDate);
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  
  return (
    <Link href={`/events/${slug}`} className="group block">
      <div className="luxury-card p-0 overflow-hidden">
        <div className="flex">
          {/* Date Block */}
          <div className="w-32 rotary-gradient p-6 flex flex-col items-center justify-center text-white">
            <div className="text-4xl font-light mb-1">{day}</div>
            <div className="text-sm font-medium tracking-wider">{month}</div>
            <div className="text-xs mt-2 opacity-80">{time}</div>
          </div>
          
          {/* Content */}
          <div className="flex-1 p-8">
            <h3 className="text-2xl font-medium text-[#003da5] mb-3 group-hover:text-[#019fcb] transition-colors">
              {title}
            </h3>
            <div className="flex items-center text-gray-600 mb-4">
              <svg className="w-5 h-5 mr-2 text-[#f7a81b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{location}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#003da5] font-medium group-hover:text-[#019fcb] transition-colors flex items-center">
                View Details
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="flex -space-x-2">
                {/* Attendee avatars placeholder */}
                <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-[#f7a81b]/20 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-medium text-[#f7a81b]">+5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}