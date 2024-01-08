import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Inquiries = () => {
    

  return (
    <div className='w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/c197ddf8-6806-49b6-92c2-bb772b3272c2' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-center'>Inquiries</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-md' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-md' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 rounded-md bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] px-4 py-3 my-8 mx-auto flex items-center transition ease-in-out font-semibold hover:from-[var(--primary-light)] hover:to-[var(--primary-dark)] duration-300'>Submit</button>
        </form>

    </div>
  )
}

export default Inquiries