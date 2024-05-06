import React, { useState, useEffect, useContext, createContext } from "react";
import { ItemsAdded, MyCart } from "./App";
function Shopping() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});
  const { items, setItems } = useContext(ItemsAdded);
  const {cart, setCart} = useContext(MyCart)
 
  // State to track loading status
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20/category/mensclothing")
      .then((res) => res.json())
      .then((json) => {
        let results = json;
        setProducts(results);
        console.log(results);

        setLoading(false);
        const initialQuantities = {};
        json.forEach((item) => {
          initialQuantities[item.id] = {
            quantity: 0,
            title: item.title,
            image:item.image,
            price: item.price,
            description: item.description
          };
        });
        setQuantities(initialQuantities);
        console.log(initialQuantities);
      });
  }, []);

  useEffect(() => {
    console.log("Quantities have changed:", quantities);
    totalItems(quantities);
  }, [quantities]);
  function increment(id) {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: {
        ...prevQuantities[id],
        quantity: prevQuantities[id].quantity + 1,
      },
    }));
  }
  function decrement(id) {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: {
        ...prevQuantities[idå],
        quantity: prevQuantities[id].quantity - 1,
      },
    }));
  }

  function totalItems() {}
  function addToCart() {
    let total = 0;
    for (let cartItem in quantities) {
      console.log(cartItem, quantities[cartItem]);
      total += quantities[cartItem].quantity;
      
    }
    setItems(total);
      setCart(quantities)
  }

  return (
    <>
      {loading ? (
        <div className="loadingScreen">Loading...</div>
      ) : (
        <div className="listContainer">
          {products.map((item) => (
            <div className="shoppingCard" key={item.id}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <div className="cost">
                <p>${item.price}</p>

                <button onClick={() => addToCart()}>Add to Cart</button>

                <div>
                  <button onClick={() => increment(item.id)}>+</button>
                  <button onClick={() => decrement(item.id)}>-</button>
                  <p>{quantities[item.id].quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export { Shopping };
