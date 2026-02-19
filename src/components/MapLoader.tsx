'use client'

import dynamic from 'next/dynamic'

const MysteryMap = dynamic(() => import('@/components/MysteryMap'), { ssr: false })

export default function MapLoader() {
  return <MysteryMap />
}
