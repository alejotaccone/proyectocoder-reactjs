import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./ItemCart.css";
import ToastifyDelete from "../Toastify/ToastifyDelete";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const ItemCart = ({ info }) => {
  const { deleteToCart } = useContext(CartContext);
  const totalamountprice = info.price * info.amount;
  return (
    <div>
      <div className="Cart-Items">
        <div className="image-box">
          <img src={info.img} className="img-cart" />
          <div className="Cart-text">
            <h2 className="title"> {info.title} </h2>

            <div className="count"> Cantidad: {info.amount} </div>
          </div>
        </div>

        <div className="prices">
          <div className="amount">$ {totalamountprice.toFixed(3)} </div>

          <button
            className="remove"
            onClick={() => {
              ToastifyDelete();
              deleteToCart(info);
            }}
          >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJBJREFUSEvtldENgCAMRHub6ShOok4mo7hJTT8wSoBaAv4An4Tcaw/ogRovNNYnFcDMExEdiUJ2AFuuyCxAERfdk4gWAC4FeQGYmWtYBuDW/RdQo/pQI3oHpVY9rfGgDgC+7dC22H6RRQOgvqJhUQcWWQag5aNJgkmSWZYDMH+dpiK+GiDJZFMz2dJC7GxzwAVAd5oZ286StQAAAABJRU5ErkJggg==" />
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ItemCart;
