import { Link } from "react-router-dom";
import Contador from "../Contador/Contador";
import "./Cards.css";

const onAdd = (cantidad) => {
  console.log(`${cantidad}`);
};

function Cards({ info }) {
  return (
    <div>
      <div class="card ">
        <img src={info.img} className="card-img-top" alt="card-img-top" />
        <div className="card-body">
          <h5>{info.title}</h5>
          <p className="price">${info.price}</p>
          <div>
            <Link to={`/Detail/${info.id}`}> Ver más </Link>
          </div>
          <Contador initial={1} stock={10} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
}

export default Cards;
