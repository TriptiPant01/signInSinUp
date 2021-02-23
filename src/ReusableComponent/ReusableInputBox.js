import React from "react";
import { View, Text, TextInput, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");
export default function ReusableInputBox({ placeholderName }) {
  return (
    <View>
      <TextInput
        placeholder={placeholderName}
        style={{
          width: width - 100,
          borderWidth: 1,
          height: 40,
          paddingLeft: 10,
          marginBottom: 20,
          borderRadius: 20,
        }}
      />
    </View>
  );
}
