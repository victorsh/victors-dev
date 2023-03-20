import React, { useEffect, useState } from 'react'
import { Inter } from '@next/font/google'
import Landing from '@/components/three/scenes/Landing'
import Header from '../components/layouts/Header'
import Links from '../components/layouts/Links'
import Footer from '@/components/layouts/Footer'
import CookieBanner from '@/components/parts/cookie-banner'

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
      <CookieBanner />
    </div>
  )
}
