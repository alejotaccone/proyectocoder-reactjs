import React, { useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import "./ContactForm.css";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [form, setForm] = useState({});
  const [id, setId] = useState();
  const { cartItems, deleteAll } = useContext(CartContext);

  const order = {
    buyer: {
      name: form.name,
      email: form.email,
      phone: form.phone,
    },
    items: cartItems.map((prod) => ({
      id: prod.id,
      title: prod.title,
      price: prod.price,
      amount: prod.amount,
    })),
    total: cartItems.reduce(
      (previous, current) => previous + current.amount * current.price,
      0
    ),
  };

  const changeHandler = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => setId(id));
    deleteAll();
  };

  return (
    <div>
      {id ? (
        <div className="Box">
          <div className="CartContainer">
            <div className="cart-empty">
              <p>
                Gracias por comprar en TodoBoca!, su orden se guardo con el id:
                {id}
              </p>
              <Link to={"/"}>Volver a la tienda</Link>
            </div>
          </div>
        </div>
      ) : (
        <form className="form" onSubmit={submitHandler}>
          <h2>Confirmar Compra</h2>

          <label htmlFor="name">
            Nombre
            <input
              name="name"
              id="name"
              value={form.name}
              onChange={changeHandler}
              placeholder="Escriba su nombre aqui..."
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={changeHandler}
              placeholder="Escriba su email aqui..."
            />
          </label>

          <label htmlFor="phone">
            Telefono
            <input
              name="phone"
              id="phone"
              value={form.phone}
              onChange={changeHandler}
              placeholder="Escriba su telefono aqui..."
            ></input>
          </label>

          <button>Enviar</button>
          <div>
            <span className="fa fa-phone"></span>001 1023 567
            <span className="fa fa-envelope-o"></span> TodoBoca@company.com
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
