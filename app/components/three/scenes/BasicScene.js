import React, { memo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'

import NonSSRWrapper from '@/components/utils/NonSSRWrapper'

import Stars from '@/components/three/Stars'
import LightBulb from '@/components/three/LightBulb'
import Text3D from '@/components/three/Text3D'
import OrbitControls from '@/components/three/OrbitControls'
import startStyles from '@/styles/Start.module.css'
import VortexBoxes from '../VortexBoxes'

const BasicScene = () => {
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
        <Text3D position={[-3, 0, -10]} scale={[1, 1, 0.5]} text="Victor's Dev"/>
        
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

export default BasicScene
