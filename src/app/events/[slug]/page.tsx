'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import eventsData from '@/mock-data/events.json';
import Header from '@/components/Header';

export default function EventDetailPage() {
  const params = useParams();
  const event = eventsData.find(e => e.slug === params.slug);
  const [isAttending, setIsAttending] = useState(false);
  
  // For POC, we'll simulate logged-in status with a simple variable
  const isLoggedIn = true; 

  if (!event) {
    return <div>Event not found.</div>;
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <div className="container mx-auto px-6 py-8">
        <article>
          <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
          <div className="text-lg text-gray-600 mb-4">
            <p>{new Date(event.eventDate).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
            <p>{event.location}</p>
          </div>
          <img src={event.imageUrl} alt={event.title} className="w-full h-96 object-cover rounded-lg mb-8" />
          
          {isLoggedIn && (
            <div className="mb-8">
              <button 
                onClick={() => setIsAttending(true)} 
                disabled={isAttending}
                className={`w-full md:w-auto px-8 py-3 font-bold rounded-md text-white transition-colors ${
                  isAttending 
                  ? 'bg-green-600 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isAttending ? "You are Attending!" : "I'm Attending"}
              </button>
            </div>
          )}
          
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: event.description }} />
        </article>
      </div>
    </>
  );
}