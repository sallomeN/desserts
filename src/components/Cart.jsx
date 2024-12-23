import React from "react";
import "../styles/App.css";
import { EmptyCart } from "../icons/Icons";
import { RemoveItem } from "../icons/Icons";
import { CarbonNeutral } from "../icons/Icons";

const Cart = ({cart, onRemoveFromCart, totalPrice, totalQuantity  }) => {

return (
    <div className="cart">
      <h1 className="cart-title">Your Cart ({totalQuantity}) </h1>
      {cart.length === 0 ? (
        <div className="cart-icon">
          <EmptyCart />
          <p className="cart-message">Your added items will appear here</p>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <div>{item.name}</div>
              <div>
                <button  onClick={() => onRemoveFromCart(item)} className="remove-item">
                <RemoveItem/>
              </button></div>
            </div>
              <span style={{display:"flex", justifyContent:"flex-start", alignItems:"center"}}>
                <p style={{fontSize:"1.2rem", color:"rgb(164, 45, 8)", fontWeight:"bold", paddingRight:"0.8rem"}}>
                    ${item.price}</p> x <p style={{paddingLeft:"0.8rem", fontWeight:"bold"}}>{item.quantity}</p>
                </span>
            </div>
          ))}
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <div style={{display:"flex", alignItems:"center", padding:"10px", backgroundColor:"rgb(225, 192, 202)", borderRadius:"10px"}}>
            <div className="carbo-neutral-icon">
            <CarbonNeutral/>
            </div>
             <p style={{color:"white"}}>This is a <b>carbon-neutral</b> delivery</p>
          </div>
          <button className="confim-btn">Confirm order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;