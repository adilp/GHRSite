import Link from 'next/link';

type HeaderProps = {
  isLoggedIn?: boolean;
};

export default function Header({ isLoggedIn = false }: HeaderProps) {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-light tracking-wide text-gray-800 hover:text-gray-600 transition-colors">
          Rotary Club
        </Link>
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">Home</Link>
          <Link href="/news" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">News</Link>
          <Link href="/events" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">Events</Link>
          
          {isLoggedIn ? (
            <>
              <Link href="/poc-dashboard" className="px-6 py-2.5 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors font-medium">Dashboard</Link>
              <button className="text-gray-600 hover:text-gray-800 font-medium transition-colors">Logout</button>
            </>
          ) : (
            <Link href="/login" className="px-6 py-2.5 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors font-medium shadow-sm">
              Member Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}