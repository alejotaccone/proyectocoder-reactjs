import "./ItemDetail.css";
import Contador from "../Contador/Contador";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const ItemDetail = ({ info }) => {
  const { addToCart } = useContext(CartContext);
  const onAdd = (newAmount) => {
    addToCart(info, newAmount);
  };
  return (
    <div id="container">
      <div className="product-details">
        <h1> {info.title} </h1>
        <p className="information"> {info.description} </p>
        <Contador
          initial={1}
          stock={10}
          onAdd={onAdd}
          info={info}
          key={info.id}
        />
      </div>
      <div className="product-image">
        <img src={info.img} alt={info.title} />
      </div>
    </div>
  );
};

export default ItemDetail;
