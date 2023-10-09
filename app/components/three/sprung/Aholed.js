import React, { useState } from "react"
// All hooks are cross platform now
import { useSpring } from "@react-spring/core"
// Platform knowledge is in here ...
// A simple comment
import { a } from "@react-spring/web"
import { Scene } from "./AScene"

const style = {
  open: {
    marginTop: '-270px',
    letterSpacing: '-10px',
    fontSize: '250px'
  },
  close: {

  }
}

const Aholed = () => {
  const [toggle, set] = useState(0)
  const [{ x }] = useSpring({ x: toggle, config: { mass: 5, tension: 1000, friction: 50, precision: 0.0001 } }, [toggle])
  return (
    <a.div
      style={{
        backgroundColor: x.to([0, 1], ["#c9ffed", "#ff2558"]),
        color: x.to([0, 1], ["#7fffd4", "#c70f46"]),
        position: 'fixed',
        width: '100vw',
        height: '100vh'
      }}
    >
      <h1 style={{ marginTop: '-270px', letterSpacing: '-10px', fontSize: '250px' }} children="<h1>" />
      <h1 style={style.close} children="</h1>" />
      <a.h1>{x.to((x) => (x + 8).toFixed(2))}</a.h1>
      <Scene x={x} set={set} />
    </a.div>
  )
}

export default Aholed
