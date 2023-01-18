import React from 'react'

function LightBulb(props) {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 30, 20]} />
      <meshPhongMaterial emissive={'yellow'} />
    </mesh>
  )
}

export default LightBulb
