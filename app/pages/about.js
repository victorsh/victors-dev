import React from 'react'
import { Heading, Text, Box, flexbox } from '@chakra-ui/react'
import Links from '../components/Links'
import Header from '../components/Header'

export default function About(props) {
  return (
    <div>
      <Header />
      <Links />
      <div style={{"display":"flex", "justify-content": "center"}}>
        <Box maxW="lg" m="0 auto" style={{"background": "green", "width":"100%", "margin": "0"}}>
        </Box>
        <Box maxW="2xl" m="0 auto">
          <Heading as="h1">About Me</Heading>
          <br/>
          <Text>
            {"To know who I am we'll need to go back to 1991, the start of the the summer, may 30.\
              13 days later, the Los Angeles Lakers won the NBA Championship on June 12.\
              The internet was just getting started. Super Mario World, A Link to the Past and Sonic the Hedgehog had\
              all released in this year. I group up in an age of rapid technological grow. Which lead to an exceptional\
              opportunity to explore a world that's rapidly changing. In the ye old days, I can image life being very slow\
              most of the time.\
            "}
          </Text>
          <br/>
          <Text>
            {"As a baby, my family played a little game with me. They held out two objects. One was a digital watch and the other was\
              something I can't remember. But that something is what ended up defining the rest of my life.\
              No, of course I picked the stethoscope. And as I grew, more computerized objects popped up around me. One of the first, being\
              a computer. Endless exploration ensued, trying to figure out what I could do with this giant box. Could I play games?\
              Yes, yes I could, and some of those games came from disks inside cereal boxes. Didn't matter how good or bad the game\
              was, it was an experience like nothing else before it.\
            "}
          </Text>
          <br/>
          <Text>
            {"And so my fascination with computer and technology continued to grow over the years. I eventually string to dabble in programming\
              and oh my what a thrill it was. I type of bunch of letters, and out pop a bunch of pixels moving.\
            "}
          </Text>
        </Box>
        <Box maxW="lg" m="0 auto" style={{"background": "green", "width":"100%", "margin": "0", "height": "100vh"}}>
        </Box>
      </div>
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