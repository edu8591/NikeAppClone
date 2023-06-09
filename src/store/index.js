import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slices/productsSlice";
import { cartSlice } from "./slices/cartSlice";
import { apiSlice } from "./apis/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
setupListeners(store.dispatch);

export { setSelectedProduct } from "./slices/productsSlice";
export {
  addCartItem,
  changeQuantity,
  selectNumberOfItem,
  selectSubtotal,
  selectDeliveryPrice,
  selectTotalPrice,
  clearCart,
} from "./slices/cartSlice";
export {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateOrderMutation,
  useGetOrderQuery,
} from "./apis/apiSlice";
