import React, { useEffect, useState, useMemo, useRef } from 'react'
import randomHexColor from 'random-hex-color'
import { Inter } from '@next/font/google'
import Cookies from 'js-cookie'
import Landing from '@/components/three/scenes/Landing'
import Header from '../components/layouts/Header'
import Links from '../components/layouts/Links'
import Footer from '@/components/layouts/Footer'
import CookieBanner from '@/components/parts/cookie-banner'
import { ResponsiveAdUnit } from "nextjs-google-adsense";

import startStyles from '../styles/Start.module.css'

const inter = Inter({ subsets: ['latin'] })

const NameColorSlider = () => {
  const nmn = useRef(50)
  const [nameColor, setNameColor] = useState(50)
  const [appliedNameColor, setAppliedNameColor] = useState('#FFFFFF')
  const handleNameColor = async (e) => {
    nmn.current.value = e.target.value
    // document.getElementById('name-color-slider').setAttribute('value', nmn.current)
    // await setNameColor(Number(val))
    // setAppliedNameColor(randomHexColor())
  }
  return (
    <>
      <Landing nameColor={appliedNameColor} />
      <div style={{zIndex: 1, position: 'fixed', top: '20px', left: '45%', width: '100%'}}>
        <input id='name-color-slider' ref={nmn} type="range" min="1" max="100" value={nmn.current.value} onChange={handleNameColor} className="slider" />
      </div>
    </>

  )
}

export default function Home() {
  const [showModal, setShowModal] = useState(true)
  const [nameColor, setNameColor] = useState(50)
  // const [appliedNameColor, setAppliedNameColor] = useState('#FFFFFF')
  let appliedNameColor = '#ffffff'
  const handleNameColor = (e) => {
    const val = e.target.value
    console.log(randomHexColor())
    // setNameColor(Number(val))
    appliedNameColor = randomHexColor()
  }

  useEffect(() => {
    console.log(process.env.NODE_ENV)
    const savedCookie = Cookies.get('accept-cookies')
    if (savedCookie === 'true') { setShowModal(true) }
  }, [])

  return (
    <div className={startStyles.scene}>
      <Header />
      <Links />
      {/* <NameColorSlider /> */}
      <Footer />
      {showModal ?
        <div style={{zIndex: '4', position: 'fixed', width: '10px', height: '10px', top: '400px', left: '20px', background: 'transparent'}}>
          <ResponsiveAdUnit
            publisherId='pub-5014071221395516'
            slotId="4845178086"
            type="adsense"
            style={{zIndex: '5', position: 'fixed'}}
          />
        </div> : ''}
      <CookieBanner />
    </div>
  )
}

