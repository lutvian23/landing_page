'use client'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import {motion, useViewportScroll} from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const {scrollY} = useViewportScroll()
  const [isTop, setIsTop] = useState(true)
  useEffect(() => {
    return scrollY.onChange(() => {
      setIsTop(scrollY.get() <= 0)
    })
  },[scrollY])
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.3, ease: `easeInOut`}}
    className={`fixed z-[10] w-[100%] p-2 xl:p-4 md:p-2 flex justify-between items-center  ${isTop ? 'bg-gradient-to-b from-black to-transparent' : 'bg-green-700'}`}>
      <ScrollLink to='welcome' smooth={true} duration={750} spy={true}>
        <h2 className='font-bold xs:text-2xl md:text-[25px] text-[20px] text-white hover:cursor-pointer'>Mata Bor Air</h2>
      </ScrollLink>
        <div className='flex text-white'>
            <ScrollLink to="profile" smooth={true} spy={true} duration={750}>
              <li className='list-none p-2 rounded-md hover:text-blue-400 hover:cursor-pointer'>Profile</li>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} spy={true} offset={70} duration={750}>
              <li className='list-none p-2 rounded-md hover:text-blue-400 hover:cursor-pointer'>Contact</li>
            </ScrollLink>
        </div>
    </motion.div>
  )
}

export default Navbar