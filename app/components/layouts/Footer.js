import React, { useState, useRef } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Image from 'next/image'
import Link from 'next/link'
import footerStyle from '@/styles/Footer.module.css'

export default function Footer() {
  const [footerExpandHidden, setFooterExpandHidden] = useState(true)
  const { height } = useSpring({
    from: { height: '24px' },
    to: { height: footerExpandHidden ? '24px' : '80px' },
    config: { tension: 500, friction: 20 }
  })

  const footerToggle = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setFooterExpandHidden(!footerExpandHidden)
  }

  return (
    <animated.div 
      style={{
        height,
        backgroundColor: 'rgba(65, 192, 253, 0.3)',
        borderTop: '2px solid #00c8ff',
        cursor: 'pointer',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        zIndex: 2,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'col',
        alignItems: 'center',
        color: '#eee'
      }}
      onMouseEnter={e => footerToggle(e)}
      onMouseLeave={e => footerToggle(e)}
    >
      {footerExpandHidden ? <p className={footerStyle.hover_text_show}>^</p> : ''}
      {!footerExpandHidden ?
        <div>
          <div className={footerStyle.sources_container}>
            <Link href='https://github.com/victorsh'><Image src='/icons8-github-glyph-neue/icons8-github-512.png' width="50" height="50" alt="github" className={footerStyle.img_to_white} /></Link>
            <Link href='https://www.linkedin.com/in/victor-shahbazian/'><Image src='/icons8-linkedin-ios-16-filled/icons8-linkedin-500.png' width="50" height="50" alt="linkedin" className={footerStyle.img_to_white} /></Link>
            <Link href='victor.sh.91@gmail.com'><Image src='/icons8-mail-ios-16-filled/icons8-mail-500.png' width="50" height="50" alt="email" className={footerStyle.img_to_white} /></Link>
          </div>
          <div className={footerStyle.icons8}>
            Icons by <a href="https://icons8.com">Icons8</a>
          </div>
        </div> : ''}
    </animated.div>
  )
}

