import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subribes to our newsletter and stay updated</p>
      <div>
        <input type="text" placeholder='Enter Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter