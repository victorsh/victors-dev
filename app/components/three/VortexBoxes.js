import BoxSpiral from '@/components/three/BoxSpiral'

const VortexBoxes = () => {
  const BoxSpirals = []
  const color_select = ['#f90000', '#0f9000', '#00f900', '#000f90', '#0000f9', '#90000f']
  const color_select_natural = ['#687864', '#31708E', '#5085A5', '#8FC1E3', '#F7F9FB']
  for (let i = 0; i < 100; i++) {
    BoxSpirals.push(
    <BoxSpiral
      position={[0, 0, -1*(i - 2)]}
      rotationOffset={i * 1.1}
      color={color_select_natural[i % (color_select_natural.length - 1)]}
      radius={'4'}
      key={'BoxSpiral-'+i}
      geom={i % 2 === 0 ? 'sphere' : 'box'}
    />)
  }
  return BoxSpirals
}

export default VortexBoxes
