import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className= 'newsletter'>
        <h1>Notification For Exclusive Offer Via Email</h1>
        <p>Subscribe with your Email address and stay updated</p>
        <div>
            <input type= 'Email' placeholder='Your Email Id'/>
            <button>Subscribe</button> 
        </div>
      
    </div>
  )
}

export default NewsLetter
