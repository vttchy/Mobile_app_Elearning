import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home_page3 from "./src/screens/home/Home_page3";
import Home_page4 from "./src/screens/home/Home_page4";
import HomeScreen from './src/screens/home/HomeScreen';
import Home_page1 from './src/screens/home/Home_page1';
import Home_page2 from "./src/screens/home/Home_page2";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Screen name="HomeScreen" component={HomeScreen} />
  {/* mặc định trang đầu tiên */}
  <Stack.Screen name="Home_page1" component={Home_page1} />
  <Stack.Screen name="Home_page2" component={Home_page2} />
  <Stack.Screen name="Home_page3" component={Home_page3} />
  <Stack.Screen name="Home_page4" component={Home_page4} />
</Stack.Navigator>




    </NavigationContainer>
  );
}
