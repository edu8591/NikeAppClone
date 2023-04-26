import React from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
} from "react-native";

// Data
import products from "../data/products";

const ProductDetailsScreen = () => {
  // dummy data
  const product = products[0];
  const { width } = useWindowDimensions();

  return (
    <View>
      {/* image carrousel */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={product.images}
        keyExtractor={(image) => image}
        renderItem={({ item }) => {
          return (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          );
        }}
      />
      {/* title */}
      {/* price */}
      {/* description */}
      {/* add to car button */}
      {/* navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductDetailsScreen;
