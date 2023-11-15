import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { Link } from 'react-scroll';

const Footer = () => {
    return (
      <div className='w-full bg-gray-100 py-16'>
          <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
              
              <div className='flex justify-between items-center mb-8'> 
                  <h1>UBC POKER CLUB</h1>
                  <div>
                        <a href="https://www.instagram.com/ubcpokerclub/?hl=en" target="_blank" rel="noopener noreferrer">
                          <FaInstagram className='icon' />
                        </a>
                  </div>
              </div>
              
              <div className='flex flex-col sm:flex-row justify-start'> 
                  <ul>
                    <li className='hover:text-gray-300 cursor-pointer'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li className='hover:text-gray-300 cursor-pointer'><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li className='hover:text-gray-300 cursor-pointer'><Link to="inquiries" smooth={true} duration={500}>Inquiries</Link></li>
                    <li className='hover:text-gray-300 cursor-pointer'><Link to="gallery" smooth={true} duration={500}>Gallery</Link></li>
                  </ul>
              </div>
          </div>
      </div>
    );
  }

export default Footer