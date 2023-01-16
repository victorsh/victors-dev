import Header from '@/components/Header'
import Links from '@/components/Links'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Links />
        <div>Welcome to Victors Dev a website built by Victor for Victor.</div>
      </main>
    </>
  )
}
