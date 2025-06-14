'use client';
import { useParams } from 'next/navigation';
import newsData from '@/mock-data/news.json';
import Header from '@/components/Header';

export default function NewsArticlePage() {
  const params = useParams();
  const article = newsData.find(a => a.slug === params.slug);

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-8">
        <article>
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-gray-500 mb-4">Published on {new Date(article.publishedDate).toLocaleDateString()}</p>
          <img src={article.imageUrl} alt={article.title} className="w-full h-96 object-cover rounded-lg mb-8" />
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.body }} />
        </article>
      </div>
    </>
  );
}