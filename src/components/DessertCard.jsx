import React from "react";
import { AddToCart } from "../icons/Icons";
import { DecrementQuantity } from "../icons/Icons";
import { IncrementQuantity } from "../icons/Icons";


const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts"

const Dessert = ({dessert, onAddToCart, isInCart, onIncrementQuantity, onDecrementQuantity, quantity}) => {

    return(
<div
 className={`product-card ${isInCart ? "in-cart" : ""}`}> {/*ეს გვეხმარება პირობითი კლასის მინიჭებაში, თუ ეს ნივთი კალათაშია ანუ თუ კმაყოფილდება isInCart პირობა,
 მაშინ ამ პროდუქტს ეძლევა in-cart კლასი, რომელიც წითელი ჩარჩოს გამოსასახად გვჭირდება */}

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
   {isInCart ? (  /* თუ დესერტი არის კალათაში, დაბლა მოცემული ღილაკები , რომელთა დაჭერაზეც app.jsx- ში უკვე დაწერილი ფუნქციები ეშვება გვეძლევა საშუალება ვაკონტროლოთ მისი რაოდენობა*/
    <div className="quantity-controls">
        <button onClick={() => onDecrementQuantity(dessert)} className="decrement-button"> {/*შევამციროთ რაოდენობა ერთით*/}
            <DecrementQuantity/>
        </button>
        <span>{quantity}</span>
        <button onClick={() => onIncrementQuantity(dessert)} className="decrement-button"> {/*გავზარდოთ რაოდენობა ერთით*/}
            <IncrementQuantity/>
        </button>
    </div>
        ) : (
          <button onClick={() => onAddToCart(dessert)} className="add-to-cart"> {/*ხოლო თუ არ გვაქვს კალათაში დამატებული მაშინ კალათაში დამატების ფუნქციით გვეძლევა საშუალება ეს გავაკეთოთ*/}
            <AddToCart/> Add to Cart
          </button>
        )}

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