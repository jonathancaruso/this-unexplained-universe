import type { Metadata } from 'next'
import MapLoader from '@/components/MapLoader'

export const metadata: Metadata = {
  title: 'Interactive Mystery Map: Unexplained Events Around the World',
  description:
    'Explore an interactive map of the world\'s greatest unsolved mysteries, from UFO sightings to ancient enigmas. Filter by category and discover what happened where.',
}

export default function MapPage() {
  return <MapLoader />
}
