import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.jfif';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="Thumbnail" />
                    <img src={product.image} alt="Thumbnail" />
                    <img src={product.image} alt="Thumbnail" />
                    <img src={product.image} alt="Thumbnail" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="Main Product" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Elevate your casual look with our Classic Crew Neck Tee. Crafted from 100% premium cotton, this shirt offers a soft, breathable feel that's perfect for all-day wear. Featuring a timeless design with a ribbed crew neck and reinforced stitching, it's available in a range of versatile colors. Ideal for layering or wearing solo, it’s the staple piece your wardrobe has been missing.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category:</span> Men, Jackets</p>
                <p className="productdisplay-right-category"><span>Tags:</span> Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
