import React from 'react'
import './Breadcrum.css'
import right_icon from '../Assets/right_icon.svg'


const Breadcrum = (props) => {
  const {product} = props
  return (
    <div className='breadcrum'>
      HOME  <img className='breadcrum-right-icon' src={right_icon} alt="" /> SHOP <img className='breadcrum-right-icon' src={right_icon} alt="" />{product.category} <img className='breadcrum-right-icon' src={right_icon} alt="" />{product.name}

    </div>
  )
}

export default Breadcrum