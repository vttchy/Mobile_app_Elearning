import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { images } from "../../assets/images";

export default function Home_page3() {
  return (
    <View>
      <Text>Home_page33</Text>
      <Image source={images.dou} style ={styles.dou}/>
    </View>
  );
}

const styles = StyleSheet.create({});
