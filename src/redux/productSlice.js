import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const API_STATUS = Object.freeze({
  LOADING: "loading",
  IDLE: "idle",
  ERROR: "error",
});

const productSlice = createSlice({
  initialState: {
    data: [],
    status: API_STATUS.IDLE,
  },
  name: "products",

  // method: 1
  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },

  // method:2
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = API_STATUS.LOADING;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = API_STATUS.IDLE;
      state.data = action.payload;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = API_STATUS.ERROR;
    });
  },
});

export default productSlice.reducer;
export const { setProducts, setStatus } = productSlice.actions;

// Thunk

// method: 1

// export function fetchProducts() {
//   return async function fetchProductsThunk(dispatch, getState) {
//     dispatch(setStatus(API_STATUS.LOADING));
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(API_STATUS.IDLE));
//     } catch (err) {
//       dispatch(setStatus(API_STATUS.ERROR));
//       console.log("Error in fetching the data.", err);
//     }
//   };
// }

// method: 2

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});
