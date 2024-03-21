import React, {useEffect, useState} from 'react'
import Location from '@/app/components/contacts/location'
import { useViewportScroll,motion } from 'framer-motion'


const Contact = () => {
    const {scrollY} = useViewportScroll()
    const [shouldAnimate, setShouldAnimate] = useState(false)
    scrollY.onChange((latest) => {
        if(latest >= 948 && latest <= 1590) {
            setShouldAnimate(true)
        }else{
            setShouldAnimate(false)
        }
    })

  return (
    <>
      <div className='flex overflow-hidden flex-col md:flex-row w-full h-[100vh] bg-gray-700 p-5 pt-16'>
        <motion.div 
        animate={{x: shouldAnimate ? 0 : -700, opacity: shouldAnimate ? 1 : 0, }}
        transition={{duration: 0.6, ease: `easeInOut`}}
        className='md:w-[50%] overflow-hidden h-full'>
            <Location />
        </motion.div>
        <motion.div 
        animate={{x: shouldAnimate ? 0 : 700, opacity: shouldAnimate ? 1 : 0, }}
        transition={{duration: 0.6, ease: `easeInOut`}}
        className='md:w-[50%] h-full bg-gray-950 text-white p-3'>
          <h3 className='text-center font-semibold py-3'>Contact</h3>
          <div className='flex flex-col gap-2'>
            <p>Email : lutvian702@gmail.com </p>
            <p>WhatsApp : 081381629401</p>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Contact