'use client'
import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import Lapangan1 from '@/public/lapangan1.jpeg'
import Lapangan2 from '@/public/lapangan2.jpg'
import Lapangan3 from '@/public/lapangan3.jpg'
import {motion, useTransform, useViewportScroll} from 'framer-motion'

const Photo = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const {scrollY} = useViewportScroll()
  const [currentVal, setCurrentVal] = useState(0)
  
  scrollY.onChange((latest) => {
    if(latest >= 675 && latest <= 760) {
      setShouldAnimate(true)
    }else{
      setShouldAnimate(false)
    }
  })
useEffect(() => {
  const scrollHandler = () => {

  }
  window.addEventListener('scroll',scrollHandler)
  return () => {
    window.removeEventListener('scroll',scrollHandler)
  }
},[currentVal, setShouldAnimate])

  return (
    <>
        {/* card-1 */}
        <motion.div
        whileHover={{rotate:0}}
        animate={{rotate: shouldAnimate ? 12 : 0, x: shouldAnimate ? 0 : -73, y: shouldAnimate ? 0 : 25}}
        transition={{duration: 0.1, ease: 'easeInOut', delay: 0.2}}
        className='ml-36 mb-12 bg-white rotate-12 xl:w-[250px] xl:h-[400px] w-[145px] h-[220px] border-2 border-solid border-black rounded-md hover:scale-110 transition duration-100 hover:z-[4] hover:rotate-0'>
        <div className='relative rounded-md h-[90%]'>
            <Image
            src={Lapangan1}
            width={1000}
            height={1000}
            alt=''
            className='object-cover w-full h-full inset-0 absolute'
            />
        </div>
        </motion.div>
        {/* card-2 */}
        <motion.div
        whileHover={{rotate:0}}
        animate={{rotate: shouldAnimate ? -12 : 0, x: shouldAnimate ? 0 : 73, y: shouldAnimate ? 0 : 25}}
        transition={{duration: 0.1, ease: 'easeInOut', delay: 0.2}}
        className='mr-36 mb-12 absolute bg-white -rotate-12 xl:w-[250px] xl:h-[400px] w-[145px] h-[220px] border-2 border-solid border-black rounded-md hover:scale-110 transition duration-100 hover:z-[4] hover:rotate-0'>
        <div className='relative rounded-md h-[90%]'>
            <Image
            src={Lapangan2}
            width={1000}
            height={1000}
            alt=''
            className='object-cover w-full h-full inset-0 absolute'
            />
        </div>
        </motion.div>
        {/* card-2 */}
        <div className='absolute bg-white xl:w-[250px] xl:h-[400px] w-[145px] h-[220px] border-2 border-solid border-black rounded-md'>
        <div className='relative rounded-md h-[90%]'>
            <Image
            src={Lapangan3}
            width={1000}
            height={1000}
            alt=''
            className='object-cover w-full h-full inset-0 absolute'
            />
        </div>
        </div>
    </>
  )
}

export default Photo