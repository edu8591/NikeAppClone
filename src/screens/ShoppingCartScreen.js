import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

// Components
import CartListItem from "../components/CartListItem";
import ShoppingCartTotals from "../components/ShoppingCartTotals";
import { useCreateOrderMutation } from "../store";
// data
import {
  selectSubtotal,
  selectDeliveryPrice,
  selectTotalPrice,
  clearCart,
} from "../store";

const ShoppingCartScreen = () => {
  const [createOrder, { isLoading, error }] = useCreateOrderMutation();
  const cart = useSelector(({ cart }) => cart.items);
  const subtotal = useSelector(selectSubtotal);
  const delivery = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  const handleCheckOut = () => {
    createOrder({
      items: cart,
      total,
      subtotal,
      delivery,
      customer: {
        name: "thats me!",
        address: "somewhere",
        email: "anemail.com",
      },
    });
    dispatch(clearCart());
  };
  const listFooter = () => <ShoppingCartTotals />;

  return (
    <>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.product._id}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={listFooter}
      />
      <Pressable style={styles.button} onPress={handleCheckOut}>
        <Text style={styles.buttonText}>
          Checkout {isLoading && <ActivityIndicator />}
        </Text>
      </Pressable>
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: 500,
    fontSize: 18,
  },
});

export default ShoppingCartScreen;
