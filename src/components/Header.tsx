import Link from 'next/link'

type HeaderProps = {
  isLoggedIn?: boolean
}

export default function Header({ isLoggedIn = false }: HeaderProps) {
  return (
    <header className='glass-effect fixed top-0 left-0 right-0 z-50 border-b border-gray-200/20'>
      <nav className='container mx-auto px-8 py-5 flex justify-between items-center'>
        <Link href='/' className='flex items-center space-x-3 group'>
          {/* Rotary Wheel Logo Placeholder */}
          <div className='w-10 h-10 bg-gradient-to-br from-[#003da5] to-[#019fcb] rounded-full flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500'>
            <span className='text-white font-bold text-xl'>R</span>
          </div>
          <div>
            <h1 className='text-2xl font-light tracking-wide text-[#003da5] group-hover:text-[#019fcb] transition-colors'>
              Greater Hoover Rotary Club
            </h1>
            <p className='text-xs text-gray-500 -mt-1'>Service Above Self</p>
          </div>
        </Link>

        <div className='flex items-center space-x-8'>
          <Link
            href='/'
            className='text-gray-700 hover:text-[#003da5] font-medium transition-colors relative group'
          >
            Home
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f7a81b] group-hover:w-full transition-all duration-300'></span>
          </Link>
          <Link
            href='/news'
            className='text-gray-700 hover:text-[#003da5] font-medium transition-colors relative group'
          >
            News
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f7a81b] group-hover:w-full transition-all duration-300'></span>
          </Link>
          <Link
            href='/events'
            className='text-gray-700 hover:text-[#003da5] font-medium transition-colors relative group'
          >
            Events
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f7a81b] group-hover:w-full transition-all duration-300'></span>
          </Link>

          {isLoggedIn ? (
            <>
              <Link href='/poc-dashboard' className='btn-luxury btn-primary'>
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
                Dashboard
              </Link>
              <button className='text-gray-600 hover:text-[#003da5] font-medium transition-colors'>
                Logout
              </button>
            </>
          ) : (
            <Link
              href='/login'
              className='btn-luxury gold-gradient text-white hover:shadow-lg'
            >
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                />
              </svg>
              Member Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}
