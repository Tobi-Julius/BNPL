import { Text as MainText } from "react-native";
import React from "react";

export const Text = ({
  textStyle,
  text,
  textAlign,
  fontSize,
  fontWeight,
  ...others
}) => {
  return (
    <MainText style={[textStyle, textAlign, fontSize, fontWeight]} {...others}>
      {text}
    </MainText>
  );
};
