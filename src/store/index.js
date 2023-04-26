import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slices/productsSlice";
import { cartSlice } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export { setSelectedProduct } from "./slices/productsSlice";
export { addCartItem, changeQuantity } from "./slices/cartSlice";
