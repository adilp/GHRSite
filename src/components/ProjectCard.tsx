import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ image, title, description, link }: ProjectCardProps) {
  return (
    <div className='luxury-card group overflow-hidden'>
      <div className='relative overflow-hidden'>
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className='w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300'
        />
      </div>
      
      <div className='p-6'>
        <h3 className='text-xl font-serif text-gray-800 mb-3 group-hover:text-rotary-blue transition-colors'>
          {title}
        </h3>
        <p className='text-gray-600 mb-4 leading-relaxed'>
          {description}
        </p>
        <Link 
          href={link}
          className='text-rotary-blue font-medium hover:text-rotary-gold transition-colors inline-flex items-center gap-1'
        >
          Learn More
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </Link>
      </div>
    </div>
  )
}