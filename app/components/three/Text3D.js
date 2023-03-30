// https://medium.com/@zmommaerts/how-to-create-3d-text-in-react-three-fiber-a35376456a04
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { extend, useFrame } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import cormorant from '../../public/Cormorant Garamond Medium_Regular.json'
import * as THREE from 'three'

extend({ TextGeometry })

export default function Text3D(props) {
  const ref = useRef()
  const font = new FontLoader().parse(cormorant)

  const { actualColor } = useSelector((state) => state.nameColor)
  useFrame((state, delta) => {
    ref.current.material.color = new THREE.Color(actualColor)
  })

  return (
    <mesh ref={ref} {...props} recieveShadow castShadow>
      <textGeometry args={[props.text, {font, size: 1, height: 1}]} />
      <meshPhysicalMaterial emissive={props.color} emissiveIntensity={2} attach='material' color={props.color} />
    </mesh>
  )
}
