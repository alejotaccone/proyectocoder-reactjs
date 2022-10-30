import { useState } from "react";
import "./Contador.css";
import ToastifyAdd from "../Toastify/ToastifyAdd";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const Contador = ({ initial, stock, onAdd, info }) => {
  const [contador, setcontador] = useState(initial);

  const Sumar = () => {
    setcontador(contador + 1);
  };
  const Restar = () => {
    setcontador(contador - 1);
  };

  return (
    <div className="count-container">
      <div className="count">
        <button className="uuu" disabled={contador <= 1} onClick={Restar}>
          -
        </button>
        <span className="count-input">{contador}</span>
        <button className="uuu" disabled={contador >= stock} onClick={Sumar}>
          +
        </button>
      </div>
      <div className="control">
        <button
          className="btn"
          onClick={() => {
            ToastifyAdd();
            onAdd(contador);
          }}
        >
          <span className="price"> ${info.price} </span>
          <span className="shopping-cart">
            <p>+</p>
          </span>
          <span className="buy">Comprar</span>
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contador;
