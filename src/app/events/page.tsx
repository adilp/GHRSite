import Header from '@/components/Header';
import EventCard from '@/components/EventCard';
import eventsData from '@/mock-data/events.json';

export default function EventsHubPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-6 pt-32 pb-8">
        <h1 className="text-4xl font-bold mb-8">Club Events</h1>
        <div className="space-y-4">
          {eventsData.map(event => (
            <EventCard key={event.slug} {...event} />
          ))}
        </div>
      </div>
    </>
  );
}