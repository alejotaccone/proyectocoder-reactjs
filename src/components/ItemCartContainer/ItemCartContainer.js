import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ItemCart from "./ItemCart";
import "./ItemCart.css";
import { Link } from "react-router-dom";
import ToastifyDeleteAll from "../Toastify/ToastifyDeleteAll";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const ItemCartContainer = ({ info }) => {
  const { cartItems, deleteAll, productsLength } = useContext(CartContext);
  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );
  return (
    <div className="Box">
      <div className="CartContainer">
        {!cartItems.length ? (
          <div className="cart-empty">
            <p>Tu carrito esta vacio. :(</p>
            <Link to={"/"}>Ir a la tienda</Link>
          </div>
        ) : (
          <div>
            <div className="Header">
              <h3 className="Heading">Mi Carrito</h3>
              <button
                className="Action"
                onClick={() => {
                  ToastifyDeleteAll();
                  deleteAll(info);
                }}
              >
                <p>Eliminar todo</p>
              </button>
            </div>
            {cartItems.map((info, id) => (
              <ItemCart info={info} key={id} />
            ))}
            <div className="checkout">
              <div className="total">
                <div>
                  <div className="Subtotal">Total</div>
                  <div className="items"> {productsLength} Productos </div>
                </div>
                <div className="total-amount">$ {total.toFixed(3)} </div>
              </div>
              <button className="button-cart">
                <Link to={"/checkout"}>Checkout</Link>
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ItemCartContainer;
