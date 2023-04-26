import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
} from "react-native";

// Data
import products from "../data/products";

const ProductDetailsScreen = () => {
  // dummy data
  const product = products[0];
  const { width } = useWindowDimensions();
  return (
    <View>
      <ScrollView>
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
    lineHight: 30,
    marginVertical: 10,
  },
});

export default ProductDetailsScreen;
