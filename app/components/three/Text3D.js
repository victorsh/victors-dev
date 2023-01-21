// https://medium.com/@zmommaerts/how-to-create-3d-text-in-react-three-fiber-a35376456a04
import React, { useEffect } from 'react'
import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import cormorant from '../../public/Cormorant Garamond Medium_Regular.json'

extend({ TextGeometry })

export default function Text3D(props) {
  const font = new FontLoader().parse(cormorant)
  return (
    <mesh {...props} recieveShadow castShadow>
      <textGeometry args={[props.text, {font, size: 1, height: 1}]} />
      <meshPhysicalMaterial attach='material' color={props.color} />
    </mesh>
  )
}
