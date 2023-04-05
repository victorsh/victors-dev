import React from 'react'
import { Heading, Text, Box, flexbox } from '@chakra-ui/react'
import Links from '@/components/layouts/Links'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

import aboutStyle from '@/styles/About.module.css'
import canvasStyle from '@/styles/Canvas.module.css'

import NonSSRWrapper from '@/components/utils/NonSSRWrapper'
import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import OrbitControls from '@/components/three/OrbitControls'
import Stars from '@/components/three/Stars'
import LightBulb from '@/components/three/LightBulb'

export default function About(props) {
  return (
    <div className={aboutStyle.about_container}>
      <Header />
      <Links />
      <div className={canvasStyle.scene}>
        <NonSSRWrapper>
          <Canvas
            shadows={true}
            className={canvasStyle.canvas}
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
      <div style={{width: '100%', height: '50px', background: 'transparent', zIndex: 1, position: 'fixed', top: 0, left: 0}}></div>
      <div className={aboutStyle.about_wrapper}>
        <div style={{width: '100%', height: '20px', background: 'trasparent' }}></div>
        <Box maxW="2xl" m="0 auto" className={aboutStyle.text_container}>
          <Heading as="h1" style={{'margin': '1rem'}}>About Me</Heading>
          <br/>
          <Text className={aboutStyle.text_box}>
            {"To know who I am we'll need to go back to 1991, the start of the the summer, may 30.\
              13 days later, the Los Angeles Lakers won the NBA Championship on June 12.\
              The internet was just getting started. Super Mario World, A Link to the Past and Sonic the Hedgehog had\
              all released in this year. I grew up in an age of rapid technological growth. This lead to an exceptional\
              opportunity to explore a world that's rapidly changing. In the ye old days, I can image life being very slow\
              most of the time. Traveling was slow, mail was slow, birds were used to send messages back and forth. I imagine\
              a lot of sitting around and waiting. This is no longer the case, we live and a world with an infinite number\
              of things to do and explore, especially in the realm of computer and technology.\
            "}
          </Text>
          <br/>
          <Text className={aboutStyle.text_box}>
            {"As a baby, my family played a little game with me. They held out two objects. One was a digital watch and the other was\
              something I can't remember. But that something is what ended up defining the rest of my life.\
              No, of course I picked the stethoscope. And as I grew, more computerized objects popped up around me. One of the first, being\
              a computer. Endless exploration ensued, trying to figure out what I could do with this giant box. Could I play games?\
              Yes, yes I could, and some of those games came from disks inside cereal boxes. Didn't matter how good or bad the game\
              was, it was an experience like nothing else before it.\
            "}
          </Text>
          <br/>
          <Text className={aboutStyle.text_box}>
            {"And so my fascination with computers and technology continued to grow over the years. I eventually started to dabble in programming\
              and oh my what a thrill it was. I type of bunch of letters, and out pop a bunch of pixels moving across the screen.\
              I played around with some HTML and CSS for a while, not really getting into actual programming languages, until High School.\
              I was lucky enough to have a robots and engineering elective available to take as a class. This is where I first started\
              learning how to program in Java and C++.\
            "}
          </Text>
          <br/>
          <Text className={aboutStyle.text_box}>
            {"Many many years passed and my experience with programming and web development continued to grow. I learned to use\
              PHP, Apache and jQuery to build websites, mostly as a hobby. This skill eventually came in handy when a family member\
              needed a website built for their business. And so I went about building an e-commerce site using codeigniter from scratch.\
              I made an ample amount of progress building the site but ran out of time. In a last minute effort I switched to using\
              Woocommerce. The results were great and my family was happy. I learned a valuable lesson going through this process. Although\
              I wanted to build from scratch and learn the whole process of building an e-commerce site. Sometimes it's better not to\
              to re-create the wheel and instead get to a finished product as quickly as possible.\
            "}
          </Text>
          <br/>
          <Text className={aboutStyle.text_box}>
            {"Moving forward!! University was an exceptional experience. Computer Science was my major, if that wasn't already apparent.\
              The classes I took, the people I met an interacted with lead to having a great time during college. I very much enjoyed the curriculum.\
              Along with the usual set of classes e.g. Data Structures and Algorithms, Computer Engineering, Compiler Design, Operating Systems, ...\
              I also enrolled in Computer Graphics, Distributed Systems and Data visualization. Each course lead to a greater understand of computers\
              as a whole and each course solidified my choice in choosing to pursue Computer Science as a major. I loved the critical thinking around it\
              all. The feeling of an idea clicking in my head was, and still is, insurmountable to most experiences in my life.\
            "}
          </Text>
          <br/>
          <Text className={aboutStyle.text_box}>
            {"After graduating from university, I started the hunt for a job that was both interesting and allowed me to grow in my career.\
              I stumbled upon a startup that looked to be a lot of fun to work with. The company was called Adventure Corporation and involved\
              prototyping various kinds of web based applications. We also prototyped Ethereum based projects, built ERC20 and ERC721 based\
              tokens. It was all fun but I felt that I wanted a position within a well established compnany. So I began the job search yet again.\
            "}
          </Text>
        </Box>
        <Box maxW="lg" m="0 auto" className={aboutStyle.buffer_box}>
        </Box>
      </div>
      <Footer />
    </div>
  )
}
