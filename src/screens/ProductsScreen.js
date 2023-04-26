import React from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedProduct } from "../store";
// data

const ProductsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.products);
  const handleProductPress = (id) => {
    dispatch(setSelectedProduct(id));
    navigation.navigate("Product Detail", { id });
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      numColumns={2}
      renderItem={({ item }) => (
        <Pressable
          style={styles.itemContainer}
          onPress={() => handleProductPress(item.id)}
        >
          <Image style={styles.image} source={{ uri: item.image }} />
        </Pressable>
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

export default ProductsScreen;
