import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { memo } from "react";
import { images } from "../../assets/images";
import { PropTypes } from "prop-types";
import {
  BACKGROUND_WHITE,
  COLOR_BTN_ACTIVE,
  TEXT_COLORS_BLACK,
  TEXT_COLORS_BLUE,
} from "../../constants/Color";
const ButtonList = (props) => {
  const {
    linkImg,
    text,
    colorText,
    colorBackground = BACKGROUND_WHITE,
    colorTextActive = TEXT_COLORS_BLUE,
    colorBackgroundActive = COLOR_BTN_ACTIVE,
    borderColor = "#E5E5E5",
    borderColorActive = "#84D8FF",
    shadowColor =  "#E5E5E5",
    shadowColorActive = "#84D8FF",
    status,
    onPress,
  } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          {
            backgroundColor: status ? colorBackgroundActive : colorBackground,
            borderColor: status ? borderColorActive : borderColor,
            shadowColor: status ? shadowColorActive :shadowColor,
          
          },
          styles.button,
        ]}
        onPress={onPress}
      >
        <Image source={linkImg} style={styles.linkImg} />
        <Text
          style={[
            { color: status ? colorTextActive : colorText },
            styles.textbtn,
          ]}
        >
          {text}
        </Text>
        
      </TouchableOpacity>
    </View>
  );
};
ButtonList.PropTypes = {
  linkImg: PropTypes.string,
  text: PropTypes.string,
  colorText: PropTypes.string,
  colorBackground: PropTypes.string,
  colorTextActive: PropTypes.string,
  colorBackgroundActive: PropTypes.string,
  borderColor :PropTypes.string,
  borderColorActive:PropTypes.string,
  status: PropTypes.bool,
  onPress: PropTypes.string,
};
export default memo(ButtonList);

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    borderRadius: 13,
    borderWidth: 3, // Độ dày viền
    shadowOffset: { width: 0, height: 2 }, // Bóng đổ lệch xuống dưới nhiều hơn
    shadowOpacity: 1, // Độ trong suốt của bóng (React Native)
    
  },
  textbtn: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
