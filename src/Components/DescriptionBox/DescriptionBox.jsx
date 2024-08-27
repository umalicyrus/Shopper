import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="decriptionbox-nav-box">Description</div>
            <div className="decriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                Welcome to Shooper, your premier destination for high-quality products across various categories.
                Our user-friendly platform offers a seamless shopping experience with advanced search tools,
                secure checkout, and real-time order tracking. 
            </p>
            <p>
                Shooper is your one-stop online shopping destination. Browse through
                our vast array of top-tier products, enjoy a seamless checkout process,
                and track your orders with ease. Our dedicated customer support team
                is always available to help. Experience convenience and quality with
                every visit to Shooper.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox