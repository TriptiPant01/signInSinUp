import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CommonButton from "../ReusableComponent/Button";
import Colors from "../constant/Colors";

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Say hello to your new app</Text>
      <CommonButton
        title={"Login"}
        bg={Colors.pinkColor}
        textColor={"#ffff"}
        onPress={() => navigation.navigate("SignIn")}
      />
      <CommonButton
        title={"SignUp"}
        bg={"#ffff"}
        borderColor={Colors.pinkColor}
        textColor={Colors.pinkColor}
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    color: Colors.pinkColor,
    fontSize: 30,
  },
});
