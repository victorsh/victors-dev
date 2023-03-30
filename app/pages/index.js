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

import { SET_NAME_COLOR, SET_ACTUAL_COLOR } from '@/store/reducers/name-color'
import { ResponsiveAdUnit } from "nextjs-google-adsense";

import startStyles from '../styles/Start.module.css'

const inter = Inter({ subsets: ['latin'] })

const NameColorSlider = () => {
  const dispatch = useDispatch()
  const { sliderValue, actualColor } = useSelector(state => state.nameColor)
  const handleNameColor = async (e) => {
    dispatch(SET_NAME_COLOR(Number(e.target.value)))
    dispatch(SET_ACTUAL_COLOR(randomHexColor()))
  }
  return (
    <div style={{zIndex: 1, position: 'fixed', top: '20px', left: '45%', width: '100%'}}>
      <input id='name-color-slider' type="range" min="1" max="100" value={sliderValue} onChange={handleNameColor} className="slider" />
    </div>
  )
}

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

