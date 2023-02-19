import React from 'react'

import randomHexColor from 'random-hex-color'

import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'

import NonSSRWrapper from '@/components/utils/NonSSRWrapper'

import Stars from '@/components/three/Stars'
import LightBulb from '@/components/three/LightBulb'
import Text3D from '@/components/three/Text3D'
import BoxSpiral from '@/components/three/BoxSpiral'
import OrbitControls from '@/components/three/OrbitControls'
import startStyles from '@/styles/Start.module.css'

export default function Landing(props) {
  const VortexBoxes = () => {
    const BoxSpirals = []
    const color_select = ['#f90000', '#0f9000', '#00f900', '#000f90', '#0000f9', '#90000f']
    const color_select_natural = ['#687864', '#31708E', '#5085A5', '#8FC1E3', '#F7F9FB']
    for (let i = 0; i < 100; i++) {
      BoxSpirals.push(
      <BoxSpiral
        position={[0, 0, -1*(i - 2)]}
        rotationOffset={i * 1.1}
        color={color_select_natural[i % (color_select_natural.length - 1)]}
        radius={'4'}
        key={'BoxSpiral-'+i}
      />)
    }
    return BoxSpirals
  }

  return (
    <NonSSRWrapper>
      <Canvas
        shadows={true}
        className={startStyles.canvas}
        camera={{
          position: [0, 0, 0], fov: 90
        }}
      >
        <Stars />
        <directionalLight castShadow />
        <ambientLight intensity={0.3} />
        <LightBulb />
        <VortexBoxes />
        <Text3D position={[-3, 0, -10]} scale={[1, 1, 0.5]} color={'#FFFFFF'} text="Victor's Dev"/>
        
        <OrbitControls />
        <EffectComposer>
          {/* <DepthOfField focusDistance={1} focalLength={1} bokehScale={2} height={1024} /> */}
          <Bloom luminanceThreshold={1} luminanceSmoothing={2} height={500} />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
        {process.env.NODE_ENV === 'development' ? <Stats /> : ''}
      </Canvas>
    </NonSSRWrapper>
  )
}