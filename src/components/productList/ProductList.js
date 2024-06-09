import React, { useEffect } from "react";
import Product from "../product/Product";
import styles from "./productList.module.css";
import { fetchProducts } from "../../redux/productSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { API_STATUS } from "../../redux/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { status, data: productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === API_STATUS.LOADING) {
    return <h3 style={{ textAlign: "center" }}>Loading...</h3>;
  }

  return (
    <div className={styles.productListWrapper}>
      {API_STATUS.IDLE &&
        productList.map((product) => (
          <Product product={product} key={product.id} />
        ))}
    </div>
  );
};

export default ProductList;
