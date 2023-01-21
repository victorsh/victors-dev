import React from 'react'
import { extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

function Controls(props) {
  const { camera, gl } = useThree()
  return (
    <orbitControls
      attach={"orbitControls"}
      args={[camera, gl.domElement]}
      minAzimuthAngle={-Math.PI / 4}
      maxAzimuthAngle={Math.PI / 4}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI - Math.PI / 6}
      minDistance={3}
      maxDistance={12}
    />
  )
}

export default Controls
