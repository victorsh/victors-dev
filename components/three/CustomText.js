import React from 'react'
import { Text } from '@react-three/drei'

function CustomText(props) {
  return (
    <Text {...props} scale={[10, 10, 10]} position={[10, 0, 10]} color="white" anchorX="center" anchorY="middle">
      {props.text}
    </Text>
  )
}

export default CustomText
