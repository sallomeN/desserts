import { useState } from "react";
import dessertProducts from "./data/data.json";
import Dessert from "./components/DessertCard";
import Cart from "./components/Cart";
import "./styles/App.css";

function App() {
  // ! შევქმენი state-ბი 
  const [cart, setCart] = useState([]); //თავდაპირველად გვაქვს ცარიელი მასივი cart, რომელიც ინახავს იმ ნივთების სიას რომელიც კალათში გვექნება მოთავსებული.
// თითოეული ნივთი კი წარმოადგენს ობიქტს(სახელი, ფასი, რაოდენობა) და როდესაც ეშვება ნივთების დამატების, წაშლის, გაზრდის ან შემცირების ფუნქცია მაშინ 
// ეს მასივი ნახლდება setCart-ის გამოყენებით
  const [totalPrice, setTotalPrice] = useState(0); // აკონტროლებს ჯამურ ფასს
  const [totalQuantity, setTotalQuantity] = useState(0); // აჯამებს ნივთების რაოდენობას კალათაში

//! ფასის გამოთვლა
const updateTotalPrice = (updatedCart) => {   // updatedCart არის ჩვენი კალათის ახლანდელი მდგომარეობა (გადაცემული ფუნქციის პარამეტრად) რაიმე ცვლილების შემდეგ (კალათაში დამატება, წაშლა ა.შ.) 
  const totalPrice = updatedCart.reduce((totalCost, cartItem) => { //reduce არის array method რომელიც ჩვენს კალათში თითო ნივთზე  რაიმე მოქმედებას ასრულებს.
    // totalCost  არის საწყისი 0 , ხოლო cartItem პირველივე ნივთია (ობიექტი ფასისა და რაოდენობის გასაღებებით) კალათში
    return totalCost + cartItem.price * cartItem.quantity // ამ მოქმედების შედეგი ხდება totalCost-ის ახალი მნიშვნელობა
  }, 0);
    
  setTotalPrice(totalPrice) // state-ის განახლება
}

//! რაოდენობის გამოთვლა
// რაოდენობის გამოსათვლელი ფუნქცია მსგავსია ფასის გამოთვლის ფუნქციის
  const updateTotalQuantity = (updatedCart) => {
  const newTotalQuantity = updatedCart.reduce(
    (count, item) => count + item.quantity, // count  არის 0, item არის თითო ნივთი კალათში (ობიექტი, ამიტომაც .quantity-ით შეგვიძლია რაოდენობის გასაღებს მივწვდეთ)
    0
  );
  setTotalQuantity(newTotalQuantity) // state-ის განახლება
  }


  //! კალათაში დამატება
  // ეს ფუნქცია ამოწმებს თუ დესერტი (ობიექტი) არის უვე კალათაში და თუ არის ერთით ზრდის მის რაოდენობას თუ არა და უბრალოდ ამატებს
  const addToCart = (dessert) => {
    const updatedCart = [...cart] // აკოპირებს ახლანდელ კალათას
    const existingItem = updatedCart.find((item) => item.name === dessert.name) // find სიტყვიდან გამომდინარეც გვახვედრებს, რომ მისი ფუნქციაა name- ის შედარებით დაადგინოს არსებობს თუარა კონკრეტული დესერტი კალათში.
    // თუ სახელები ემთხვევა ესეიგი არსებობს ანუ არის true. item ეხება კალათში მოთავსებულ ნივთებს, dessert კი ყველა დესერტს რაც მოცემული გვაქვს

    if (existingItem === true) {
      existingItem.quantity += 1  // ამ ჩანაწერის მიხედვით, თუ სახელები დაემთხვა მაშინ ამ ნივთის (ობიექტის, რომლის  quantity  გასაღებსაც წერტილით ვწვდებით) რაოდენობას დაუმატებს 1-ს
    } else {
      updatedCart.push({ ...dessert, quantity: 1 }) // სხვა შემთხვევაში, ანუ როდესაც სახელები არ ემთხვევა, ანუ როდესაც ნივთი კალათში არ არსებობს , ანუ როდესაც ამ დესერტის ობიექტში quantity:0-ია,
      // ფუნქციიის გაშვების შედეგად ობიექტში არსებული ინფორმაცია უცვლელი რჩება (სამი წერტილით არსებულ ობიექტს ვაკოპირებთ) და მხოლოდ მისი რაოდენოის გასაღების მნიშვნელობა ხდება 1
    }

    //ვანახლებთ state-ებს
    setCart(updatedCart)
    updateTotalPrice(updatedCart)
    updateTotalQuantity(updatedCart)
  }

//! დესერტის ამოშლა კალათიდან
  const removeFromCart = (dessert) => {
    const updatedCart = cart.filter((item) => item.name !== dessert.name) // cart არის მთლიანად სია კალათაში არსებული ნივთების და dessert  არის ერტი რომელიმე პროდუქტი, რომლის ამოშლაც გვინდა. 
    //filter ფილტრავს კალათის მასივს და კალათაში არსებული ნივთის სახელს ადარებს დესერტის სახელს და თუ ეს სახელები ერთმანეთს არ დაემთხვევა ის დარჩება კალათაში
    //თუ სახელები სხვადასხვაა მაშინ გვაქვს true, ხოლო თუ ემთხვევა მაშინ false და დამთხვევის შემთხვევაში დესერტი ამოიშლება კალათიდან. filter  დაგვიბრუნებს იმ ნივტების სიას, რომლებიც true პირობას აკმაყოფილებენ

    //ვანახლებთ state-ებს 
    setCart(updatedCart)
    updateTotalPrice(updatedCart)
    updateTotalQuantity(updatedCart)
  }


  //! incement function
  const incrementQuantity = (dessert) => {
    const updatedCart = [...cart]
    const existingItem = updatedCart.find((item) => item.name === dessert.name) // მუშაობს ანალოგიური ლოგიკით როგორც კალათაში დამატების ფუნქციის დასაწყისში გვიწერია , ამოწმებს არის თუ არა დესერტი კალათაში

    if (existingItem) {  // აქ იგულისხმება რომ თუ existingItem===true ამ შემთხვევაში მისი რაოდენობა  გახდება +1
      existingItem.quantity += 1
    }

    //ვანახლებთ state-ებს
    setCart(updatedCart)
    updateTotalPrice(updatedCart)
    updateTotalQuantity(updatedCart)
  }

  //! decrement function
  const decrementQuantity = (dessert) => {
    let updatedCart = [...cart]
    const existingItem = updatedCart.find((item) => item.name === dessert.name) // აქაც იგივე; ვაკოპირებთ კალათის მასივს და ახალი ცვლადით გამოვსახავთ მასში არსებულ დესერტს (ვარქმევთ მას existingItem-ს , ისევე როგორც წინა ფუნქციებში)

    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1  //აქ ვეუბნებით რომ თუ ნივთი კალათში არსებობს (existingItem=== true)  და   მისი რაოდენობა მეტია ერთზე , მის რაოდენობას ვაკლებთ ერთს
    } else if (existingItem && existingItem.quantity === 1) { // აქ კი იგივენაირად ვამოწმებთ ოღონდ არა მეტი ერთზე, არამედ თუ რაოდენობა არის პირდაპირ ერთის ტოლი
     updatedCart = cart.filter((item) => item.name !== dessert.name) // და თუ ზემოთ არსებული პირობა კმაყოფილდება, ეშვება ზუსტად ის ფუნქცია, რომელიც ნივთის კალათიდან ამოშლის ფუნქციაში გვაქვს გამოყენებული
    }

    setCart(updatedCart)
    updateTotalPrice(updatedCart)
    updateTotalQuantity(updatedCart)
  }

  // ! HTML -ის ნაწილი
  return (
    <div className='whole-section'>
    <div class="products-section">
  <h1 class="section-title">Desserts</h1>
  <div class="products">
  {dessertProducts.map((dessert) => {
    const itemInCart = cart.find((item) => item.name === dessert.name) //ამოწმებს არის თუარა დესერტი კალათში
    const quantity = itemInCart ? itemInCart.quantity : 0 // გამოვსახავთ დესერტის რაოდენობას, იმ დესერტების რომლებიც სათითაოდ map-ით გამოგვაქვს. 
    // თუ ეს დესერტი კალათაში მოიძებნება, მისი რაოდენობა იქნება itemInCart.quantity, თუ არა და 0

    //! ფუნქციები გადავეცით prop-ებად 
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



