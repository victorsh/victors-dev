import React from 'react'
import { Text } from '@react-three/drei'

function CustomText(props) {
  return (
    <Text {...props} color="green" anchorX="center" anchorY="middle">
      {props.text}
    </Text>
  )
}

export default CustomText
