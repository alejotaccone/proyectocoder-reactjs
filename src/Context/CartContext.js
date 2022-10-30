import React, { useEffect, useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
  const [cartItems, SetCartItems] = useState(() => {
    try {
      const productosEnLocalStorage = localStorage.getItem("cartProducts");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  }, [cartItems]);

  const [productsLength, setProductsLength] = useState(0);
  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const addToCart = (info, newAmount) => {
    const { amount = 0 } = cartItems.find((prod) => prod.id === info.id) || {};
    const newCart = cartItems.filter((prod) => prod.id !== info.id);
    SetCartItems([...newCart, { ...info, amount: amount + newAmount }]);
  };

  const deleteToCart = (info) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === info.id
    );

    if (inCart.amount === 1) {
      SetCartItems(
        cartItems.filter((productInCart) => productInCart.id !== info.id)
      );
    } else {
      SetCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === info.id) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        })
      );
    }
  };

  const deleteAll = () => SetCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        deleteToCart,
        deleteAll,
        productsLength,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
