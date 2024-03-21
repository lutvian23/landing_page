'use client'
import React, {useState} from 'react'
import {motion, useViewportScroll, useTransform} from 'framer-motion'
import Photo from '@/app/components/profiles/photo'

const Profile = () => {
  const {scrollY} = useViewportScroll()
  const animationProfile = useTransform(scrollY,[0,675],[300,0])
  const [shouldAnimate, setShouldAnimate] = useState(false)
  scrollY.onChange((latest) => {
    if(latest >= 675 && latest <= 850) {
      setShouldAnimate(true)
    }else{
      setShouldAnimate(false)
    }
  })
  return (
    <div className='px-5 h-[100%]'>
        <motion.div 
        initial={{y: -3}}
        animate={{y: 0}}
        transition={{duration: 0.3, ease: `easeIn`}}
        className='h-[15%] flex justify-center items-end'>
            <h2 className='text-2xl font-semibold'>PROFILE</h2>
        </motion.div>
        <div className='h-[85%] flex flex-col-reverse items-center justify-center md:flex-row md:items-center md:justify-between'>
            <motion.div 
            initial={{opacity: 0, x: -400}}
            animate={{opacity: shouldAnimate ? 1 : 0, x: shouldAnimate ? 0 : -400}}
            transition={{duration: 0.3, ease: `easeInOut`}}
            className='md:w-[50%] font-semibold text-inter xl:text-[20px] md:text-[15px] text-[10px] md:px-6'>kami adalah sebuah perusahaan jasa pengeboran mata air yang berkomitmen untuk memberikan solusi terbaik dalam pembuatan mata air untuk penghuni baru maupun setempat. Dengan pengalaman dan keahlian yang kami miliki, kami siap membantu mengatasi berbagai masalah terkait kebutuhan air, mulai dari pembuatan sumur bor hingga perawatan sistem penyaluran air</motion.div>

            <motion.div
            initial={{y: 300, filter: 'blur(100%)'}}
            animate={{y: 0, filter: 'blur(0%)'}}
            transition={{duration: 0.5, ease: `easeInOut`}}
            style={{translateY: animationProfile}}
            className=' md:w-[50%] w-full items-start flex md:items-center justify-center'>
              <Photo />
            </motion.div>
        </div>
    </div>
  )
}

export default Profile