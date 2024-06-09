import React from "react";
import styles from "./cartCard.module.css";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();

  const removeProduct = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className={styles.cartCard}>
      <div>
        <img src={product.image} height={70} width={70} alt="product-img" />
      </div>
      <h5>{product.title}</h5>
      <h5>{product.price}</h5>
      <div>
        <button
          className={styles.removeBtn}
          onClick={() => removeProduct(product.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
