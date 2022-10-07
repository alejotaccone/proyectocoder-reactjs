import { useState } from "react";
import "./Contador.css";

const Contador = ({ initial, stock, onAdd }) => {
  const [Contador, setcontador] = useState(initial);

  const Sumar = () => {
    setcontador(Contador + 1);
  };
  const Restar = () => {
    setcontador(Contador - 1);
  };

  return (
    <div className="Count">
      <button disabled={Contador <= 1} onClick={Restar}>
        -
      </button>
      <span>{Contador}</span>
      <button disabled={Contador >= stock} onClick={Sumar}>
        +
      </button>
      <div>
        <button
          class="button"
          disabled={stock <= 0}
          onClick={() => onAdd(Contador)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Contador;
