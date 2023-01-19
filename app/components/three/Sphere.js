import React from 'react'

function Box(props) {
  return (
    <mesh {...props} recieveShadow castShadow>
      <sphereBufferGeometry />
      <meshLambertMaterial color={'#90ded0'} />
    </mesh>
  )
}

export default Box
