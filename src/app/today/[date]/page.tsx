import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { dayEvents } from '@/data/this-day'
import { categoryColors, type Category } from '@/data/mysteries'

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function parseDate(date: string): { month: number; day: number } | null {
  const match = date.match(/^(\d{2})-(\d{2})$/)
  if (!match) return null
  const month = parseInt(match[1], 10)
  const day = parseInt(match[2], 10)
  if (month < 1 || month > 12 || day < 1 || day > 31) return null
  return { month, day }
}

function getPrevNext(month: number, day: number) {
  const d = new Date(2024, month - 1, day)
  const prev = new Date(d)
  prev.setDate(prev.getDate() - 1)
  const next = new Date(d)
  next.setDate(next.getDate() + 1)
  const fmt = (dt: Date) =>
    `${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`
  return { prev: fmt(prev), next: fmt(next) }
}

function getRandomMystery(month: number, day: number) {
  const seed = month * 31 + day
  const idx = seed % dayEvents.length
  return dayEvents[idx]
}

type Props = {
  params: Promise<{ date: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date } = await params
  const parsed = parseDate(date)
  if (!parsed) return { title: 'Not Found' }
  return {
    title: `This Day in Mystery: ${monthNames[parsed.month - 1]} ${parsed.day}`,
    description: `Discover what unexplained events happened on ${monthNames[parsed.month - 1]} ${parsed.day} throughout history.`,
  }
}

export default async function TodayDatePage({ params }: Props) {
  const { date } = await params
  const parsed = parseDate(date)
  if (!parsed) notFound()

  const { month, day } = parsed
  const events = dayEvents.filter((e) => e.month === month && e.day === day)
  const { prev, next } = getPrevNext(month, day)

  return (
    <div className="min-h-screen bg-void-950">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-signal-400 text-sm font-medium tracking-widest uppercase mb-2">
            This Day in Mystery
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {monthNames[month - 1]} {day}
          </h1>
        </div>

        {/* Nav Arrows */}
        <div className="flex justify-between items-center mb-8">
          <Link
            href={`/today/${prev}`}
            className="text-gray-400 hover:text-signal-400 transition-colors flex items-center gap-2 text-sm"
          >
            <span>←</span> Previous Day
          </Link>
          <Link
            href={`/today/${next}`}
            className="text-gray-400 hover:text-signal-400 transition-colors flex items-center gap-2 text-sm"
          >
            Next Day <span>→</span>
          </Link>
        </div>

        {/* Events */}
        {events.length > 0 ? (
          <div className="space-y-6">
            {events.map((event, i) => {
              const color = categoryColors[event.category as Category] || '#6b7280'
              return (
                <div
                  key={i}
                  className="bg-void-900 border border-void-700/50 rounded-xl p-6 hover:border-void-600 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="text-signal-400 font-mono text-2xl font-bold">
                      {event.year}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium text-white flex-shrink-0"
                      style={{ backgroundColor: color }}
                    >
                      {event.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">{event.title}</h2>
                  <p className="text-gray-400 leading-relaxed">{event.description}</p>
                  {event.slug && (
                    <Link
                      href={`/articles/${event.slug}`}
                      className="inline-block mt-3 text-signal-400 text-sm hover:text-signal-300 transition-colors"
                    >
                      Read full article →
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-6">
              No recorded mysteries for this date... yet.
            </p>
            <div className="bg-void-900 border border-void-700/50 rounded-xl p-6 max-w-md mx-auto">
              <p className="text-gray-400 text-sm mb-2">Here's a mystery to explore instead:</p>
              {(() => {
                const random = getRandomMystery(month, day)
                return (
                  <>
                    <h3 className="text-white font-bold text-lg mb-1">{random.title}</h3>
                    <p className="text-gray-500 text-sm mb-2">{random.year}</p>
                    <p className="text-gray-400 text-sm">{random.description}</p>
                    {random.slug && (
                      <Link
                        href={`/articles/${random.slug}`}
                        className="inline-block mt-3 text-signal-400 text-sm hover:text-signal-300"
                      >
                        Read full article →
                      </Link>
                    )}
                  </>
                )
              })()}
            </div>
          </div>
        )}

        {/* Footer nav */}
        <div className="flex justify-center mt-12">
          <Link
            href="/today"
            className="text-gray-500 hover:text-signal-400 text-sm transition-colors"
          >
            Jump to Today
          </Link>
        </div>
      </div>
    </div>
  )
}
