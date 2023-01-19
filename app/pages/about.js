import React from 'react'
import { Heading, Text, Box } from '@chakra-ui/react'
import Links from '../components/Links'
import Header from '../components/Header'

export default function About() {
  return (
    <div>
      <Header />
      <Links />
      <Box maxW="2xl" m="0 auto">
        <Heading as="h1">About Me</Heading>
        <Text>
          Who am I? This a question we must all face from time to time. How can we define ourselves?
          Is it our roles in society that determine who we are? Is it our past experiences? Where does
          genetics fall into this picture?

          It's really hard to define us as people. We are, as far as we know, the most intelligent beings
          in the known universe. Knowing this, how does this define us?
        </Text>
        {"I'm so flattered you're here! "}
      </Box>
    </div>
  )
}

import prisma from '../lib/prisma'

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