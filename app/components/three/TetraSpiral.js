import React, { useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

function TetraSpiral(props) {
  const myMesh = React.useRef()
  const radius = 3
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime()
    myMesh.current.rotation.y = clock.getElapsedTime()
    myMesh.current.position.x = radius * Math.cos(clock.elapsedTime * 2 % 360)
    myMesh.current.position.y = radius * Math.sin(clock.elapsedTime * 2 % 360)
  })
  const handleClick = () => {
    myMesh.current.position.x += 1
  }
  useEffect(() => {
    myMesh.current.position.z = 3
  })
  return (
    <mesh {...props} ref={myMesh} onClick={() => handleClick()} recieveShadow castShadow>
      <tetrahedronBufferGeometry />
      <meshPhysicalMaterial color={'red'} />
    </mesh>
  )
}

export default TetraSpiral
