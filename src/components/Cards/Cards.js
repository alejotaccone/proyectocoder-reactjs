import { Link } from "react-router-dom";

import "./Cards.css";

function Cards({ info }) {
  return (
    <div className="container">
      <div className="card ">
        <img src={info.img} className="card-img-top" alt={info.title} />
        <div className="card-body">
          <h5>{info.title}</h5>
          <p className="price">${info.price}</p>
          <div>
            <Link className="link" to={`/detail/${info.id}`}>
              <button className="button">Detalle del producto</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
