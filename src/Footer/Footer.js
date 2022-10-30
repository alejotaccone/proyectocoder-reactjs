import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="hola">
          <div className="footer-text">
            <p> © Copyright 2022 </p>
            <Link to="/#">
              <p className="footer-link">TodoBoca</p>
            </Link>
            <p>| Creado por</p>
            <Link to="/#">
              <p className="footer-link">Alejo</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
