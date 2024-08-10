import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" style={{width:"250px", height:"350px"}} />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="price-new">
                ${props.new_price}
            </div>
            <div className="price-old">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item