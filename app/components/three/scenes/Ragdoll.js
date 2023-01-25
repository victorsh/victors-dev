// https://codesandbox.io/s/wdzv4?file=/src/components/Furniture.js:64-118
import React, { useState } from 'react'
import { useDragConstraint } from '@/components/three/scenes/helpers/Drag'
import { Block } from '@/components/three/scenes/helpers/Block'
import { Canvas } from '@react-three/fiber'
import { Physics, usePlane } from '@react-three/cannon'
import { MeshReflectorMaterial } from '@react-three/drei'
import { useGLTF, SpotLight } from '@react-three/drei'
import { useCompoundBody, useSphere, useCylinder, useDistanceConstraint, usePointToPointConstraint } from '@react-three/cannon'
import * as THREE from 'three'
import startStyles from '@/styles/Start.module.css'

export default function Ragdoll() {
  return (
    <div className={startStyles.scene}>
      <Canvas className={startStyles.canvas} dpr={[1, 2]} shadows camera={{ position: [-40, 40, 40], fov: 25, near: 1, far: 100 }}>
        <color attach="background" args={['#171720']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[-20, -5, -20]} color="red" />
        <Physics allowSleep={false} iterations={15} gravity={[0, -200, 0]}>
          <Floor position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
          <Chair position={[0, 0, -2.52]} />
          <Table position={[8, 0, 0]} />
          {/* <Mug position={[8, 3, 0]} /> */}
          <Lamp position={[0, 15, 0]} />
        </Physics>
      </Canvas>
    </div>
  )
}

function Floor(props) {
  const [ref] = usePlane(() => ({ type: 'Static', ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <MeshReflectorMaterial
        color="#878790"
        blur={[400, 400]}
        resolution={1024}
        mixBlur={1}
        mixStrength={3}
        depthScale={1}
        minDepthThreshold={0.85}
        metalness={0}
        roughness={1}
      />
    </mesh>
  )
}

function Chair(props) {
  const [ref] = useCompoundBody(() => ({
    mass: 24,
    linearDamping: 0.95,
    angularDamping: 0.95,
    shapes: [
      { type: 'Box', mass: 10, position: [0, 0, 0], args: [3.1, 3.1, 0.5] },
      { type: 'Box', mass: 10, position: [0, -1.75, 1.25], args: [3.1, 0.5, 3.1] },
      { type: 'Box', mass: 1, position: [5 + -6.25, -3.5, 0], args: [0.5, 3, 0.5] },
      { type: 'Box', mass: 1, position: [5 + -3.75, -3.5, 0], args: [0.5, 3, 0.5] },
      { type: 'Box', mass: 1, position: [5 + -6.25, -3.5, 2.5], args: [0.5, 3, 0.5] },
      { type: 'Box', mass: 1, position: [5 + -3.75, -3.5, 2.5], args: [0.5, 3, 0.5] }
    ],
    ...props
  }))
  const bind = useDragConstraint(ref)
  return (
    <group ref={ref} {...bind}>
      <Block position={[0, 0, 0]} scale={[3.1, 3.1, 0.5]} />
      <Block position={[0, -1.75, 1.25]} scale={[3.1, 0.5, 3.1]} />
      <Block position={[5 + -6.25, -3.5, 0]} scale={[0.5, 3, 0.5]} />
      <Block position={[5 + -3.75, -3.5, 0]} scale={[0.5, 3, 0.5]} />
      <Block position={[5 + -6.25, -3.5, 2.5]} scale={[0.5, 3, 0.5]} />
      <Block position={[5 + -3.75, -3.5, 2.5]} scale={[0.5, 3, 0.5]} />
    </group>
  )
}

// export function Mug(props) {
//   const { nodes, materials } = useGLTF('/cup.glb')
//   const [cup] = useCylinder(() => ({ mass: 1, args: [0.62, 0.62, 1.2, 16], linearDamping: 0.95, angularDamping: 0.95, ...props }))
//   const bind = useDragConstraint(cup)
//   return (
//     <group ref={cup} {...bind} dispose={null}>
//       <group rotation={[Math.PI / 2, 0, 0]} scale={[0.012, 0.012, 0.012]}>
//         <mesh receiveShadow castShadow material={materials.default} geometry={nodes['buffer-0-mesh-0'].geometry} />
//         <mesh material={materials.Liquid} geometry={nodes['buffer-0-mesh-0_1'].geometry} />
//       </group>
//     </group>
//   )
// }

export function Table(props) {
  const [table] = useCompoundBody(() => ({
    mass: 54,
    linearDamping: 0.95,
    angularDamping: 0.95,
    shapes: [
      { type: 'Box', mass: 50, position: [0, 0, 0], args: [5, 0.5, 5] },
      { type: 'Box', mass: 1, position: [2, -2.25, 2], args: [0.5, 4, 0.5] },
      { type: 'Box', mass: 1, position: [-2, -2.25, -2], args: [0.5, 4, 0.5] },
      { type: 'Box', mass: 1, position: [-2, -2.25, 2], args: [0.5, 4, 0.5] },
      { type: 'Box', mass: 1, position: [2, -2.25, -2], args: [0.5, 4, 0.5] }
    ],
    ...props
  }))
  const bind = useDragConstraint(table)
  return (
    <group ref={table} {...bind}>
      <Block scale={[5, 0.5, 5]} position={[0, 0, 0]} />
      <Block scale={[0.5, 4, 0.5]} position={[2, -2.25, 2]} />
      <Block scale={[0.5, 4, 0.5]} position={[-2, -2.25, -2]} />
      <Block scale={[0.5, 4, 0.5]} position={[-2, -2.25, 2]} />
      <Block scale={[0.5, 4, 0.5]} position={[2, -2.25, -2]} />
    </group>
  )
}

function Lamp(props) {
  const [target] = useState(() => new THREE.Object3D())
  const [fixed] = useSphere(() => ({ collisionFilterGroup: 0, type: 'Static', args: [0.2], ...props }))
  const [lamp] = useCylinder(() => ({ mass: 1, args: [0.5, 1.5, 2, 16], angularDamping: 0.95, linearDamping: 0.95, material: { friction: 0.9 }, ...props }))
  const bind = useDragConstraint(lamp)
  useDistanceConstraint(fixed, lamp, { distance: 2, pivotA: [0, 0, 0], pivotB: [0, 2, 0] })
  usePointToPointConstraint(fixed, lamp, { pivotA: [0, 0, 0], pivotB: [0, 2, 0] })
  return (
    <mesh ref={lamp} {...bind}>
      <cylinderGeometry args={[0.5, 1.5, 2, 32]} />
      <meshStandardMaterial />
      <SpotLight
        castShadow
        target={target}
        penumbra={0.2}
        radiusTop={0.4}
        radiusBottom={40}
        distance={80}
        angle={0.45}
        attenuation={20}
        anglePower={5}
        intensity={1}
        opacity={0.2}
      />
      <primitive object={target} position={[0, -1, 0]} />
    </mesh>
  )
}