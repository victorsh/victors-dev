import Header from '../components/layouts/Header'
import Links from '../components/layouts/Links'
import prisma from '../lib/prisma'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Links />
        <div>This is the blog page</div>
      </main>
    </>
  )
}
