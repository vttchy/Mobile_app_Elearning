import React, { useState } from "react";
import { View, StyleSheet,Text } from "react-native";
import { ButtonList } from "../../components/button";
import ProgressBar from "../../components/tabbar/ProgressBar";
const dataSocial = [
  {
    id: 1,
    Image: require("../../assets/images/friends.png"),
    social: "Friends/family",
  },
  {
    id: 2,
    Image: require("../../assets/images/tv.png"),
    social: "TV",
  },
  {
    id: 3,
    Image: require("../../assets/images/tiktok.png"),
    social: "Tiktok",
  },
  {
    id: 4,
    Image: require("../../assets/images/facebook.png"),
    social: "Facebook/Instagram",
  },
  {
    id: 5,
    Image: require("../../assets/images/google.png"),
    social: "Google Search",
  },
  {
    id: 6,
    Image: require("../../assets/images/youtube.png"),
    social: "YouTube",
  },
  {
    id: 7,
    Image: require("../../assets/images/news.png"),
    social: "Other",
  },
];

const Home_page4 = () => {
  
  const [selectedSocial, setSelectedSocial] = useState(1);

  const handleSelected = (id) => {
    setSelectedSocial(id);
  };

  return (
    
    <View style={styles.container}>
       {/* <ProgressBar totalPages={1} /> */}
      {dataSocial?.map((item, index) => (
        <ButtonList
          key={index}
          text={item.social}
          linkImg={item.Image}
          onPress={() => handleSelected(item.id)}
          status={selectedSocial === item.id}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flexDirection: "column",
    gap: 20,
  },
});

export default Home_page4;
