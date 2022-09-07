import { TouchableOpacity } from "react-native";
import { Text } from "./Text";
import React from "react";

export const Button = ({
  btnContainer,
  btnTextStyle,
  btnText,
  disable,
  ...others
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      disabled={disable}
      style={[btnContainer, { justifyContent: "center", alignItems: "center" }]}
      {...others}
    >
      <Text text={btnText} textStyle={btnTextStyle} />
    </TouchableOpacity>
  );
};
