import React, { useState } from 'react'
import { useFrame } from '@react-three/fiber'

function BoxSpiral(props) {
  const myMesh = React.useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime() / 2
    myMesh.current.rotation.y = clock.getElapsedTime() / 2
    myMesh.current.position.x = -1 * props.radius * Math.cos(clock.elapsedTime / 2 + props.rotationOffset % 360)
    myMesh.current.position.y = -1 * props.radius * Math.sin(clock.elapsedTime / 2 + props.rotationOffset % 360)
    myMesh.current.position.z += 0.1
    if (myMesh.current.position.z > 3) {
      myMesh.current.position.z = -98
    }
  })
  const handleClick = () => {
    myMesh.current.position.x += 1
  }

  const geomType = () => {
    return <cylinderGeometry args={[0.25, 0.25, 3]} />
    switch(props.geom) {
      case 'sphere':
        return <sphereGeometry args={[0.75, 24, 24]}/>
      case 'box':
        return <boxGeometry />
    }
  }
  return (
    <mesh
      {...props}
      ref={myMesh}
      onClick={() => handleClick()}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      {geomType()}
      <meshPhysicalMaterial emissive={props.color} emissiveIntensity={1} color={hovered ? 'hotpink' : props.color} />
    </mesh>
  )
}

export default BoxSpiral
