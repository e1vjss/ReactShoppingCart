import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ItemsAdded } from "./App";
function NavBar() {
  const { items, setItems } = useContext(ItemsAdded);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="/shopping">Shopping</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
            <p>{items}</p>
          </li>
        </ul>
      </nav>
    </>
  );
}

export { NavBar };
