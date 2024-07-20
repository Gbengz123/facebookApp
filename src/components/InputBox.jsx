import React from 'react'
import { FaceSmileIcon } from '@heroicons/react/24/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/16/solid'
import moussa from '../assets/moussa.jpg'

const InputBox = () => {
  const sendPost = (e) => {
    e.preventDefault();
  }

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
        <div className='flex space-x-4 p-4 items-center'>
            <img 
            src= {moussa}
            alt="Facebook logo"
            className='rounded-full h-10 w-10' 
            />
            <form action="" className='flex flex-1'>
                <input type="text" name="" id="" placeholder={`What's on your mind, Gbenga`} className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'/>
                <button hidden type='submit' onClick={sendPost}></button>
            </form>
        </div>

        <div className='flex justify-evenly p-3 border-t'>
            <div className='inputIcon'>
                <VideoCameraIcon className='h-7 text-red-500 ' />
                <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
            </div>
            <div className='inputIcon'>
                <CameraIcon className='h-7 text-green-400 ' />
                <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
            </div>
            <div className='inputIcon'>
                <FaceSmileIcon className='h-7 text-yellow-300 ' />
                <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
            </div>
        </div>
    </div>
  )
}

export default InputBox