import React from 'react'
import { useSpring, animated } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'

function BoxCircle(props) {
  const springs = useSpring({ scale: active ? 1.5 : 1 })
  const myMesh = React.useRef()
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime()
    myMesh.current.rotation.y = clock.getElapsedTime()
    myMesh.current.position.x = 5 * Math.cos(clock.elapsedTime % 360)
    myMesh.current.position.y = 5 * Math.sin(clock.elapsedTime % 360)
  })
  const handleClick = () => {
    myMesh.current.position.x += 1
  }
  return (
    <mesh {...props} ref={myMesh} onClick={() => handleClick()} recieveShadow castShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial color={'blue'} />
    </mesh>
  )
}

export default BoxCircle
