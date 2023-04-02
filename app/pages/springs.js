import React, { useState } from 'react'
import useMeasure from 'react-use-measure'
import { useSpring, animated } from '@react-spring/web'
import styles from '@/styles/Springs.module.css'

const AnimMeasure = () => {
  const [open, setOpen] = useState(false)
  const [ref, { width }] = useMeasure()
  const props = useSpring({ width: open ? width : 0 })

  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.main} onClick={() => setOpen(!open)}>
        <animated.div className={styles.fill} style={props} />
        <animated.div className={styles.content}>{props.width.to(x => x.toFixed(0))}</animated.div>
      </div>
    </div>
  )
}

const ExpandableDiv = () => {
  const [expanded, setExpanded] = useState(false)
  const { height } = useSpring({
    from: { height: '100px' },
    to: { height: expanded ? '200px' : '100px' },
    config: { tension: 200, friction: 20 }
  })

  const handleClick = () => {
    setExpanded(!expanded)
  }

  return (
    <animated.div
      onClick={handleClick}
      style={{
        height,
        widht: '100px',
        background: 'lightblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      Click Me
    </animated.div>
  )
}

const Springs = function () {
  return (
    <>
      <AnimMeasure />
      <ExpandableDiv />
    </>
  )
}

export default Springs


