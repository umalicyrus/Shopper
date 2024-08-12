import React from 'react'
import './Offer.css'
import exclusive_icon from '../Assets/exclusive_icon.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_icon} alt="" style={{width:"250px", height:"300px"}} />
        </div>
    </div>
  )
}


export default Offers