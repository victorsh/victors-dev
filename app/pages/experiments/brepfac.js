import React from 'react'
import styles from '../../styles/experiments/Brepfac.module.css'
import Canvas2D from '@/components/canvas2d/canvas2d' 

export default function Brepfac() {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  const options = {}
  return <Canvas2D draw={draw} options={options}/>
}