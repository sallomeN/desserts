import React from "react";
import { AddToCart } from "../icons/Icons";
import { DecrementQuantity } from "../icons/Icons";
import { IncrementQuantity } from "../icons/Icons";


const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts";

const Dessert = ({dessert, isInCart}) => {
    return(
<div
 className={`product-card ${isInCart ? "in-cart" : ""}`}>

<picture>
<source
    media="(min-width:1024px)"
    srcSet={`${BASE_URL}/${dessert.images.desktop}`}
/>
<source
    media="(min-width:768px)"
    srcSet={`${BASE_URL}/${dessert.images.tablet}`}
/>
 <img className='img'
    src={`${BASE_URL}/${dessert.images.mobile}`}
    alt={dessert.name}
    style={{ width: '100%' }}
/>
</picture>

<div className="below-stuff">
        <button className="add-to-cart">
         <AddToCart /> Add to Cart
        </button>
    <div className="quantity-controls">
        <button>
            <DecrementQuantity/>
        </button>
        <span>{isInCart.quantity}</span>
        <button>
            <IncrementQuantity/>
        </button>
    </div>
    <span className="product-info">
        <p className="category">{dessert.category}</p>
        <h2>{dessert.name}</h2>
        <p className="price">${dessert.price}</p>
    </span>
</div>
</div>


    )
}
export default Dessert