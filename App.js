import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
// screens
import ProductScreen from "./src/screens/ProductScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCartScreen from "./src/screens/ShoppingCartScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingCartScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
