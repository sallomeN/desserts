import React from "react";
import "../styles/App.css";
import { EmptyCart } from "../icons/Icons";
import { RemoveItem } from "../icons/Icons";
import { CarbonNeutral } from "../icons/Icons";

const Cart = ({cart, onRemoveFromCart, totalPrice, totalQuantity  }) => {

return (
    <div className="cart">
      <h1 className="cart-title">Your Cart ({totalQuantity}) </h1>
      {cart.length === 0 ? (        /*პირობა გულისხმობს, რომ თუ კალათა ცარიელია (ანუ ამ მასივის სიგრძე არის 0) ცარიელი კალათის ლოგოს გამოიტანს */
        <div className="cart-icon">
          <EmptyCart />
          <p className="cart-message">Your added items will appear here</p>
        </div>
      ) : (  /* სხვა შემთხვევაში კი ობიექტებს, დესერტებს რომლებიც კალათში დავამატეთ*/
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <div>{item.name}</div>
              <div>
                <button  onClick={() => onRemoveFromCart(item)} className="remove-item">  {/* ღილაკი რომელზე დაჭერისას კალათიდან ნივთის წაშლის ფუნქცია აქტიურდება*/}
                <RemoveItem/>
              </button></div>
            </div>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <span style={{display:"flex", justifyContent:"flex-start", alignItems:"center"}}>
                <p style={{fontSize:"1.2rem", color:"rgb(164, 45, 8)", fontWeight:"bold", paddingRight:"0.8rem"}}>
                    ${item.price}</p> x <p style={{paddingLeft:"0.8rem", fontWeight:"bold"}}>{item.quantity}</p>
                </span>
                <span><b>${item.price * item.quantity}</b></span>
              </div>
            </div>
          ))}
          <h2>Total: ${totalPrice.toFixed(2)}</h2> {/* უზრუნველყოფს რრომ ჯამური ფასი დამრგვალდეს მძიმის შემდეგ 2 ციფრით*/}
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