import Link from 'next/link';

type Props = {
  title: string;
  eventDate: string;
  location: string;
  slug: string;
};

export default function EventCard({ title, eventDate, location, slug }: Props) {
  return (
    <Link href={`/events/${slug}`} className="group block">
      <div className="bg-white rounded-2xl card-shadow card-hover p-8 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
            {new Date(eventDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-amber-500 transition-colors"></div>
        </div>
        <h3 className="text-2xl font-light text-gray-800 mb-3 group-hover:text-gray-600 transition-colors">{title}</h3>
        <p className="text-gray-500 font-medium">{location}</p>
      </div>
    </Link>
  );
}