import { createSlice } from "@reduxjs/toolkit";
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
        (el) => el.product.id === newProduct.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({ product: newProduct, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      const { productId, amount } = action.payload;
      const product = state.items.find((el) => el.product.id === productId);
      if (product.quantity + amount <= 0) {
        state.items = state.items.filter((el) => el !== product);
      } else {
        product.quantity += amount;
      }
    },
  },
});

export const { addCartItem, changeQuantity } = cartSlice.actions;
