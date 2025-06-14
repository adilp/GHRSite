import Link from 'next/link';

type Props = {
  title: string;
  imageUrl: string;
  excerpt: string;
  slug: string;
};

export default function NewsArticlePreview({ title, imageUrl, excerpt, slug }: Props) {
  return (
    <Link href={`/news/${slug}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden card-shadow card-hover border border-gray-100">
        <div className="aspect-video overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-light text-gray-800 mb-4 group-hover:text-gray-600 transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{excerpt}</p>
          <div className="mt-6 flex items-center text-sm text-gray-500">
            <span>Read more</span>
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}