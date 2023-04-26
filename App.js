import { StyleSheet, View } from "react-native";

// screens
import ProductScreen from "./src/screens/ProductScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ProductScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
