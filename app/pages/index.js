import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

import BasicScene from '@/components/three/scenes/BasicScene'
import Header from '../components/layouts/Header'
import Links from '../components/layouts/Links'
import Footer from '@/components/layouts/Footer'
import CookieBanner from '@/components/parts/cookie-banner'
import NameColorSlider from '@/components/parts/name-color-slider'
import { ResponsiveAdUnit } from "nextjs-google-adsense";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.scene}>
      <Header />
      <Links />
      <NameColorSlider />
      <BasicScene />
      <Footer />
      <CookieBanner />
    </div>
  )
}

