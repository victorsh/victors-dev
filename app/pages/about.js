import React from 'react'
import { Heading, Text, Box } from '@chakra-ui/react'
import Links from '../components/Links'
import Header from '../components/Header'

export default function About(props) {
  return (
    <div>
      <Header />
      <Links />
      <Box maxW="2xl" m="0 auto">
        <Heading as="h1">About Me</Heading>
        <Text>
          {"To know who I am we'll need to go back to 1991, the start of the the summer, may 30.\
            13 days later, the Los Angeles Lakers won the NBA Championship on June 12.\
            The internet was just getting started. Super Mario World, A Link to the Past and Sonic the Hedgehog had\
            all released in this year. I group up in an age of rapid technological grow. Which lead to an exceptional\
            opportunity to explore a world that's rapidly changing. In the ye old days, I can image life being very slow\
            most of the time.\
            \
            \
          "}
        </Text>
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