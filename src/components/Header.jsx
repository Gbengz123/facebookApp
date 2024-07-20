import React from 'react'
import { 
  MagnifyingGlassIcon,
  UserGroupIcon,
  HomeIcon,
  BellIcon,
  ChatBubbleOvalLeftIcon,
  ChevronDownIcon,
  Squares2X2Icon,
} from '@heroicons/react/16/solid'
import { 
  ShoppingCartIcon,
  PlayCircleIcon,
  FlagIcon,
} from '@heroicons/react/24/outline'
import Headericon from './Headericon'

import facebook from '../assets/facebook.png'
import moussa from '../assets/moussa.jpg'

const Header = () => {
  return (
    <div className='flex sticky top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md'>
      {/* left */}
      <div className='flex items-center'>
        <img 
          src= {facebook}
          alt="Facebook logo"
          width={40}
          height={40} 
        />

        <div className='flex ml-2 items-center bg-gray-100 p-2 rounded-full'>
          <MagnifyingGlassIcon className='size-6 text-gray-600'/>
          <input type="text" placeholder='search facebook' className='hidden md:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink'/>
        </div>
      </div>

      {/* center */}
      <div className='flex justify-center grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <Headericon active={true} Icon={HomeIcon}/>
          <Headericon Icon={ShoppingCartIcon}/>
          <Headericon Icon={PlayCircleIcon}/>
          <Headericon Icon={FlagIcon}/>
          <Headericon Icon={UserGroupIcon}/>
        </div>
      </div>

      {/* right */}
      <div className='flex items-center sm:space-x-2 justify-end'>
        <img src={moussa} alt="profile pic" className='rounded-full cursor-pointer w-10 h-10' />
        <p className='font-semibold pr-3 whitespace-nowrap'>Gbenga</p>
        <Squares2X2Icon className='icon'/>
        <BellIcon className='icon'/>
        <ChatBubbleOvalLeftIcon className='icon'/>
        <ChevronDownIcon className='icon'/>
      </div>
    </div>
      
  )
}

export default Header