import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-void-900 border-t border-void-700/50 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <span>✦</span> This Unexplained Universe
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Exploring the world&apos;s greatest unsolved mysteries with evidence, analysis, and intellectual curiosity.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Explore</h4>
            <div className="space-y-2">
              <Link href="/articles" className="block text-gray-400 hover:text-signal-400 text-sm transition-colors">All Articles</Link>
              <Link href="/about" className="block text-gray-400 hover:text-signal-400 text-sm transition-colors">About</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Categories</h4>
            <div className="space-y-2">
              <Link href="/categories/space-anomalies" className="block text-gray-400 hover:text-signal-400 text-sm transition-colors">Space Anomalies</Link>
              <Link href="/categories/historical-enigmas" className="block text-gray-400 hover:text-signal-400 text-sm transition-colors">Historical Enigmas</Link>
              <Link href="/categories/disappearances" className="block text-gray-400 hover:text-signal-400 text-sm transition-colors">Disappearances</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-void-700/50 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} This Unexplained Universe. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
