import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import logo from "./cart.png";
import "./CartWidget.css";

const CartWidget = () => {
  const { productsLength } = useContext(CartContext);

  return (
    <div>
      <div className="ContainerLogoCart">
        <Link to={`/cart`}>
          {" "}
          <img src={logo} />
        </Link>
        <div className="ProducstLenght"> {productsLength} </div>
      </div>
    </div>
  );
};

export default CartWidget;
