import React, { useEffect, useState } from 'react'
import { Inter } from '@next/font/google'
import Landing from '@/components/three/scenes/Landing'
import Header from '../components/layouts/Header'
import Links from '../components/layouts/Links'
import Footer from '@/components/layouts/Footer'
import CookieBanner from '@/components/parts/cookie-banner'
import { ResponsiveAdUnit } from "nextjs-google-adsense";

import startStyles from '../styles/Start.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showModal, setShowModal] = useState(true)
  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    console.log(process.env.NODE_ENV)
  }, [])

  return (
    <div className={startStyles.scene}>
      <Header />
      <Links />
      <Landing />

      <Footer />
      <div style={{zIndex: '4', position: 'fixed', width: '80px', height: '80px', top: '400px', left: '20px', background: 'white'}}>
        <ResponsiveAdUnit
          publisherId='pub-5014071221395516'
          slotId="4845178086"
          type="adsense"
          style={{zIndex: '5', position: 'fixed'}}
        />
      </div>
      <CookieBanner />

    </div>
  )
}
