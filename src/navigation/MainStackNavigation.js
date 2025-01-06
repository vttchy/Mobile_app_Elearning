import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home_page2, Home_page3, HomeScreen } from "../screens/home";
import Home_page1 from "../screens/home/Home_page1";

export default function MainStackNavigation() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home_page1"
          component={Home_page1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home_page2"
          component={Home_page2}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Home_page3"
          component={Home_page3}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="MainTabNavigation"
          component={MainTabNavigation}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </SafeAreaView>
  );
}
