import Link from 'next/link'
import Image from 'next/image'
import type { ArticleMeta } from '@/lib/articles'

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <article className="bg-void-800/40 border border-void-600/20 rounded-xl overflow-hidden hover:border-nebula-500/30 transition-all duration-300 hover:glow-sm">
        {article.image && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={article.image}
              alt={article.imageAlt || article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void-900/80 to-transparent" />
          </div>
        )}
        <div className="p-5">
          <span className="text-xs font-medium text-nebula-400 uppercase tracking-wider">
            {article.category}
          </span>
          <h3 className="text-lg font-semibold text-white mt-2 mb-2 group-hover:text-signal-400 transition-colors leading-snug">
            {article.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
            {article.description}
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-gray-500">
            <span>{article.readTime}</span>
            <span>·</span>
            <span>{article.date}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
