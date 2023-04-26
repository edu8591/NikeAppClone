import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";

// data
import products from "../data/products";

const ProductScreen = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image style={styles.image} source={{ uri: item.image }} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductScreen;
