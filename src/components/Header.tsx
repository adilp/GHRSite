import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='glass-effect absolute top-0 left-0 right-0 z-50 border-b border-gray-200/20'>
      <nav className='container mx-auto px-8 py-5 flex items-center'>
        {/* Logo - Left */}
        <Link href='/' className='flex items-center group'>
          <div className='flex flex-col text-right mr-1'>
            <div className='text-sm text-rotary-blue font-medium font-neo-sans'>
              Greater Hoover
            </div>
            <h1 className='text-3xl font-bold text-rotary-blue font-neo-sans -mt-1'>Rotary</h1>
            <div className='text-sm text-rotary-blue font-medium font-neo-sans -mt-1'>
              Club
            </div>
          </div>
          <Image
            src='/rotary-international-7.svg'
            alt='Rotary International Wheel'
            width={56}
            height={56}
            className='w-14 h-14 transform group-hover:rotate-180 transition-transform duration-500'
          />
        </Link>

        {/* Navigation - Center */}
        <div className='flex-1 flex justify-center items-center space-x-8'>
          <Link
            href='/'
            className='text-gray-700 hover:text-rotary-blue font-medium transition-colors relative group'
          >
            Home
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-rotary-gold group-hover:w-full transition-all duration-300'></span>
          </Link>
          <Link
            href='/news'
            className='text-gray-700 hover:text-rotary-blue font-medium transition-colors relative group'
          >
            News
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-rotary-gold group-hover:w-full transition-all duration-300'></span>
          </Link>
          <Link
            href='/events'
            className='text-gray-700 hover:text-rotary-blue font-medium transition-colors relative group'
          >
            Events
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-rotary-gold group-hover:w-full transition-all duration-300'></span>
          </Link>
        </div>

        {/* Donate Button - Right */}
        <button className='bg-rotary-gold text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition'>
          Donate
        </button>
      </nav>
    </header>
  )
}
