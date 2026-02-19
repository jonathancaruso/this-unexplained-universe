import { redirect } from 'next/navigation'

export default function TodayPage() {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  redirect(`/today/${month}-${day}`)
}
