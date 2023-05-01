import React from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedProduct } from "../store";
import { useGetProductsQuery } from "../store";
// data

const ProductsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const products = useSelector(({ products }) => products.products);
  const { data, isLoading, error } = useGetProductsQuery();
  const handleProductPress = (id) => {
    // dispatch(setSelectedProduct(id));
    navigation.navigate("Product Detail", { id });
  };
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error</Text>;
  }
  const products = data.data;

  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product._id}
      numColumns={2}
      renderItem={({ item }) => (
        <Pressable
          style={styles.itemContainer}
          onPress={() => handleProductPress(item._id)}
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
