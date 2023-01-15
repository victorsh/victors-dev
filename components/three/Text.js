import React from 'react'
import { Text } from '@react-three/drei'

function Text(props) {
  return (
    <Text {...props} scale={[10, 10, 10]} color="black" anchorX="center" anchorY="middle">
      HELLO WORLD
    </Text>
  )
}