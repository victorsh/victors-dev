import react from 'react'
import Links from '@/components/Links'

export default function About() {
  return (
    <div>
      <title>About</title>
      <Links />
    </div>
  )
}

import prisma from '@/lib/prisma'

export const getStaticProps = async () => {
  const feed = await prisma.item.findMany({
    
  })
}