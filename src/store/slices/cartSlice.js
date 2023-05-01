import { createSlice, createSelector } from "@reduxjs/toolkit";
import cart from "../../data/cart";

const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload;
      const cartItem = state.items.find(
        (el) => el.product._id === newProduct._id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({ product: newProduct, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      const { productId, amount } = action.payload;
      const product = state.items.find((el) => el.product._id === productId);
      if (product.quantity + amount <= 0) {
        state.items = state.items.filter((el) => el !== product);
      } else {
        product.quantity += amount;
      }
    },
    clearCart: (status, payload) => {
      status.items = [];
    },
  },
});

export const { addCartItem, changeQuantity, clearCart } = cartSlice.actions;
export const selectNumberOfItem = (state) => state.cart.items.length;
export const selectSubtotal = (state) => {
  return state.cart.items.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);
};
const cartSelector = (state) => state.cart;
export const selectDeliveryPrice = createSelector(
  cartSelector,
  selectSubtotal,
  (cart, subtotal) => (subtotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee)
);
export const selectTotalPrice = createSelector(
  selectSubtotal,
  selectDeliveryPrice,
  (subtotal, delivery) => subtotal + delivery
);
