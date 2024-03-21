'use client'
import Content from "@/app/components/contents/content"
import Image from 'next/image'
import Lembu from '../public/Gunung-Lembu.jpg'
import Navbar from './components/navbar'
import Profile from "@/app/components/profiles/profile"
import Contact from '@/app/components/contacts/contact'
import {motion, useViewportScroll, useTransform} from 'framer-motion'
import { Link } from 'react-scroll'


export default function Home() {
  const {scrollY} = useViewportScroll()
  const zoomValueImage = useTransform(scrollY,[0,500],[1,1.5])


  return (
    <>
      <div className="relative h-[675px]">
        <div className="z-[1] absolute w-full">
          <Navbar />
          <div id="welcome" className='h-[500px] flex flex-col justify-center items-center px-4'>
            <Content />
          </div>
        </div>
          <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, scale: 1}}
          transition={{ duration: 0.5 }}
          className='z-[0] absolute w-full overflow-hidden h-[100vh] md:h-[700px]'>
            <motion.div 
            style={{ scale: zoomValueImage}}
            transition={{duration: 0.3, ease: `easeInOut`}}
            >
              <Image 
                src={Lembu}
                width={500}
                height={500}
                alt=''
                className="w-full h-[100vh] object-cover filter brightness-50"
              />
            </motion.div>
          </motion.div>
      </div>
      <div id="profile" className="h-[100vh] relative block">
        <Profile />
      </div>
      <div id="contact" className="h-[100vh] pt-16 relative flex justify-center items-center">
        <Contact />
      </div>
    </>
  );
}
