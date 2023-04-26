import { StyleSheet, View } from "react-native";

// screens
import ProductScreen from "./src/screens/ProductScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ProductDetailsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
