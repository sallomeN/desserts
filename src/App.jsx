import { useState } from 'react'
import './App.css'
import {AddToCart} from "./Icons"
import dessertProducts from "./data.json"

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/"
function App() {

  return (
  <div>
      <h1>
      hello world <AddToCart />
    </h1>
    
    {dessertProducts.map((dessert) => {
      return (
      <div key={dessert.name}> 
      <img src={`${BASE_URL}/${dessert.images.tablet}`} alt="" />
    </div>
     )
    })}
  </div>
)}

export default App
