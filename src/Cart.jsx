import { useEffect, useContext } from "react";
import { MyCart } from "./App";

function Cart(addcart) {
  const { cart, setCart } = useContext(MyCart);
  for (let items in cart) {
    console.log(items, cart[items]);
  }

  return (
    <>
    <div className="listContainer">
    {Object.keys(cart)
        .filter((itemKey) => cart[itemKey].quantity >= 1)
        .map((itemKey) => (
          <div key={itemKey}className="shoppingCard">
          <img src={cart[itemKey].image} alt={itemKey.title} />
          <p>{cart[itemKey].title}</p>
          <div className="cost">
            <p>${cart[itemKey].price}</p>
          </div>
          <h1>quantity:  {cart[itemKey].quantity}</h1>

          </div>
          
          
        ))}

    </div>
    <div className="buttonContainer">
    <button className="checkoutButton">CHECKOUT</button>
    </div>

      
    </>
  );
}

export { Cart };
