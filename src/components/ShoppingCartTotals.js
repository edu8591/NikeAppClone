import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import {
  selectSubtotal,
  selectDeliveryPrice,
  selectTotalPrice,
} from "../store";

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal);
  const delivery = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotalPrice);
  return (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>${subtotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>${delivery}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>${total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "gainsboro",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    color: "gray",
    fontSize: 16,
  },
  textBold: {
    fontSize: 16,
    fontWeight: 500,
    color: "black",
  },
});

export default ShoppingCartTotals;
