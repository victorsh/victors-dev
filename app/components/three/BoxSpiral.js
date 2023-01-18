import React, { useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'

function BoxSpiral(props) {
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

export default BoxSpiral
