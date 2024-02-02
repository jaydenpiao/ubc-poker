import React from 'react'
import logo from '../assets/logo.png'
import wpt from '../assets/wptglobal.png'

const Hero = () => {
  return (
    // <div className='w-full h-screen relative'>
    //     <img className='w-full h-full object-cover' src={logo} />

    //     <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
    //     <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
    //       <div className='bg-black bg-opacity-30 p-4 rounded-lg'>

    //       <h1>UBC's only Poker Club</h1>
    //         <h2 className='py-4'>Come play!</h2>
    //         <a href="https://forms.gle/RLixwCEpidUf9Pi79" 
    //           target="_blank" 
    //           rel="noopener noreferrer" 
    //           className='p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-md inline-block mx-auto font-semibold hover:from-[var(--primary-light)] hover:to-[var(--primary-dark)] transition duration-300'
    //         >
    //           UBC X WPT Free Roll
    //         </a>
    //         <h2 className='py-4'>
    //           Download WPT Global using code "UBC"
    //         </h2>
    //       </div>
            
    //     </div>
    // </div>

    <div className='w-full h-screen relative'>
        <img className='w-full h-full object-cover' src={logo} alt="UBC Poker Club Logo" />

        <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-center text-white p-4'>
          <div className='bg-black bg-opacity-50 p-4 rounded-lg'>
            <h1>UBC's only Poker Club</h1>
            <h2 className='py-4'>Come play!</h2>
            {/* <a href="https://forms.gle/RLixwCEpidUf9Pi79" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-md inline-block mx-auto font-semibold hover:from-[var(--primary-light)] hover:to-[var(--primary-dark)] transition duration-300'
            >
              UBC X WPT Free Roll
            </a> */}
            <h2 className='pb-4 pt-12'>
              Download WPT Global using code "UBC"
            </h2>
            <a href="https://wptglobal.com/landing/global-ticket-package?btag=a_35447b_376776c_35447_376776" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-md inline-block mx-auto font-semibold hover:from-[var(--primary-light)] hover:to-[var(--primary-dark)] transition duration-300'
            >
              <img className='w-[100px]' src={wpt}></img>
            </a>

            {/* <h1 className='text-4xl sm:text-7xl font-bold pb-5'>
                <span>Hi </span>
                <span className='home-emoji'>👋</span>
                <span>, I'm Jayden Piao</span>
            </h1> */}
            
          </div>  
        </div>
    </div>
  )
}

export default Hero