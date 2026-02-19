import Link from 'next/link'
import { getAllArticles, getCategories, getCategorySlug } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'

const categoryIcons: Record<string, string> = {
  'UFOs & UAPs': '🛸',
  'Disappearances': '👤',
  'Cryptids': '🦎',
  'Ancient Mysteries': '🏛️',
  'Space Anomalies': '🌌',
  'Consciousness': '🧠',
  'Ocean Depths': '🌊',
  'Historical Enigmas': '📜',
}

export default function Home() {
  const articles = getAllArticles()
  const categories = getCategories()

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-nebula-600/10 via-void-950 to-void-950" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-nebula-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-signal-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            The universe is full of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-nebula-400 to-signal-400">
              unanswered questions
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Evidence-based exploration of the world&apos;s greatest unsolved mysteries. 
            No sensationalism. Just curiosity, research, and the facts as we know them.
          </p>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-nebula-500 to-nebula-600 hover:from-nebula-400 hover:to-nebula-500 text-white rounded-full font-semibold transition-all duration-300 shadow-lg shadow-nebula-500/20"
          >
            Explore Mysteries
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Featured Articles */}
      {articles.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Latest Investigations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(0, 6).map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Category Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Explore by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(cat => (
            <Link
              key={cat}
              href={`/categories/${getCategorySlug(cat)}`}
              className="group p-6 bg-void-800/40 border border-void-600/20 rounded-xl text-center hover:border-nebula-500/30 hover:bg-void-800/60 transition-all duration-300"
            >
              <span className="text-3xl block mb-3">{categoryIcons[cat] || '✦'}</span>
              <span className="text-sm font-medium text-gray-300 group-hover:text-signal-400 transition-colors">
                {cat}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
