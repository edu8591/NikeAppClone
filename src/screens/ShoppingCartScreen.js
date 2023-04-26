import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";

// Components
import CartListItem from "../components/CartListItem";
import ShoppingCartTotals from "../components/ShoppingCartTotals";
// data
import cart from "../data/cart";

const ShoppingCartScreen = () => {
  const handleCheckOut = () => {
    console.warning("Checkout!");
  };
  const listFooter = () => <ShoppingCartTotals />;

  return (
    <>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.product.id}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={listFooter}
      />
      <Pressable style={styles.button} onPress={handleCheckOut}>
        <Text style={styles.buttonText}>Checkout</Text>
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
