import React from "react";
import { EmptyCart } from "../icons/Icons";
import { RemoveItem } from "../icons/Icons";

const Cart = ({ cart }) => {

return (
    <div className="cart">
      <h1 className="cart-title">Your Cart </h1>
      {cart.length === 0 ? (
        <div className="cart-icon">
          <EmptyCart />
          <p className="cart-message">Your added items will appear here</p>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <span>{item.name}</span>
              <span>${item.price} x {item.quantity}</span>
              <button >
                <RemoveItem/>
              </button>
            </div>
          ))}
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;