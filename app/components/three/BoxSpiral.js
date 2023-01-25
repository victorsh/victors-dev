import React, { useState } from 'react'
import { useFrame } from '@react-three/fiber'

function BoxSpiral(props) {
  const myMesh = React.useRef()
  const [timeDelta, setTimeDelta] = useState(0)
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime() / 2
    myMesh.current.rotation.y = clock.getElapsedTime() / 2
    myMesh.current.position.x = -1 * props.radius * Math.cos(clock.elapsedTime / 2 + props.rotationOffset % 360)
    myMesh.current.position.y = -1 * props.radius * Math.sin(clock.elapsedTime / 2 + props.rotationOffset % 360)
  })
  const handleClick = () => {
    myMesh.current.position.x += 1
  }
  return (
    <mesh {...props} ref={myMesh} onClick={() => handleClick()}>
      <boxGeometry />
      <meshPhysicalMaterial emissive={props.color} emissiveIntensity={1} color={props.color} />
    </mesh>
  )
}

export default BoxSpiral
