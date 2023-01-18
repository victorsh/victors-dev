import React from 'react'

function Box(props) {
  return (
    <mesh {...props} recieveShadow castShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial color={'white'} />
    </mesh>
  )
}

export default Box
