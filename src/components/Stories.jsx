import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import StoryCard from './StoryCard'
import beccacorreiaph from "../assets/beccacorreiaph.jpg"
import gabby from "../assets/gabby.jpg"
import ron from "../assets/ron.jpg"
import victoriastrelka from "../assets/victoriastrelka.jpg"

const STORIES = [
  {
    name: 'Daniel',
    src: beccacorreiaph,
    Profile: UserCircleIcon,
  },

  {
    name: 'Didi',
    src: gabby,
    Profile: UserCircleIcon,
  },

  {
    name: 'Joe',
    src: victoriastrelka,
    Profile: UserCircleIcon,
  },

  {
    name: 'Haq',
    src: ron,
    Profile: UserCircleIcon,
  },
]

const Stories = () => {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
        {
          STORIES.map(story => <StoryCard key={story.name} name={story.name} src={story.src} Profile={story.Profile}/>)
        }
    </div>
  )
}

export default Stories