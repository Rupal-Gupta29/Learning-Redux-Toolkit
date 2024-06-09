import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./../components/cartCard/CartCard";

const Cart = () => {
  const cartList = useSelector((cartList) => cartList.cart);
  return (
    <>
      {cartList.length ? (
        <div style={{ marginTop: "20px" }}>
          {cartList.map((product) => (
            <CartCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <h3 style={{ textAlign: "center" }}>No products to display</h3>
      )}
    </>
  );
};

export default Cart;
