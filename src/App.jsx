import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Auth'
import Chat from './Chat'
import StoryBook from './StoryBook'

export default function App() {
  const [session, setSession] = useState(null)
  const [showBook, setShowBook] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) return <Auth />

  return showBook ? (
    <StoryBook onBack={() => setShowBook(false)} />
  ) : (
    <Chat session={session} onOpenBook={() => setShowBook(true)} />
  )
}