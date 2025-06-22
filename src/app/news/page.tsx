import Header from '@/components/Header';
import NewsArticlePreview from '@/components/NewsArticlePreview';
import newsData from '@/mock-data/news.json';

export default function NewsHubPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-6 pt-24 md:pt-32 pb-8">
        <h1 className="text-4xl font-bold mb-8">Club News</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map(article => (
            <NewsArticlePreview key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </>
  );
}