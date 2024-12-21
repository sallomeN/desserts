import { useState } from "react";
import dessertProducts from "./data/data.json";
import Dessert from "./components/DessertCard";
import Cart from "./components/Cart";
import "./styles/App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const updateTotalPrice = (updatedCart) => {
  const totalPrice = updatedCart.reduce((totalCost, cartItem) => {
    return totalCost + cartItem.price * cartItem.quantity
  }, 0);
    
    setTotalPrice(totalPrice)
  }

  const updateTotalQuantity = (updatedCart) => {
  const newTotalQuantity = updatedCart.reduce(
    (count, item) => count + item.quantity,
    0
  );
  setTotalQuantity(newTotalQuantity)
  }

  const addToCart = (dessert) => {
    const updatedCart = [...cart]
    const existingItem = updatedCart.find((item) => item.name === dessert.name)

    if (existingItem === true) {
      existingItem.quantity += 1
    } else {
      updatedCart.push({ ...dessert, quantity: 1 })
    }

    setCart(updatedCart)
    updateTotalPrice(updatedCart)
    updateTotalQuantity(updatedCart)
  }


  const removeFromCart = (dessert) => {
    const updatedCart = cart.filter((item) => item.name !== dessert.name)
    setCart(updatedCart)
    updateTotalPrice(updatedCart)
    updateTotalQuantity(updatedCart)
  }
// ! incement and decrement functions
  const incrementQuantity = (dessert) => {
    const updatedCart = [...cart]
    const existingItem = updatedCart.find((item) => item.name === dessert.name)

    if (existingItem) {
      existingItem.quantity += 1
    }

    setCart(updatedCart)
    updateTotalPrice(updatedCart)
    updateTotalQuantity(updatedCart)
  }

  const decrementQuantity = (dessert) => {
    let updatedCart = [...cart]
    const existingItem = updatedCart.find((item) => item.name === dessert.name)

    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1
    } else if (existingItem && existingItem.quantity === 1) {
     updatedCart = cart.filter((item) => item.name !== dessert.name)
    }

    setCart(updatedCart)
    updateTotalPrice(updatedCart)
    updateTotalQuantity(updatedCart)
  }
  return (
    <div className='whole-section'>
    <div class="products-section">
  <h1 class="section-title">Desserts</h1>
  <div class="products">
  {dessertProducts.map((dessert) => {

    const itemInCart = cart.find((item) => item.name === dessert.name)
    const quantity = itemInCart ? itemInCart.quantity : 0

    return (
      <Dessert
        key={dessert.name}
        dessert={dessert}
        onAddToCart={addToCart}
        onIncrementQuantity={incrementQuantity}
        onDecrementQuantity={decrementQuantity}
        isInCart={quantity > 0}
        quantity={quantity}
      />
    )
  })}
  </div>
</div>  

<div className='cart-section'>
  <Cart
  cart={cart}
  onRemoveFromCart={removeFromCart}
  totalPrice={totalPrice}
  totalQuantity={totalQuantity}/>
</div>
</div>
    
  );
}

export default App;



