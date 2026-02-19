import { getAllArticles, getCategories } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Articles',
  description: 'Browse all unexplained mystery investigations. From space anomalies to historical enigmas, explore evidence-based analysis of the unknown.',
}

export default function ArticlesPage() {
  const articles = getAllArticles()
  const categories = getCategories()

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">All Articles</h1>
      <p className="text-gray-400 mb-10 max-w-2xl">
        Deep dives into the world&apos;s most compelling unsolved mysteries. Every article is researched, sourced, and written to help you form your own conclusions.
      </p>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <span key={cat} className="px-3 py-1.5 text-xs font-medium text-gray-400 bg-void-800/60 border border-void-600/30 rounded-full">
            {cat}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {articles.length === 0 && (
        <p className="text-gray-500 text-center py-20">No articles yet. Check back soon.</p>
      )}
    </div>
  )
}
