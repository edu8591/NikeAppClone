import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";

// Data
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "../store";
import { useGetProductQuery } from "../store";

const ProductDetailsScreen = ({ route }) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetProductQuery(id);
  // const product = useSelector(({ products }) => products.selectedProduct);
  const { width } = useWindowDimensions();
  const addToCart = () => {
    dispatch(addCartItem(product));
  };
  console.log(data);
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>There was an error {error.error}</Text>;
  }
  const product = data.data;
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>

          {/* price */}
          <Text style={styles.price}>$ {product.price}</Text>

          {/* description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* add to car button */}
      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
      {/* navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 500,
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 1.5,
  },
  description: {
    fontSize: 18,
    fontWeight: 300,
    lineHeight: 30,
    marginVertical: 10,
  },
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

export default ProductDetailsScreen;
