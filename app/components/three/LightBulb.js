import React from 'react'
import { useFrame } from '@react-three/fiber'

function LightBulb(props) {
  const myMesh = React.useRef()
  useFrame(({ clock }) => {
    myMesh.current.position.x = 5 * Math.cos(clock.elapsedTime % 360)
    myMesh.current.position.y = 5 * Math.sin(clock.elapsedTime % 360)
  })
  return (
    <mesh ref={myMesh} {...props}>
      <pointLight castShadow />
      {/* <sphereBufferGeometry args={[0.2, 30, 20]} /> */}
      <meshPhongMaterial emissive={'white'} />
    </mesh>
  )
}

export default LightBulb
