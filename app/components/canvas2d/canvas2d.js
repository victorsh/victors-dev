// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
import React from 'react'
import useCanvas from './useCanvas'

const Canvas2D = props => {
  const { draw, options, ...rest } = props
  const { context, ...moreConfig } = options
  const canvasRef = useCanvas(draw, {context})

  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas2D
