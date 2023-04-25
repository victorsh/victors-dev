import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Duck = () => {
  const gltf = useLoader(GLTFLoader, '/rubber_duck.glb')
  return <primitive object={gltf.scene} />
}

export default Duck
