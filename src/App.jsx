import { useState } from "react";
import dessertProducts from "./data/data.json";
import Dessert from "./components/DessertCard";
import Cart from "./components/Cart";
import "./styles/App.css";

function App() {


  return (
    <div className='whole-section'>
    <div class="products-section">
  <h1 class="section-title">Desserts</h1>
  <div class="products">
    {dessertProducts.map((dessert) => (
      <Dessert
      key={dessert.name}
      dessert={dessert}
      isInCart={cart.find((item) => item.name === dessert.name)}
    />
    ))}
  </div>
</div>  

<div className='cart-section'>
  <Cart/>
</div>
</div>
    
  );
}

export default App;



