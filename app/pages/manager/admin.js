import { withSessionSsr } from "@/utils/session"
import Link from 'next/link'
import styles from "@/styles/manager/Admin.module.css"

export default function Admin() {
  return (
    <div className={styles.admin_wrapper}>
      <h1>{"Vic and Anna's Life Manager"}</h1>
      <div className={styles.admin_links}>
        <div className={styles.admin_link}><Link href="/manager/calendar">Calendar</Link></div>
        <div className={styles.admin_link}><Link href="/manager/calendar">Groceries</Link></div>
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
