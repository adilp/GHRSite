import Header from '@/components/Header';
import memberData from '@/mock-data/members.json';

export default function PocProfilePage() {
  const myProfile = memberData[0]; // Just showing the first member as "me"
  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-8">My Profile</h1>
        <div className="p-8 bg-white shadow-md rounded-lg">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-500">Full Name</p>
              <p className="text-xl">{myProfile.full_name}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Email</p>
              <p className="text-xl">{myProfile.email}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Phone Number</p>
              <p className="text-xl">{myProfile.phone_number}</p>
            </div>
             <div>
              <p className="text-sm font-semibold text-gray-500">Status</p>
              <p className="text-xl">{myProfile.status}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}