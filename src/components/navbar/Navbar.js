import React from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartList = useSelector((cartList) => cartList.cart);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>EasyCart</div>
      <div className={styles.navItemsWrapper}>
        <div>
          <NavLink
            to={"/"}
            className={(state) => {
              if (state.isActive) {
                return styles.activeLink;
              }
              return styles.navItem;
            }}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/cart"}
            className={(state) => {
              if (state.isActive) {
                return styles.activeLink;
              }
              return styles.navItem;
            }}
          >
            Cart
          </NavLink>
        </div>
        <div className={styles.navItem}>Cart Items: {cartList.length}</div>
      </div>
    </nav>
  );
};

export default Navbar;
