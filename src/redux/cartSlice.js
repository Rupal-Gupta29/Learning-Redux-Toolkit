import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = [];

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      try {
        state.push(action.payload);
        toast.success("Product added to cart.", { position: "top-left" });
      } catch (err) {
        console.log("Error in adding product to cart.", err);
      }
    },
    removeFromCart: (state, action) => {
      const data = state.filter((item) => item.id !== action.payload);
      return data;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
