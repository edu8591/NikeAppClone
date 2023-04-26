import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products";

const initialState = {
  products,
  selectedProduct: null,
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, { payload }) => {
      const product = state.products.find((prod) => prod.id === payload);
      state.selectedProduct = product;
    },
  },
});

export const { setSelectedProduct } = productsSlice.actions;
