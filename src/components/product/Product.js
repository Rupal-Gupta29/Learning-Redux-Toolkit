import React from "react";
import styles from "./product.module.css";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className={styles.productCard}>
      <div>
        <img src={product.image} height={100} width={100} alt="product-img" />
      </div>
      <h4>{product.title}</h4>
      <h2>{product.price}</h2>
      <button className={styles.cartBtn} onClick={() => addProduct(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
