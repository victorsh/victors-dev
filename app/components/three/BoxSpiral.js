import React, { useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'

function BoxSpiral(props) {
  const myMesh = React.useRef()
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime()
    myMesh.current.rotation.y = clock.getElapsedTime()
    myMesh.current.position.x = -1 * props.radius * Math.cos(clock.elapsedTime % 360) + props.position[0]
    myMesh.current.position.y = -1 * props.radius * Math.sin(clock.elapsedTime % 360) + props.position[1]
  })
  const handleClick = () => {
    myMesh.current.position.x += 1
  }
  return (
    <mesh {...props} ref={myMesh} onClick={() => handleClick()} recieveShadow castShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial color={props.color} />
    </mesh>
  )
}

export default BoxSpiral
