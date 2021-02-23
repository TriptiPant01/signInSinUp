import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Button({
  bg,
  title,
  borderColor = "transparent",
  textColor,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: bg,
        borderColor: borderColor,
      }}
    >
      <Text style={{ color: textColor }}> {title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: width - 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 20,
    borderWidth: 1,
  },
});
