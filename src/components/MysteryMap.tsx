'use client'

import { useState, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Link from 'next/link'
import 'leaflet/dist/leaflet.css'
import { mysteries, categoryColors, type Category } from '@/data/mysteries'

function createIcon(color: string) {
  return L.divIcon({
    className: '',
    html: `<div style="width:14px;height:14px;background:${color};border:2px solid #fff;border-radius:50%;box-shadow:0 0 6px ${color}88;"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -10],
  })
}

const allCategories = Object.keys(categoryColors) as Category[]

export default function MysteryMap() {
  const [active, setActive] = useState<Set<Category>>(new Set(allCategories))
  const [search, setSearch] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return mysteries.filter(
      (m) => active.has(m.category) && (!q || m.name.toLowerCase().includes(q))
    )
  }, [active, search])

  const toggle = (cat: Category) => {
    setActive((prev) => {
      const next = new Set(prev)
      next.has(cat) ? next.delete(cat) : next.add(cat)
      return next
    })
  }

  return (
    <div className="relative w-full h-[calc(100vh-73px)]">
      {/* Filter Panel Toggle (mobile) */}
      <button
        onClick={() => setPanelOpen(!panelOpen)}
        className="md:hidden absolute top-3 right-3 z-[1000] bg-void-800/90 backdrop-blur text-white px-3 py-2 rounded-lg text-sm border border-void-600"
      >
        {panelOpen ? 'Close' : 'Filters'}
      </button>

      {/* Filter Panel */}
      <div
        className={`absolute top-0 left-0 z-[1000] bg-void-900/95 backdrop-blur-md border-r border-void-700/50 p-4 w-64 h-full overflow-y-auto transition-transform ${
          panelOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <h2 className="text-white font-bold text-sm mb-3">Filter Mysteries</h2>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-void-800 border border-void-600 rounded px-3 py-2 text-sm text-white placeholder-gray-500 mb-4 focus:outline-none focus:border-signal-400"
        />
        <div className="space-y-2">
          {allCategories.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2 cursor-pointer text-sm text-gray-300 hover:text-white"
            >
              <input
                type="checkbox"
                checked={active.has(cat)}
                onChange={() => toggle(cat)}
                className="sr-only"
              />
              <span
                className="w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0"
                style={{
                  borderColor: categoryColors[cat],
                  backgroundColor: active.has(cat) ? categoryColors[cat] : 'transparent',
                }}
              >
                {active.has(cat) && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
              {cat}
            </label>
          ))}
        </div>
        <p className="text-gray-500 text-xs mt-4">{filtered.length} mysteries shown</p>
      </div>

      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="w-full h-full"
        style={{ background: '#0a0a14' }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {filtered.map((m, i) => (
          <Marker key={i} position={[m.lat, m.lng]} icon={createIcon(categoryColors[m.category])}>
            <Popup>
              <div className="text-sm max-w-[250px]">
                <p className="font-bold text-base mb-1" style={{ color: '#fff' }}>{m.name}</p>
                <span
                  className="inline-block px-2 py-0.5 rounded text-xs text-white mb-2"
                  style={{ backgroundColor: categoryColors[m.category] }}
                >
                  {m.category}
                </span>
                <p className="text-gray-700 text-xs mb-2">{m.summary}</p>
                {m.slug && (
                  <a href={`/articles/${m.slug}`} className="text-blue-600 text-xs font-medium hover:underline">
                    Read full article →
                  </a>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
