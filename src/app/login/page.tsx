import Header from '@/components/Header';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-20 flex flex-col items-center">
        <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold text-center mb-4">Member Login</h1>
          <p className="text-center text-gray-600 mb-6">Enter your email to receive a magic login link.</p>
          <input type="email" placeholder="your.email@example.com" className="w-full px-4 py-2 border rounded-md mb-4" />
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Send Magic Link</button>
        </div>
        <div className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <p><span className="font-bold">POC Only:</span> This form is not active.</p>
          <Link href="/poc-dashboard" className="underline font-semibold hover:text-yellow-900">Click here to view the Member Dashboard &rarr;</Link>
        </div>
      </div>
    </>
  );
}