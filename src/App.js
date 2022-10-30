import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./routes/Cart";
import Detail from "./routes/Detail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./Context/CartContext";
import Footer from "./Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route excat path="/checkout" element={<ContactForm />} />
              <Route excat path="/" element={<ItemListContainer />} />
              <Route exact path="/detail/:id" element={<Detail />} />
              <Route excat path="/cart" element={<Cart />} />
              <Route
                path="/categoria/:categoryId"
                element={<ItemListContainer />}
              />
            </Routes>
          </CartProvider>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
