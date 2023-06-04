import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Header from '../components/layouts/Header'
import Links from '../components/layouts/Links'
import Footer from '@/components/layouts/Footer'
import CookieBanner from '@/components/parts/cookie-banner'

import styles from '../styles/Home.module.css'
import Aholed from '@/components/three/sprung/aholed'

export default function Home() {
  return (
    <div className={styles.scene}>
      <Header />
      <Links />
      <Aholed />
      <Footer />
      <CookieBanner />
    </div>
  )
}