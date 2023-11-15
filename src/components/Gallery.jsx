import React, { useState } from 'react'

import Callum from '../assets/callum.jpg'
import Cam from '../assets/cam.jpg'
import David from '../assets/david.jpg'
import FinalTable from '../assets/finaltable.jpg'
import Jamie from '../assets/jamie.jpg'
import Markus from '../assets/markus.jpg'
import MoreTables from '../assets/moretables.jpg'
import Tables from '../assets/tables.jpg'

import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

const sliderData = [
    { image: Callum },
    { image: Cam },
    { image: David },
    { image: FinalTable },
    { image: Jamie },
    { image: Markus },
    { image: MoreTables },
    { image: Tables },
]

const Gallery = () => {
    const [slide, setSlide] = useState(0)
    const length = sliderData.length

    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1)
    }
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }

  return (
    <div className='max-w-[1240px] mx-auto px-4 pb-16 relative'>
        <h1 className='text-center mb-4'>Gallery</h1>
        <div className='flex justify-center items-center relative'>
            <BsArrowLeftSquareFill 
                onClick={prevSlide} 
                className='absolute top-[50%] text-3xl text-white cursor-pointer left-8' 
            />
            <BsArrowRightSquareFill 
                onClick={nextSlide} 
                className='absolute top-[50%] text-3xl text-white cursor-pointer right-8' 
            />
            
            <div className='mx-auto flex justify-center items-center'>
                {sliderData.map((item, index) => (
                    <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
                        {index === slide && (<img className='w-full rounded-md' src={item.image} alt='/' />)}
                    </div>
                ))}
            </div>
            
        </div>
        
    </div>
    );
};

export default Gallery