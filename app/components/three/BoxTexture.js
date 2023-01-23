import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

export default function Box(props) {
  const texture = useLoader(TextureLoader, "/texture.jpg")
  return (
    <mesh {...props} receiveShadow={true} castShadow={true}>
      <boxBufferGeometry />
      <meshPhysicalMaterial map={texture} color={"white"} />
    </mesh>
  )
}