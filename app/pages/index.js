import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import { Inter } from '@next/font/google'
import NonSSRWrapper from '../components/NonSSRWrapper'
import Header from '../components/Header'
import Links from '../components/Links'

import Stars from '../components/three/Stars'
import LightBulb from '../components/three/LightBulb'
import CustomText from '../components/three/CustomText'
import Text3D from '../components/three/Text3D'
import OrbitControls from '../components/three/OrbitControls'

import startStyles from '../styles/Start.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
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
            <ambientLight castShadow intensity={0.3} />
            <directionalLight castShadow />
            <LightBulb position={[0,3,0]} />
            <CustomText text="Hello Buddy" scale={[5, 5, 5]} position={[10, 0, -5]}/>
            <Text3D text="Victor's Dev"/>
            <OrbitControls />
            <Stats />
          </Canvas>
        </NonSSRWrapper>
      </div>
    </>
  )
}
