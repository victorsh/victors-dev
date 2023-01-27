import React from 'react'
import { Heading, Text, Box, flexbox } from '@chakra-ui/react'
import Links from '../components/Links'
import Header from '../components/Header'

import startStyles from '../styles/Start.module.css'
import NonSSRWrapper from '../components/NonSSRWrapper'
import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import Text3D from '../components/three/Text3D'
import BoxSpiral from '../components/three/BoxSpiral'
import OrbitControls from '../components/three/OrbitControls'
import Stars from '../components/three/Stars'
import LightBulb from '../components/three/LightBulb'

export default function About(props) {
  return (
    <div style={{'overflow': "hidden", 'height': '100%'}}>
      <Header />
      <Links />
      <div className={startStyles.scene}>
        <NonSSRWrapper>
          <Canvas
            shadows={true}
            className={startStyles.canvas}
            camera={{
              position: [0, 0, 0], fov: 90
            }}
          >
            <Stars />
            <directionalLight castShadow />
            <ambientLight intensity={0.3} />
            <LightBulb />
            
            <OrbitControls />
            <Stats />
          </Canvas>
        </NonSSRWrapper>
      </div>
      <div style={{"display":"flex", "justify-content": "center", "color": "white", 'height': '80%'}}>
        <Box maxW="lg" m="0 auto" style={{"background": "green", "opacity": "0.3", "width":"100%", "margin": "0"}}>
        </Box>
        <Box maxW="2xl" m="0 auto">
          <Heading as="h1" style={{'margin': '1rem'}}>About Me</Heading>
          <br/>
          <Text style={{'margin-left': '1rem', 'margin-right': '1rem'}}>
            {"To know who I am we'll need to go back to 1991, the start of the the summer, may 30.\
              13 days later, the Los Angeles Lakers won the NBA Championship on June 12.\
              The internet was just getting started. Super Mario World, A Link to the Past and Sonic the Hedgehog had\
              all released in this year. I group up in an age of rapid technological grow. Which lead to an exceptional\
              opportunity to explore a world that's rapidly changing. In the ye old days, I can image life being very slow\
              most of the time.\
            "}
          </Text>
          <br/>
          <Text style={{'margin-left': '1rem', 'margin-right': '1rem'}}>
            {"As a baby, my family played a little game with me. They held out two objects. One was a digital watch and the other was\
              something I can't remember. But that something is what ended up defining the rest of my life.\
              No, of course I picked the stethoscope. And as I grew, more computerized objects popped up around me. One of the first, being\
              a computer. Endless exploration ensued, trying to figure out what I could do with this giant box. Could I play games?\
              Yes, yes I could, and some of those games came from disks inside cereal boxes. Didn't matter how good or bad the game\
              was, it was an experience like nothing else before it.\
            "}
          </Text>
          <br/>
          <Text style={{'margin-left': '1rem', 'margin-right': '1rem'}}>
            {"And so my fascination with computers and technology continued to grow over the years. I eventually started to dabble in programming\
              and oh my what a thrill it was. I type of bunch of letters, and out pop a bunch of pixels moving across the screen.\
              I played around with some HTML and CSS for a while, not really getting into actual programming languages, until High School.\
              I was lucky enough to have a robots and engineering elective available to take as a class. This is where I first started\
              learning how to program in Java and C++.\
            "}
          </Text>
        </Box>
        <Box maxW="lg" m="0 auto" style={{"background": "green", "opacity": "0.3", "width":"100%", "margin": "0", "height": "100vh"}}>
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