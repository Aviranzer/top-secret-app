import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

export default function Chat({ session }) {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    fetchMessages()

    // האזנה גם לאירועי INSERT וגם לאירועי DELETE בזמן אמת
    const channel = supabase
      .channel('realtime messages')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        setMessages((prev) => [...prev, payload.new])
      })
      .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'messages' }, (payload) => {
        // הסרת ההודעה הנמחקה מהערך המקומי בלייב
        setMessages((prev) => prev.filter((msg) => msg.id !== payload.old.id))
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const fetchMessages = async () => {
    const { data, error } = await supabase.from('messages').select('*').order('created_at', { ascending: true })
    if (!error) setMessages(data)
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const { error } = await supabase.from('messages').insert([
      {
        content: newMessage,
        user_id: session.user.id,
        sender_name: session.user.email.split('@')[0],
      },
    ])

    if (error) console.error(error)
    else setNewMessage('')
  }

  // פונקציית המחיקה
  const deleteMessage = async (id) => {
    const { error } = await supabase.from('messages').delete().eq('id', id)
    if (error) console.error('Error deleting message:', error.message)
  }

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', height: '90vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Top Secret 🤫</h2>
        <button onClick={() => supabase.auth.signOut()}>התנתק</button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', border: '1px solid #ccc', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
        {messages.map((msg) => {
          const isMe = msg.user_id === session.user.id
          return (
            <div key={msg.id} style={{ textAlign: isMe ? 'right' : 'left', margin: '8px 0' }}>
              <div style={{ 
                display: 'inline-block', 
                padding: '8px 12px', 
                borderRadius: '12px', 
                backgroundColor: isMe ? '#0084ff' : '#e4e6eb',
                color: isMe ? '#fff' : '#000',
                position: 'relative'
              }}>
                <small style={{ display: 'block', fontSize: '0.7em', opacity: 0.8 }}>{msg.sender_name}</small>
                
                <span style={{ marginLeft: '10px' }}>{msg.content}</span>

                {/* כפתור מחיקה שמופיע רק על ההודעות שלך */}
                {isMe && (
                  <button 
                    onClick={() => deleteMessage(msg.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ff4d4d',
                      cursor: 'pointer',
                      marginRight: '8px',
                      fontSize: '0.8em',
                      fontWeight: 'bold'
                    }}
                    title="מחק הודעה"
                  >
                    🗑️
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <form onSubmit={sendMessage} style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="כתוב הודעה..."
          style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>שלח</button>
      </form>
    </div>
  )
}