import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import CommonTextInput from "../ReusableComponent/ReusableInputBox";
import CommonButton from "../ReusableComponent/Button";
import Colors from "../constant/Colors";
import Header from "../ReusableComponent/Header";

export default function SignIn({ navigation }) {
  return (
    <SafeAreaView>
      <Header onPress={() => navigation.goBack()} />
      <Text
        style={{
          color: Colors.pinkColor,
          fontSize: 30,
          marginLeft: 20,
          marginBottom: 30,
        }}
      >
        Sign In
      </Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <CommonTextInput placeholderName="E-mail or phone number" />
        <CommonTextInput placeholderName="Password" />
        <View>
          <CommonButton
            bg={Colors.pinkColor}
            title="Log in"
            textColor="#ffff"
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text>OR</Text>
          </View>
          <CommonButton
            bg={Colors.blueColor}
            title="Login with Facebook"
            textColor="#ffff"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
