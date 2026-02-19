'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-void-950/90 backdrop-blur-md border-b border-void-700/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">✦</span>
          <span className="font-bold text-lg text-white group-hover:text-signal-400 transition-colors">
            This Unexplained Universe
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/articles" className="text-gray-300 hover:text-signal-400 transition-colors text-sm font-medium">
            Articles
          </Link>
          <Link href="/map" className="text-gray-300 hover:text-signal-400 transition-colors text-sm font-medium">
            Mystery Map
          </Link>
          <Link href="/today" className="text-gray-300 hover:text-signal-400 transition-colors text-sm font-medium">
            This Day
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-signal-400 transition-colors text-sm font-medium">
            About
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-300 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-void-700/50 bg-void-900/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            <Link href="/articles" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-signal-400 transition-colors">
              Articles
            </Link>
            <Link href="/map" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-signal-400 transition-colors">
              Mystery Map
            </Link>
            <Link href="/today" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-signal-400 transition-colors">
              This Day
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-signal-400 transition-colors">
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
