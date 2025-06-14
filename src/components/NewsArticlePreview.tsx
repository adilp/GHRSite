import Link from 'next/link';

type Props = {
  title: string;
  imageUrl: string;
  excerpt: string;
  slug: string;
};

export default function NewsArticlePreview({ title, imageUrl, excerpt, slug }: Props) {
  return (
    <Link href={`/news/${slug}`} className="group block h-full">
      <article className="luxury-card h-full flex flex-col">
        <div className="relative aspect-[16/10] overflow-hidden image-overlay">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#003da5] text-sm font-medium rounded-full">
              Community Impact
            </span>
          </div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-[#f7a81b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>3 min read</span>
          </div>
          
          <h3 className="text-2xl font-medium text-[#003da5] mb-4 group-hover:text-[#019fcb] transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed flex-1">{excerpt}</p>
          
          <div className="mt-6 flex items-center justify-between">
            <span className="text-[#003da5] font-medium group-hover:text-[#019fcb] transition-colors flex items-center">
              Read Story
              <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            {/* Author Avatar */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}