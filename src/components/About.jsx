import React from 'react'

import Callum from '../assets/callum.jpg'
import Cam from '../assets/cam.jpg'
import David from '../assets/david.jpg'
import Jamie from '../assets/jamie.jpg'
import MoreTables from '../assets/moretables.jpg'

const About = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>bout UBC Poker</h1>
        <p className='py-4 text-lg'>Welcome to the UBC Poker Club! We host monthly tournaments featuring a variety of exciting game modes, including Mystery Bounties and Turbo Structures. Our tournaments attract a diverse range of players, with participation sometimes reaching 100+ players! These lively events are not just about the thrill of the game, but also about the opportunity to win big, with prizes often exceeding $1,000. Whether you're a poker pro or new to the game, we offer a vibrant community and a perfect opportunity to sharpen your skills, meet new friends, and experience the excitement of competitive poker. Join us for a hand, and let the cards decide your fate!</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
          <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={MoreTables} alt="/" />
          <img className='w-full h-full object-cover' src={Callum} alt="/" />
          <img className='w-full h-full object-cover' src={Cam} alt="/" />
          <img className='w-full h-full object-cover' src={David} alt="/" />
          <img className='w-full h-full object-cover' src={Jamie} alt="/" />
        </div>

    </div>
  )
}

export default About