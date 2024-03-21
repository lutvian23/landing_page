import React from 'react'
import Location from '@/app/components/contacts/location'


const Contact = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row w-full h-[100vh] bg-gray-700 p-5 pt-16'>
        <div className='md:w-[50%] overflow-hidden h-full'><Location /></div>
        <div className='md:w-[50%] h-full bg-gray-950 text-white p-3'>
          <h3 className='text-center font-semibold py-3'>Contact</h3>
          <div className='flex flex-col gap-2'>
            <p>Email : lutvian702@gmail.com </p>
            <p>WhatsApp : 081381629401</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact