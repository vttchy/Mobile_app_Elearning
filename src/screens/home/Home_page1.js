import React, { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Home_page1({ navigation }) {
  // Khởi tạo Animated value cho hiệu ứng fade-in
  const [fadeAnim] = useState(new Animated.Value(0)); //độ mờ bằng 0

  useEffect(() => {
    // Bắt đầu hiệu ứng fade-in sau 1 giây
    Animated.timing(fadeAnim, {
      toValue: 2, // Mục tiêu opacity = 1 (hiện rõ)
      duration: 2000, // Thời gian fade-in là 1 giây
      useNativeDriver: true, // Sử dụng native driver để cải thiện hiệu suất
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      {/* Hiệu ứng cho messageBox */}
      <Animated.View style={[styles.messageBox, { opacity: fadeAnim }]}>
        {/* liên kết thuộc tính opacity của messageBox với giá trị fadeAnim */}
        <Text style={styles.text}>Hi there! I'm Duo!</Text>
      </Animated.View>

      {/* Nhúng GIF */}
      <Image
        source={{
          uri: "https://media.giphy.com/media/yc0iGEK3Az6sH2yIqU/giphy.gif",
        }}
        style={styles.gif}
      />
      <View style={styles.buttonWrapper}></View>

      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate("Home_page2")}
      >
        <Text style={styles.buttonText1}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // Căn giữa theo chiều ngang
    justifyContent: 'flex-end',  
    backgroundColor: "#fff",
  },
  messageBox: {
    padding: 20,
    borderRadius: 15, // Viền bo tròn
    borderWidth: 2, // Độ dày của viền
    borderColor: "#E5E5E5", // Màu viền
    marginTop: 100,
    marginBottom: 10, // Khoảng cách giữa messageBox và GIF
  },
  text: {
    fontSize: 24,
    textAlign: "center", // Căn giữa văn bản
  },
  gif: {
    width: 300, // Kích thước của GIF
    height: 300, // Kích thước của GIF
    marginBottom: 50,
  },
  button1: {
    backgroundColor: "#58CC02",
    paddingVertical: 15, // padding chiều dọc
    paddingHorizontal: 5,
    borderRadius: 15,
    width: "85%",
    alignItems: "center",
    shadowColor: "#58A700", // Màu của bóng đổ
    borderWidth: 2, // Độ dày viền
    borderColor: "#58CC02", // Màu viền
    shadowOffset: { width: 0, height: 4 }, // Vị trí của bóng đổ
    shadowOpacity: 0.9, // Độ mờ của bóng đổ
    shadowRadius: 4, // Kích thước bóng đổ
    marginBottom: 40, // Khoảng cách giữa button và đáy màn hình
  },
  buttonText1: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonWrapper: {
    width: "100%", // Đảm bảo chiều rộng của dòng kẻ đủ lớn
    height: 1, // Độ dày của dòng kẻ
    backgroundColor: "#E5E5E5", // Màu đen cho dòng kẻ
    marginBottom: 30,
  },
});
