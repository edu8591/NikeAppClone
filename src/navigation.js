import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";
import HeaderCartIcon from "./components/HeaderCartIcon";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{ headerRight: () => <HeaderCartIcon /> }}
        />
        <Stack.Screen
          name="Product Detail"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Shopping Cart" component={ShoppingCartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
