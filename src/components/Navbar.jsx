import React, { useState }from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaInstagram } from 'react-icons/fa'



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>UBC POKER CLUB</h1>
        </div>
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Signup</li>
            <li>Gallery</li>
            <li>Inquiries</li>
        </ul>

        {/* hamburger */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        </div>

        {/* mobile menu dropdown */}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
            <ul>
                <h1>UBC POKER CLUB</h1>
                <li className='border-b'>Home</li>
                <li className='border-b'>About</li>
                <li className='border-b'>Signup</li>
                <li className='border-b'>Gallery</li>
                <li className='border-b'>Inquiries</li>
                <div className='flex justify-between my-6'>
                    <FaInstagram className='icon' />
                </div>

            </ul>
        </div>

    </div>
  )
}

export default Navbar