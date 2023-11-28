import React, { useState }from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaInstagram } from 'react-icons/fa'
import { Link } from 'react-scroll';
import wpt from '../assets/wpt.jpeg';

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
            <li className='hover:text-gray-300 cursor-pointer'><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='hover:text-gray-300 cursor-pointer'><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li className='hover:text-gray-300 cursor-pointer'><Link to="inquiries" smooth={true} duration={500}>Inquiries</Link></li>
            <li className='hover:text-gray-300 cursor-pointer'><Link to="gallery" smooth={true} duration={500}>Gallery</Link></li>

            {/* WPT Image Link */}
            {/* <li>
                    <a href="https://tracking.wptpartners.com/visit/?bta=35447&nci=5373" target="_blank" rel="noopener noreferrer">
                        <img src={wpt} alt="WPT" className='icon' style={{ width: '20px', height: '20px' }} />
                    </a>
            </li> */}

            <li>
                <a href="https://www.instagram.com/ubcpokerclub/?hl=en" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className='icon' />
                </a>
            </li>

            
            
        </ul>

        {/* hamburger */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        </div>

        {/* mobile menu dropdown */}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
            <ul>
                <h1>UBC POKER CLUB</h1>
                <li className='hover:text-gray-300 cursor-pointer border-b'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='hover:text-gray-300 cursor-pointer border-b'><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li className='hover:text-gray-300 cursor-pointer border-b'><Link to="inquiries" smooth={true} duration={500}>Inquiries</Link></li>
                <li className='hover:text-gray-300 cursor-pointer border-b'><Link to="gallery" smooth={true} duration={500}>Gallery</Link></li>

                {/* <li>
                    <a href="https://tracking.wptpartners.com/visit/?bta=35447&nci=5373" target="_blank" rel="noopener noreferrer">
                        <img src={wpt} alt="WPT" className='icon border-b' style={{ width: '20px', height: '20px' }} />
                    </a>
                </li> */}

                <li>
                    <a href="https://www.instagram.com/ubcpokerclub/?hl=en" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='icon border-b' />
                    </a>
                </li>
                

            </ul>
        </div>

    </div>
  )
}

export default Navbar