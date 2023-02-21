import { useEffect, useState } from 'react'
import { withSessionSsr } from "@/utils/session"
import Cookies from 'js-cookie'
import Link from 'next/link'
import styles from "@/styles/manager/Admin.module.css"

const getMessages = async () => {
  try {
    const messages = await fetch('/api/manager/message', {
      method: 'GET',
      body: JSON.stringify({message: 'hi', user: 'vic'})
    })
    return messages
  } catch (error) {
    console.error(error)
  }
}

const submitMessage = async () => {
  try {
    const messages = await fetch('/api/manager/message', { method: 'POST' })
    return messages
  } catch (error) {
    console.error(error)
  }
}

export default function Admin() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    console.log(Cookies.get('manager_secret'))
  })
  return (
    <div className={styles.admin_wrapper}>
      <h1>{"Vic and Anna's Life Manager"}</h1>
      <div className={styles.admin_links}>
        <div className={styles.admin_link}><Link href="/manager/calendar">Calendar</Link></div>
        <div className={styles.admin_link}><Link href="/manager/groceries">Groceries</Link></div>
      </div>
      <div className={styles.message_container}>
        <textarea />
        <button onClick={submitMessage()}>Submit</button>
      </div>
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

  return { props: {}}
})
