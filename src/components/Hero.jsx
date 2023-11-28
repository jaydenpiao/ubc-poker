import React from 'react'
import logo from '../assets/logo.png'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <img className='w-full h-full object-cover' src={logo} />

        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1>UBC's only Poker Club</h1>
            <h2 className='py-4'>Come play!</h2>
            <a href="https://forms.gle/1dcFGTXf7fTUJLhc9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-md inline-block mx-auto font-semibold hover:from-[var(--primary-light)] hover:to-[var(--primary-dark)] transition duration-300'
            >
              Tournament Registration
            </a>
        </div>
    </div>
  )
}

export default Hero