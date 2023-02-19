import React, { useEffect, useRef } from 'react'
import { Inter } from '@next/font/google'
import { Button, useToast } from '@chakra-ui/react'
import Landing from '@/components/three/scenes/Landing'

import Header from '../components/layouts/Header'
import Links from '../components/layouts/Links'
import Footer from '@/components/layouts/Footer'

import startStyles from '../styles/Start.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const toast = useToast()
  useEffect(() => {
    console.log(process.env.NODE_ENV)
    toast({
      title: 'Is Dev!',
      description: 'Welcome to my site.',
      status: 'success',
      duration: 9000,
      isClosable: true
    })
  })

  return (
    <div className={startStyles.scene}>
      <Header />
      <Links />
      <Landing />
      <Footer />
    </div>
  )
}
