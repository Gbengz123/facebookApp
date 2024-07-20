import React from 'react'

const StoryCard = ({name, src, Profile}) => {
  return (
    <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3'>
        <Profile className='absolute text-white inset-0 w-10 h-10 object-cover opacity-0 lg:opacity-75 rounded-full z-40 top-5 '/>
        <img src={src} alt="" className='absolute object-cover w-full h-full inset-0 filter brightness-75 rounded-full lg:rounded-3xl'/>
        <p className='absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'>
          {name}
        </p>
    </div>
  )
}

export default StoryCard