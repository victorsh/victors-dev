import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import NonSSRWrapper from '../components/NonSSRWrapper'
import Links from '../components/Links'
import Header from '../components/Header'
import css from '../styles/Start.module.css'
// Three Custom Componenets
import Box from '../components/three/Box'
import BoxTexture from '../components/three/BoxTexture'
import BoxAnim from '../components/three/BoxAnim'
import BoxSpiral from '../components/three/BoxSpiral'
import TetraSpiral from '../components/three/TetraSpiral'
// import Draggable from '@/components/three/Draggable'
import Floor from '../components/three/Floor'
import LightBulb from '../components/three/LightBulb'
import OrbitControls from '../components/three/OrbitControls'
import CustomText from '../components/three/CustomText'
import Text3D from '../components/three/Text3D'
import Stars from '../components/three/Stars'

export default function Start() {
  return (
    <div className={css.scene}>
      <Header />
      <Links />
      <NonSSRWrapper>
        <Canvas
          shadows
          className={css.canvas}
          camera={{
            position: [-6, 7, 7], fov: 90
          }}
        >
          <Stars />
          <ambientLight castShadow intensity={0.3} />
          <directionalLight castShadow />
          <LightBulb position={[0,3,0]} />
          {/* <Draggable>
            <Box rotateX={3} rotateY={0.2} />
          </Draggable> */}
          <BoxAnim position={[0, 2, 0]}/>
          <CustomText text="Hello Buddy" scale={[5, 5, 5]} position={[10, 0, -5]}/>
          <Text3D text="hello again!"/>
          <Floor position={[0, -1, 0]} scale={[0.5, 0.5, 0.5]}/>
          <BoxSpiral position={[0, 0, -2]}/>
          <TetraSpiral />
          <OrbitControls />
          <Stats />
        </Canvas>
      </NonSSRWrapper>
    </div>
  )
}