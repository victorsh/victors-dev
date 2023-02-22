import styles from '@/styles/manager/Links.module.css'
import Link from 'next/link'

export default function Links() {
  return (
    <div className={styles.links_wrapper}>
      <div className={styles.links}>
        <Link href="/manager/calendar"><div className={styles.link}>Calendar</div></Link>
        <Link href="/manager/tasks"><div className={styles.link}>Tasks</div></Link>
        <Link href="/manager/messages"><div className={styles.link}>Messages</div></Link>
      </div>
    </div>
  )
}