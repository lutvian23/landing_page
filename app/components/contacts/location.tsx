'use client'
import React from 'react'

const Location = () => {
  return (
    <div className='h-[100%] w-[100%]'>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.909921112272!2d107.45254757499306!3d-6.533060093459661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e690fb0df6e6bc3%3A0x11e70aadfbc88de3!2sPerum%20munjuljaya%20permai!5e0!3m2!1sen!2sid!4v1710924219937!5m2!1sen!2sid"
      className="border-0 w-[100%] h-[100%] absolute-[2]" 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  )
}

export default Location