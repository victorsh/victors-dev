import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import { Inter } from '@next/font/google'
import { Button, useToast } from '@chakra-ui/react'
import NonSSRWrapper from '../components/NonSSRWrapper'
import Header from '../components/Header'
import Links from '../components/Links'

import Stars from '../components/three/Stars'
import LightBulb from '../components/three/LightBulb'
import { BoxSpiral } from '@/components/three'
import Text3D from '../components/three/Text3D'
import OrbitControls from '../components/three/OrbitControls'

import startStyles from '../styles/Start.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const toast = useToast()
  useEffect(() => {
    toast({
      title: 'Hello!',
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
      <NonSSRWrapper>
        <Canvas
          shadows={true}
          className={startStyles.canvas}
          camera={{
            position: [0, 0, 7], fov: 90
          }}
        >
          <Stars />
          {/* <directionalLight castShadow /> */}
          <LightBulb />
          <Text3D position={[-3, 0, 0]} scale={[1, 1, 0.5]} color='#AAAAAA' text="Victor's Dev"/>
          <OrbitControls />
          {process.env.NODE_ENV === 'DEV' ? <Stats /> : ''}
        </Canvas>
      </NonSSRWrapper>
    </div>
  )
}
