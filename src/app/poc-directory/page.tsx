import Header from '@/components/Header';
import membersData from '@/mock-data/members.json';

export default function PocDirectoryPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-8">Member Directory</h1>
        {/* Non-functional search/filter controls for UI display only */}
        <div className="mb-8 flex space-x-4">
          <input type="search" placeholder="Search by name..." className="flex-grow px-4 py-2 border rounded-md" />
          <select className="px-4 py-2 border rounded-md">
            <option>Filter by Status</option>
            <option>Active</option>
            <option>Honorary</option>
          </select>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-600">Name</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-600">Email</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-600">Phone</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {membersData.map((member, index) => (
                <tr key={member.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4">{member.full_name}</td>
                  <td className="px-6 py-4">{member.email}</td>
                  <td className="px-6 py-4">{member.phone_number}</td>
                  <td className="px-6 py-4">{member.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}