import { notFound } from 'next/navigation'
import { getArticlesByCategory, getCategoryFromSlug, getCategories, getCategorySlug } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import type { Metadata } from 'next'

type PageProps = { params: Promise<{ category: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params
  const category = getCategoryFromSlug(slug)
  if (!category) return {}
  return {
    title: `${category} Articles`,
    description: `Explore unexplained mysteries in the ${category} category. Evidence-based investigations and analysis.`,
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params
  const category = getCategoryFromSlug(slug)
  if (!category) notFound()

  const articles = getArticlesByCategory(category)

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{category}</h1>
      <p className="text-gray-400 mb-10">
        All investigations related to {category.toLowerCase()}.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {articles.length === 0 && (
        <p className="text-gray-500 text-center py-20">No articles in this category yet. Check back soon.</p>
      )}
    </div>
  )
}

export function generateStaticParams() {
  return getCategories().map(cat => ({ category: getCategorySlug(cat) }))
}
