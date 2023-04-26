import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const HeaderCartIcon = () => {
  const navigation = useNavigation();
  const handleNavigateToCart = () => {
    navigation.navigate("Shopping Cart");
  };
  return (
    <Pressable style={styles.pressable} onPress={handleNavigateToCart}>
      <FontAwesome5 name="shopping-cart" style={styles.icon} />
      <Text style={styles.text}>5</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 18,
    color: "gray",
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 5,
    fontWeight: 500,
  },
});

export default HeaderCartIcon;
