import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar.jsx";

import "./App.css";

const ItemsAdded = createContext(null);
const MyCart = createContext (null)

function App() {
  const [items, setItems] = useState([0]);
  const [cart, setCart]= useState('hello')
  return (
    <>
      <MyCart.Provider value= {{cart, setCart}}>
      <ItemsAdded.Provider value={{items, setItems}}>
        <NavBar />
        <Outlet />
      </ItemsAdded.Provider>
      </MyCart.Provider>
      
    </>
  );
}

export { App, ItemsAdded , MyCart};
