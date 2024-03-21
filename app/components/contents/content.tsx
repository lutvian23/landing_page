import React from 'react'
import {motion} from 'framer-motion'

const Content = () => {
  return (
    <>
      <div>
        <motion.div 
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.8, ease: `easeIn`}}
        >
          <h2 className='font-bold text-[50px] md:text-[60px] text-white'>SOLUSI MATA AIR DARI BUMI</h2>
        </motion.div>
        <p className='text-white font-semibold tracking-wide text-center'>P U R W A K A R T A</p>
      </div>
      <div className='text-center absolute bottom-0'>
        <p className='text-white'>Owner By : Abah Ato</p>
      </div>
    </>
  )
}

export default Content