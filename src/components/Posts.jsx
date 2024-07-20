import React from 'react'
import Post from './Post'
import badis from '../assets/badis.jpg'
import marlinclark from '../assets/marlinclark.jpg'

const Posts = () => {
  const POSTS = [
    {
      name: 'John',
      message: 'Just had the most incredible weekend exploring the great outdoors! 🏞️🌲✨ Found this hidden gem of a hiking trail and the views were absolutely breathtaking.',
      timestamp: 'July 20, 2024 at 3:45 PM',
      image: badis,
      postimage: marlinclark
    },
    {
        name: '2',
        message: null,
        timestamp: null,
        image: null,
        postimage: null
    },
    {
        name: '4',
        message: null,
        timestamp: null,
        image: null,
        postimage: null
    },
    {
        name: '3',
        message: null,
        timestamp: null,
        image: null,
        postimage: null
    },
    {
        name: '5',
        message: null,
        timestamp: null,
        image: null,
        postimage: null
    },
    {
        name: '6',
        message: null,
        timestamp: null,
        image: null,
        postimage: null
    },
    {
        name: '7',
        message: null,
        timestamp: null,
        image: null,
        postimage: null
    },
    {
        name: '8',
        message: null,
        timestamp: null,
        image: null,
        postimage: null
    },
  ]  

  return (
    <div>
      {
        POSTS.map(post => <Post key={post.name} name={post.name} message={post.message} timestamp={post.timestamp} image={post.image} postImage={post.postimage} />)
      }
    </div>
  )
}

export default Posts