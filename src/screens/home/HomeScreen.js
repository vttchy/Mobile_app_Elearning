import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { images } from "./../../assets/images/index";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Thanh trạng thái trong suốt */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.row}>
        {/* Hiển thị logo */}
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.text}>duolingo</Text>
      </View>
      <View style={styles.group_logo_container}>
        <Image source={images.group_logo} style={styles.group_logo} />
        <Text style={styles.groupText}>The free, fun, and</Text>
        <Text style={styles.groupText}>effective way to learn a</Text>
        <Text style={styles.groupText}>language!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={()  => navigation.navigate("Home_page1")}
        >
          <Text style={styles.buttonText1}>GET STARTED</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => alert("I ALREADY HAVE AN ACCOUNT clicked")}
        >
          <Text style={styles.buttonText2}>I ALREADY HAVE AN ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "#58CC02",
    fontSize: 30,
    marginTop: 10, // Đẩy văn bản xuống tránh bị che bởi logo
  },
  row: {
    flexDirection: "row", // Đặt các phần tử trên cùng một hàng
    justifyContent: "center", // Căn giữa các phần tử theo chiều ngang
    alignItems: "center", // Căn giữa các phần tử theo chiều dọc
    paddingHorizontal: 20,
    gap: 10,
    top: 20,
  },
  group_logo_container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30, // Khoảng cách giữa logo chính và logo nhóm
  },
  group_logo: {
    width: 300, // Kích thước logo nhóm nhỏ hơn logo chính
    height: 300, // Kích thước logo nhóm nhỏ hơn logo chính
  },

  groupText: {
    color: "#4B4B4B", // Màu chữ
    fontSize: 28, // Kích thước chữ
    textAlign: "center", // Căn giữa văn bản
    marginTop: 10, // Khoảng cách giữa các dòng chữ
    paddingHorizontal: 20, // Đệm cho văn bản
    fontWeight: "bold",
  },
  buttonsContainer: {
    marginTop: 40, // Khoảng cách từ logo và text đến các nút
    width: "100%",
    alignItems: "center", // Căn giữa các nút
  },
  button1: {
    backgroundColor: "#58CC02",
    paddingVertical: 15, // padding chiều dọc
    paddingHorizontal: 5,
    marginBottom: 15,
    borderRadius: 15,
    width: "85%",
    alignItems: "center",
    shadowColor: "#58A700", // Màu của bóng đổ
    borderWidth: 2, // Độ dày viền
    borderColor: "#58CC02", // Màu viền
    shadowOffset: { width: 0, height: 4 }, // Vị trí của bóng đổ
    shadowOpacity: 0.9, // Độ mờ của bóng đổ
    shadowRadius: 4, // Kích thước bóng đổ
  },
  button2: {
    backgroundColor: "#fff",
    paddingVertical: 15, // padding chiều dọc
    paddingHorizontal: 5,
    marginBottom: 15,
    borderRadius: 15,
    width: "85%",
    alignItems: "center",
    shadowColor: "#E5E5E5", // Màu của bóng đổ
    borderWidth: "20px",
    borderWidth: 2, // Độ dày viền
    borderColor: "#E5E5E5", // Màu viền
    shadowOffset: { width: 0, height: 4 }, // Vị trí của bóng đổ
    shadowOpacity: 0.9, // Độ mờ của bóng đổ
    shadowRadius: 4, // Kích thước bóng đổ
  },
  buttonText1: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonText2: {
    color: "#1CB0F6",
    fontSize: 16,
    fontWeight: "bold",
  },
});
