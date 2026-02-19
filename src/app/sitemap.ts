import type { MetadataRoute } from 'next'
import { getAllArticles, getCategories, getCategorySlug } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://thisunexplaineduniverse.com'
  const articles = getAllArticles()
  const categories = getCategories()

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/articles`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    ...articles.map(a => ({
      url: `${base}/articles/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...categories.map(c => ({
      url: `${base}/categories/${getCategorySlug(c)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
