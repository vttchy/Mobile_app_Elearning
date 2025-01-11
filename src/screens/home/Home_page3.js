import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
  

export default function Home_page3({ navigation }) {
  // Khởi tạo Animated value cho hiệu ứng fade-in
  const [fadeAnim] = useState(new Animated.Value(0)); //độ mờ bằng 0

  useEffect(() => {
    // Bắt đầu hiệu ứng fade-in sau 2 giây
    Animated.timing(fadeAnim, {
      toValue: 2, // Mục tiêu opacity = 2 (hiện rõ)
      duration: 2000, // Thời gian fade-in là 2 giây
      useNativeDriver: true, // Sử dụng native driver để cải thiện hiệu suất
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Home_page4");
    }, 5000); // Chuyển sau 5 giây

    return () => clearTimeout(timer); // Xóa timer nếu component bị hủy
  }, [navigation]);

  return (
     
    <View style={styles.container}>
      <Animated.View style={[ { opacity: fadeAnim }]}>
      <Image
        source={{
          uri: "https://media.giphy.com/media/1GOffIxX68NeJTerav/giphy.gif",
        }}
        style={styles.gif}
      />
      <Text style={styles.title}>ĐANG KHỞI TẠO KHÓA HỌC...</Text>
      <Text style={styles.subtitle}>
        Sẵn sàng gia nhập cộng đồng <Text style={styles.highlight}>32</Text> 
      </Text>
      <Text style={styles.subtitle}>
        <Text style={styles.highlight}> triệu người</Text> đang học tiếng Anh
      </Text>
      <Text style={styles.subtitle}>
        <Text>trên Duolingo!</Text> 
      </Text>
      </Animated.View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  gif: {
    width: 300, // Kích thước của GIF
    height: 300, // Kích thước của GIF
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#A9A9A9", // Màu xám nhẹ
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 21,
    color: "#4a4e69", // Màu sắc trung tính
    textAlign: "center",
    lineHeight: 30, // Tăng khoảng cách giữa các dòng

  },
  highlight: {
    fontWeight: "bold",
    color: "#4a4e69", // Màu chữ giống subtitle
  },
});
