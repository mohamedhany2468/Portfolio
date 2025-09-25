"use client"

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function AnmationHome() {
  return (
    <>

{/* <h2 className="md:text-3xl text-xl font-medium text-[#a0a0a0] mb-2">Front-End Developer</h2> */}
      <span className="md:text-3xl text-xl font-medium text-[#a0a0a0] mb-2">
        <Typewriter
          words={["Frontend Developer", "React Developer", "Next.js Developer"]}
          loop={0} // 0 = infinite
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </>
  )
}

export default AnmationHome