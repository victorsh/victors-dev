import React, { useState } from 'react'
import footerStyle from '@/styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer(props) {
  const [footerExpandHidden, setFooterExpandHidden] = useState(true)

  const mouseOver = () => {
    setFooterExpandHidden(false)
  }

  const mouseOut = () => {
    setFooterExpandHidden(true)
  }

  return (
    <div className={footerStyle.footer} onMouseEnter={mouseOver} onMouseLeave={mouseOut}>
      <p className={footerExpandHidden ? footerStyle.hover_text_show : footerStyle.hover_text_hide}>Hover Over Me</p>
      <div className={footerStyle.sources_container}>
        <Link href='https://github.com/victorsh'><Image src='/icons8-github-glyph-neue/icons8-github-512.png' width="50" height="50" alt="github" /></Link>
        <Link href='https://www.linkedin.com/in/victor-shahbazian/'><Image src='/icons8-linkedin-ios-16-filled/icons8-linkedin-500.png' width="50" height="50" alt="linkedin" /></Link>
        <Link href='victor.sh.91@gmail.com'><Image src='/icons8-mail-ios-16-filled/icons8-mail-500.png' width="50" height="50" alt="email" /></Link>
      </div>
      <div className={footerStyle.icons8}>
        Icons by <a href="https://icons8.com">Icons8</a>
      </div>
    </div>
  )
}

