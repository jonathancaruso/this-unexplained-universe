import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDir = path.join(process.cwd(), 'src/content/articles')

export interface ArticleMeta {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readTime: string
  image?: string
  imageAlt?: string
  keywords?: string[]
}

export interface Article extends ArticleMeta {
  content: string
}

function calculateReadTime(content: string): string {
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / 225)
  return `${minutes} min read`
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(articlesDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title || 'Untitled',
    description: data.description || '',
    date: data.date || '',
    category: data.category || 'General',
    readTime: calculateReadTime(content),
    image: data.image || undefined,
    imageAlt: data.imageAlt || undefined,
    keywords: data.keywords || [],
    content,
  }
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(articlesDir)) return []

  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'))
  const articles = files.map(f => {
    const slug = f.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(articlesDir, f), 'utf-8')
    const { data, content } = matter(raw)
    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || '',
      category: data.category || 'General',
      readTime: calculateReadTime(content),
      image: data.image || undefined,
      imageAlt: data.imageAlt || undefined,
      keywords: data.keywords || [],
    }
  })

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(articlesDir)) return []
  return fs.readdirSync(articlesDir).filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''))
}

export function getCategories(): string[] {
  return [
    'UFOs & UAPs',
    'Disappearances',
    'Cryptids',
    'Ancient Mysteries',
    'Space Anomalies',
    'Consciousness',
    'Ocean Depths',
    'Historical Enigmas',
  ]
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getAllArticles().filter(a => a.category === category)
}

export function getCategorySlug(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function getCategoryFromSlug(slug: string): string | undefined {
  return getCategories().find(c => getCategorySlug(c) === slug)
}
