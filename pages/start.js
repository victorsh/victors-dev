import css from '@/styles/Start.module.css'
import Box from '@/components/three/Box'
import BoxTexture from '@/components/three/BoxTexture'
import Draggable from '@/components/three/Draggable'
import Floor from '@/components/three/floor'
import LightBulb from '@/components/three/LightBulb'
import OrbitControls from '@/components/three/OrbitControls'
import Text from '@/components/three/Text'

export default function Start() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7], fov: 90
        }}
      >
        <directionalLight castShadow />
        <ambientLight color={'white'} intensity={0.3} />
        <LightBulb position={[0,3,0]} />
        <Draggable>
          <Box rotateX={3} rotateY={0.2} />
        </Draggable>
        <Floor position={[0, -1, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}