import { Canvas } from '@react-three/fiber'
import Links from '@/components/Links'
import css from '@/styles/Start.module.css'
// Three Custom Componenets
import Box from '@/components/three/Box'
import BoxTexture from '@/components/three/BoxTexture'
// import Draggable from '@/components/three/Draggable'
import Floor from '@/components/three/floor'
import LightBulb from '@/components/three/LightBulb'
import OrbitControls from '@/components/three/OrbitControls'
import CustomText from '@/components/three/CustomText'

export default function Start() {
  return (
    <div className={css.scene}>
      <Links />
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7], fov: 90
        }}
      >
        <ambientLight castShadow intensity={0.3} />
        <directionalLight castShadow />
        <LightBulb position={[0,3,0]} />
        {/* <Draggable>
          <Box rotateX={3} rotateY={0.2} />
        </Draggable> */}
        <CustomText test="Hello Buddy"/>
        <Floor position={[0, -1, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}