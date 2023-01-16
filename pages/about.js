import react from 'react'
import Links from '@/components/Links'
import Header from '@/components/Header'

export default function About() {
  return (
    <div>
      <Header />
      <Links />
      <title>About</title>
    </div>
  )
}

import prisma from '@/lib/prisma'

export const getStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true }
      }
    }
  })
  return {
    props: { feed },
    revalidate: 10
  }
}