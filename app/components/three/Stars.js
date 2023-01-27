// https://codesandbox.io/s/2csbr1?file=/src/App.js:0-213
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { random } from 'maath'

export default function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
  let speed = 0.01
  useFrame(({ clock }) => {
    ref.current.rotation.x -= 0.001
    ref.current.rotation.y -= 0.001
    if (ref.current.position.z > -10) {
      // ref.current.position.z -= speed * clock.getElapsedTime()
    }
    speed += 0.01
  })
  return (
    <group rotation={[0, 0, Math.PI / 8]} scale={[10, 10, 10]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffffff" size={0.05} sizeAttenuation={true} depthWrite={false} emissiveIntensity={0} />
      </Points>
    </group>
  )
}