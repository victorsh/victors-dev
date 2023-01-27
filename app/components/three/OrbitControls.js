import React, { useEffect } from 'react'
import { extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

extend({ OrbitControls })

function Controls(props) {
  const { camera, gl } = useThree()
  const myMesh = React.useRef()
  useEffect(() => {
    myMesh.current.panSpeed = 0
  },[])
  let speed = 0.01
  // useFrame(({ clock }) => {
  //   if (camera.position.z > -10) {
  //     camera.position.z -= speed * clock.getElapsedTime()
  //     speed += 0.01
  //   }
  // })
  return (
    <orbitControls ref={myMesh}
      {...props}
      attach={"OrbitControls"}
      args={[camera, gl.domElement]}
      minAzimuthAngle={-Math.PI / 4}
      maxAzimuthAngle={Math.PI / 4}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI - Math.PI / 6}
      minDistance={3}
      maxDistance={12}
      enablePanning={false}
    />
  )
}

export default Controls
