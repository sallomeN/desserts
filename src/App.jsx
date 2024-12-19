import './App.css';
import dessertProducts from './data.json';
import { AddToCart } from './Icons';
import {EmptyCart} from './Icons';

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts";


function App() {


  return (
    <div className='whole-section'>
    <div class="products-section">
  <h1 class="section-title">Desserts</h1>
  <div class="products">
    {dessertProducts.map((dessert) => (
      <div class="product-card" key={dessert.id}>
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
        <div class="below-stuff">
        <button class="add-to-cart">
          <AddToCart/>
          Add to Cart
        </button>
          <span className="product-info">
          <p class="category">{dessert.category}</p>
          <h2>{dessert.name}</h2>
          <p class="price">${dessert.price}</p>
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
 <div className='cart-section'>
 
 <div class="cart">
 <h1 className='cart-title'> Your Cart (0) </h1>
  <div class="cart-icon">
    <EmptyCart/>
  </div>
  <p class="cart-message">Your added items will appear here</p>
</div>
 </div>
</div>
    
  );
}

export default App;

