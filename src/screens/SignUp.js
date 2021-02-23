import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import CommonTextInput from "../ReusableComponent/ReusableInputBox";
import CommonButton from "../ReusableComponent/Button";
import Colors from "../constant/Colors";
import Headers from "../ReusableComponent/Header";

export default function SignUp({ navigation }) {
  return (
    <SafeAreaView>
      <Headers onPress={() => navigation.goBack()} />
      <Text
        style={{
          color: Colors.pinkColor,
          fontSize: 30,
          marginLeft: 20,
          marginBottom: 30,
        }}
      >
        Create new account
      </Text>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <CommonTextInput placeholderName="Full Name" />
        <CommonTextInput placeholderName="Phone Number" />
        <CommonTextInput placeholderName="Email Address" />
        <CommonTextInput placeholderName="Password" />
        <CommonButton title="Sign Up" textColor="#ffff" bg={Colors.pinkColor} />
      </View>
    </SafeAreaView>
  );
}
