import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "./Text";
import { globalStyles } from "../../globalStyles";
import { color } from "../../constants";
import { layout } from "../../utils";

export const Featured = ({ leftText }) => {
  return (
    <View
      style={[
        globalStyles.rowBetween,
        { marginVertical: layout.pixelSizeVertical(20) },
      ]}
    >
      <Text textStyle={styles.leftTextStyle} text={leftText} />
      <Text textStyle={styles.rightTextStyle} text="See all" />
    </View>
  );
};

const styles = StyleSheet.create({
  leftTextStyle: {
    color: color.dark,
    fontSize: layout.size.h4,
    fontFamily: "Nunito_600SemiBold",
  },
  rightTextStyle: {
    color: color.gray2,
    fontSize: layout.size.h6,
    fontFamily: "Nunito_500Medium",
  },
});
