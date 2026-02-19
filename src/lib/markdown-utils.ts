export interface TOCItem {
  id: string
  text: string
}

export interface FAQItem {
  question: string
  answer: string
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function extractH2s(markdown: string): TOCItem[] {
  const lines = markdown.split('\n')
  const items: TOCItem[] = []
  for (const line of lines) {
    const match = line.match(/^## (.+)$/)
    if (match) {
      const text = match[1].trim()
      items.push({ id: slugify(text), text })
    }
  }
  return items
}

export function extractFAQs(markdown: string): FAQItem[] {
  const faqSectionMatch = markdown.match(/## Frequently Asked Questions\n([\s\S]*?)(?=\n## |\n---|\n\*[A-Z]|\n\*Have|\n\*This|\nReady to|\nGot questions|\n\[|\n\*\*|$)/)
  if (!faqSectionMatch) return []

  const section = faqSectionMatch[1]
  const faqs: FAQItem[] = []
  const parts = section.split(/\n### /).filter(Boolean)

  for (const part of parts) {
    const lines = part.trim().split('\n')
    const question = lines[0].replace(/\?*$/, '?').trim()
    const answer = lines
      .slice(1)
      .map(l => l.trim())
      .filter(Boolean)
      .join(' ')
      .trim()
    if (question && answer) {
      faqs.push({ question, answer })
    }
  }

  return faqs
}
