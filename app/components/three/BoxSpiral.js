import React, { useState } from 'react'
import { useFrame } from '@react-three/fiber'

function BoxSpiral(props) {
  const myMesh = React.useRef()
  const [timeDelta, setTimeDelta] = useState(0)
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime()
    myMesh.current.rotation.y = clock.getElapsedTime()
    myMesh.current.position.x = -1 * props.radius * Math.cos(clock.elapsedTime + props.rotationOffset % 360)
    myMesh.current.position.y = -1 * props.radius * Math.sin(clock.elapsedTime + props.rotationOffset % 360)
  })
  const handleClick = () => {
    myMesh.current.position.x += 1
  }
  return (
    <mesh {...props} ref={myMesh} onClick={() => handleClick()}>
      <boxGeometry />
      <meshPhysicalMaterial color={props.color} />
    </mesh>
  )
}

export default BoxSpiral
