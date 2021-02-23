import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../constant/Colors";

export default function Header({ onPress }) {
  return (
    <TouchableOpacity style={styles.headerContainer} onPress={onPress}>
      <SimpleLineIcons name="arrow-left" size={32} color={Colors.pinkColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 40,
  },
});
