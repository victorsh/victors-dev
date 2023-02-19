import React, { useEffect, useState } from 'react'
import { withSessionSsr } from "@/utils/session"
import styles from '@/styles/manager/Calendar.module.css'

export default function Calendar(props) {
  const [currentTime, setCurrentTime] = useState(null)
  useEffect(() => {
    let current_time = new Date(props.time_now)
    setCurrentTime(current_time.toString())
  }, [])
  return (
    <div className={styles.calendar_wrapper}>
      <h1>Events Calendar</h1>
      <div>{currentTime}</div>
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

  return { props: {time_now: Date.now()}}
})
