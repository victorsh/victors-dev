import React from 'react'
import { withSessionSsr } from "@/utils/session"
import Header from '@/components/manager/Header'
import styles from '@/styles/manager/Tasks.module.css'

export default function Tasks(props) {
  return (
    <div className={styles.tasks_container}>
      <Header user={props.user} />
      <div className={styles.tasks_wrapper}>
        <h1 className={styles.tasks_title}>Tasks List</h1>
        <ul>
          <li>task 1</li>
        </ul>
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

  return { props: { user: req.session.user }}
})
