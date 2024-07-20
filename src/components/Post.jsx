import React from 'react'
import { ShareIcon, HandThumbUpIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'

const Post = ({name, message, email, postImage, image, timestamp }) => {
  return (
    <div className='flex flex-col'>
      <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
        <div className='flex items-center space-x-2'>
          <img className='rounded-full object-cover w-10 h-10' src={image} alt="" />
          <div>
            <p className='font-medium'>{name}</p>
            <p className='text-xs text-gray-400'>{timestamp}</p>
          </div>
        </div>

        <p className='pt-4'>
          {message}
        </p>
      </div>

      {postImage && (
        <div className='relative h-56 md:h-96 bg-white'>
          <img src={postImage} alt="" className='object-cover w-full h-full inset-0'/>
        </div>
      )}

      <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
        <div className='flex justify-center inputIcon rounded-none rounded-bl-2'>
          <HandThumbUpIcon className='h-4' />
          <p className='text-xs sm:text-base '>Like</p>
        </div>
        <div className='flex justify-center inputIcon rounded-none rounded-bl-2'>
          <ChatBubbleBottomCenterIcon className='h-4'/>
          <p className='text-xs sm:text-base '>Comment</p>
        </div>
        <div className='flex justify-center inputIcon rounded-none rounded-bl-2'>
          <ShareIcon className='h-4'/>
          <p className='text-xs sm:text-base '>Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post