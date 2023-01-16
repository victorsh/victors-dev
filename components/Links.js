import Link from 'next/link'
import styles from '../styles/Links.module.css'

function Links() {
  return (
    <div className={styles.links_container}>
      <Link href='/'>Home</Link>
      <Link href='/start'>Start</Link>
      <Link href='/about'>About</Link>
    </div>
  )
}

export default Links
