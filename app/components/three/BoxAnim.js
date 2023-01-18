import React, { useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'

function BoxAnim(props) {
  const myMesh = React.useRef()
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime()
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

export default BoxAnim
