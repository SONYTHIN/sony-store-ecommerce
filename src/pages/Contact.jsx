import { Input } from 'postcss'
import React from 'react'

function Contact() {
  return (
    <div className='max-w-[90%] lg:max-w-3xl mx-auto font-jost'>
      <form action=""  className='w-full shadow-md p-4'>
      <h1 className='text-center font-bold text-3xl'> Contact Us </h1>  

      <div className='mb-3'>
        <label htmlFor=""> Name <span className='text-red-500'>*</span></label>
        <input type='text' placeholder='Enter Your Name ' className='w-full border border-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue transition-all ease-in-out' />
      </div>

       <div className='mb-3'>
        <label htmlFor=""> Phone <span className='text-red-500'>*</span></label>
        <input type='phone' placeholder='Enter Your Phone ' className='w-full border border-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue transition-all ease-in-out' />
      </div>

      <div className='mb-3'>
        <label htmlFor=""> Message <span className='text-red-500'>*</span></label>
        <textarea type='text' placeholder='Write Your Message ' className='w-full border border-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue transition-all ease-in-out' />
      </div>

      <div className='flex justify-end'>
        <button type='submit' className='bg-primary text-white rounded px-5 py-2 hover:bg-yellow-700'> Submit </button>
      </div>
      </form>
    </div>
  )
}

export default Contact