import Header from '@/components/Header';
import Link from 'next/link';

export default function PocDashboardPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold">Welcome, Member!</h1>
        <p className="text-xl text-gray-600 mt-2">This is your member dashboard.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <Link href="/poc-directory" className="block p-8 bg-blue-100 rounded-lg hover:bg-blue-200">
            <h2 className="text-2xl font-bold text-blue-800">Member Directory</h2>
            <p className="mt-2 text-blue-700">Find contact information for fellow members.</p>
          </Link>
          <Link href="/poc-profile" className="block p-8 bg-green-100 rounded-lg hover:bg-green-200">
            <h2 className="text-2xl font-bold text-green-800">My Profile</h2>
            <p className="mt-2 text-green-700">View your membership information.</p>
          </Link>
        </div>
      </div>
    </>
  );
}