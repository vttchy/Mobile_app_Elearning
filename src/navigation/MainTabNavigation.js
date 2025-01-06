import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useCallback } from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/home";
import AboutScreen from "../screens/about/AboutScreen";
import MyTabBar from "../components/tabbar/MyTabBar";
import useRefreshControl from "../hook/useRefreshControl";
import { dontShowHeader } from "../constants";
import { tabBarVisible } from "../screens/StackOptions";

export const RefreshContext = createContext({
  isRefresh: false,
  setIsRefresh: null,
});

export default function MainTabNavigation() {
  const TabNavigator = createBottomTabNavigator();
  const renderTabBar = useCallback((props) => <MyTabBar {...props} />, []);

  // refresh control
  const { refreshValue } = useRefreshControl();
  return (
    <RefreshContext.Provider value={refreshValue}>
      <TabNavigator.Navigator
        key="tabNavigator"
        tabBar={renderTabBar}
        screenOptions={dontShowHeader}
        backBehavior="none"
      >
        <TabNavigator.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={({ route }) => ({
            tabBarLabel: "Tổng quan",
            tabBarVisible: tabBarVisible(route),
          })}
          
        />
        <TabNavigator.Screen
          key={"HomeScreen"}
          name="HomeScreen"
          component={HomeScreen}
          options={({ route }) => ({
            tabBarLabel: "Trang chủ",
            tabBarVisible: tabBarVisible(route),
          })}
        />
      </TabNavigator.Navigator>
    </RefreshContext.Provider>
  );
}

const styles = StyleSheet.create({});
