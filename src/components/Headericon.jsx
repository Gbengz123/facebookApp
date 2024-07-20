import React from 'react'


const Headericon = ({Icon, active}) => {
  
  return (
    <div  className='cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl flex items-center group-hover:text-blue-500'>
      <Icon className={`h-5 text-center hover:text-blue-500 sm:h-7 mx-auto ${active ? 'text-blue-500' : 'text-gray-500'}`}/>
    </div>
  )
}

export default Headericon