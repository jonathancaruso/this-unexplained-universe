'use client'

import type { TOCItem } from '@/lib/markdown-utils'

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  if (items.length < 3) return null

  return (
    <nav className="mb-10 p-6 bg-void-800/50 border border-void-600/30 rounded-xl glow-sm">
      <h2 className="text-lg font-bold text-nebula-300 mb-3 flex items-center gap-2">
        <span className="text-xl">◈</span> In This Article
      </h2>
      <ol className="space-y-1.5 list-decimal list-inside">
        {items.map((item) => (
          <li key={item.id} className="text-gray-400">
            <a
              href={`#${item.id}`}
              className="text-gray-300 hover:text-signal-400 hover:underline underline-offset-2 transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
