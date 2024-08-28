import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="" style={{width: "250px", height: "350px"}} /></Link>
      <div className="item-details">
        <div className="item-name">{props.name}</div>
        <div className="item-prices-container">
          <div className="item-prices">
            <div className="price-new">${props.new_price}</div>
            <div className="price-old">${props.old_price}</div>
          </div>
          <button className="item-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
