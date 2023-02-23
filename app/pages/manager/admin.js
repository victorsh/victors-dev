import { useEffect, useState } from 'react'
import { withSessionSsr } from "@/utils/session"
import { formatDate } from '@/utils/utility'
import Header from '@/components/manager/Header'
import styles from "@/styles/manager/Admin.module.css"

export default function Admin(props) {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const updateNewMessage = async (e) => {
    e.preventDefault()
    setNewMessage(e.target.value)
  }

  const submitMessage = async () => {
    try {
      const messages = await fetch('/api/manager/message', {
        method: 'POST',
        body: JSON.stringify({message: newMessage, user: props.user.whois})
      })
      setNewMessage('')
      await getMessages()
    } catch (error) {
      console.error(error)
    }
  }

  const getMessages = async () => {
    try {
      let messages = await fetch('/api/manager/message', {
        method: 'GET',
      })
      messages = await messages.json()
      setMessages(messages['messages'])
    } catch (error) {
      console.error(error)
    }
  }

  const deleteMessage = async (e) => {
    e.preventDefault()
    try {
      const id = e.target.getAttribute('data-index')
      let messages = await fetch('/api/manager/message', {
        method: 'DELETE',
        body: JSON.stringify({id: id})
      })
      messages = await messages.json()
      await getMessages()
    } catch (error) {
      console.error(error)
    }
  }

  const displayMessages = () => {
    return messages.map(message => (
      <li key={message.id} className={message.user === props.user.whois ? styles.messages_row_user : styles.messages_row}>
        <div>{message.user === props.user.whois}</div>
        <div className={styles.message_message}>{message.message}</div>
        <div className={styles.message_user}>{message.user}</div>
        <div className={styles.message_created_at}>{formatDate(message.created_at)}</div>
        <button data-index={message.id} onClick={deleteMessage}>Delete</button>
      </li>
    ))
  }

  useEffect(() => {
    getMessages()
  }, [])
  return (
    <div className={styles.message_wrapper}>
      <Header user={props.user}/>
      <div className={styles.message_container}>
        <label>Submit a new message</label>
        <textarea value={newMessage} onChange={updateNewMessage}/>
        <button onClick={submitMessage}>Submit</button>
      </div>
      <ul className={styles.messages_display}>
        {displayMessages()}
      </ul>
    </div>
  )
}

export const getServerSideProps = withSessionSsr(async function ({req, res}) {
  const user = req.session.user

  if (user === undefined) {
    res.setHeader('location', '/manager/login')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }

  return { props: { user: req.session.user }}
})
