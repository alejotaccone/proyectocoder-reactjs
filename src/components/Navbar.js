import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import CartWidget from "./cartwidget/CartWidget";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <h2>
          Todo <span>Boca</span>
        </h2>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a href="">Inicio</a>
          <a href="">Tienda</a>
          <a href="">Nosotros</a>
          <a href="">Contacto</a>
        </div>
        <div>
          <CartWidget />
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </NavContainer>
    </>
  );
}

export default Navbar;
const NavContainer = styled.nav`
  h2 {
    color: #0c00ff;
    font-weight: 400;
    span {
      font-weight: bold;
      color: #d3ff00;
    }
  }
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-around;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a {
      color: #333;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      color: #333;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
