import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'
import { getArticleBySlug, getAllSlugs } from '@/lib/articles'
import TableOfContents from '@/components/TableOfContents'
import FAQSchema from '@/components/FAQSchema'
import { extractH2s, extractFAQs } from '@/lib/markdown-utils'
import type { Metadata } from 'next'

function extractText(node: React.ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (!node) return ''
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (typeof node === 'object' && node !== null && 'props' in node) {
    const el = node as { props: { children?: React.ReactNode } }
    return extractText(el.props.children)
  }
  return ''
}

const markdownComponents: Components = {
  img: ({ src, alt }) => (
    <figure className="my-8">
      <Image src={String(src || '')} alt={alt || ''} width={800} height={500} className="w-full rounded-xl" loading="lazy" />
      {alt && <figcaption className="mt-2 text-center text-sm text-gray-500 italic">{alt}</figcaption>}
    </figure>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 pl-6 pr-4 py-4 bg-void-800/50 border-l-4 border-nebula-500/50 rounded-r-lg italic text-gray-300">
      {children}
    </blockquote>
  ),
  h2: ({ children }) => {
    const text = extractText(children)
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    return (
      <h2 id={id} className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 pb-3 border-b border-void-600/30 scroll-mt-20">
        {children}
      </h2>
    )
  },
  h3: ({ children }) => (
    <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mt-8 mb-4">{children}</h3>
  ),
  ul: ({ children }) => <ul className="my-4 space-y-2">{children}</ul>,
  ol: ({ children }) => <ol className="my-4 space-y-2 list-decimal list-inside">{children}</ol>,
  li: ({ children }) => (
    <li className="flex items-start gap-2 text-gray-300 ml-4">
      <span className="text-nebula-400 mt-1.5 flex-shrink-0">•</span>
      <span className="flex-1">{children}</span>
    </li>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-signal-400 hover:text-signal-300 underline decoration-signal-400/30 hover:decoration-signal-300 underline-offset-2 transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  p: ({ children }) => <p className="my-4 text-gray-300 leading-relaxed">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
  hr: () => <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-void-500 to-transparent" />,
  table: ({ children }) => (
    <div className="my-8 overflow-hidden rounded-xl border border-void-600/30">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-void-800">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-200">{children}</th>
  ),
  tbody: ({ children }) => <tbody className="divide-y divide-void-700">{children}</tbody>,
  tr: ({ children }) => <tr className="hover:bg-void-800/50 transition-colors">{children}</tr>,
  td: ({ children }) => <td className="px-4 py-3 text-gray-300">{children}</td>,
}

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      images: article.image ? [{ url: article.image }] : undefined,
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const tocItems = extractH2s(article.content)
  const faqs = extractFAQs(article.content)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { '@type': 'Organization', name: 'This Unexplained Universe' },
    image: article.image,
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-signal-400 text-sm mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          All Articles
        </Link>

        <article className="bg-void-800/30 border border-void-600/20 rounded-2xl overflow-hidden">
          {article.image && (
            <div className="relative h-64 md:h-80">
              <Image
                src={article.image}
                alt={article.imageAlt || article.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 896px) 100vw, 896px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void-900 via-void-900/50 to-transparent" />
            </div>
          )}
          <header className="px-8 md:px-12 py-10 md:py-14 -mt-20 relative">
            <span className="bg-nebula-500/20 text-nebula-300 text-xs font-medium px-3 py-1 rounded-full border border-nebula-500/30">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4 leading-tight">
              {article.title}
            </h1>
            {article.description && (
              <p className="text-gray-400 text-lg max-w-2xl">{article.description}</p>
            )}
            <div className="flex items-center gap-4 text-gray-500 text-sm mt-4">
              <span>{article.readTime}</span>
              {article.date && <span>Published {article.date}</span>}
            </div>
          </header>

          <div className="px-8 md:px-12 py-10 md:py-12 border-t border-void-600/20">
            <TableOfContents items={tocItems} />
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {article.content}
            </ReactMarkdown>
          </div>

          <div className="px-8 md:px-12 py-8 bg-void-800/50 border-t border-void-600/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-white">Want to explore more mysteries?</p>
                <p className="text-gray-400 text-sm">We&apos;ve got plenty more rabbit holes to go down.</p>
              </div>
              <Link
                href="/articles"
                className="px-6 py-2.5 bg-gradient-to-r from-nebula-500 to-nebula-600 hover:from-nebula-400 hover:to-nebula-500 text-white rounded-full font-medium transition-all duration-300"
              >
                Browse All Articles →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}
