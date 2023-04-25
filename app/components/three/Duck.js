import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Duck = (props) => {
  const gltf = useLoader(GLTFLoader, '/rubber_duck.glb')
  return <primitive {...props} object={gltf.scene} />
}

export default Duck
