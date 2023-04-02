import React, { useEffect, useState } from 'react'
import randomHexColor from 'random-hex-color'
import { useSelector, useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { Inter } from '@next/font/google'

import Landing from '@/components/three/scenes/Landing'
import Header from '../components/layouts/Header'
import Links from '../components/layouts/Links'
import Footer from '@/components/layouts/Footer'
import CookieBanner from '@/components/parts/cookie-banner'
import NameColorSlider from '@/components/parts/name-color-slider'
import { ResponsiveAdUnit } from "nextjs-google-adsense";

import startStyles from '../styles/Start.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    const savedCookie = Cookies.get('accept-cookies')
    if (savedCookie === 'true') { setShowModal(true) }
  }, [])

  return (
    <div className={startStyles.scene}>
      <Header />
      <Links />
      <NameColorSlider />
      <Landing />
      <Footer />
      {/* {showModal ?
        <div style={{zIndex: '4', position: 'fixed', width: '10px', height: '10px', top: '400px', left: '20px', background: 'transparent'}}>
          <ResponsiveAdUnit
            publisherId='pub-5014071221395516'
            slotId="4845178086"
            type="adsense"
            style={{zIndex: '5', position: 'fixed'}}
          />
        </div> : ''} */}
      <CookieBanner />
    </div>
  )
}

