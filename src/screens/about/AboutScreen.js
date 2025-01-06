import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AboutScreen() {
  return (
    <View style={styles.containerHome}>
      <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    // backgroundColor: "blue",
  },
});