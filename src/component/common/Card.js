import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { layout } from "../../utils";
import { Text } from "./Text";
import { color } from "../../constants";
export const Card = ({
  color,
  image,
  brand,
  timesRemaining,
  price,
  id,
  index,
  store,
}) => {
  return (
    <View
      key={id}
      style={[
        styles.container,
        {
          backgroundColor: color,
          marginRight:
            store.length === index + 1 ? 0 : layout.pixelSizeHorizontal(28),
        },
      ]}
    >
      <Image source={image} style={styles.image} />
      <Text style={styles.brand} text={brand} />
      <Text
        textStyle={styles.timesRemaining}
        text={`${timesRemaining} time(s) remaining`}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text textStyle={styles.price} text={price} />
        <Text textStyle={styles.monthly} text="monthly" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: layout.heightPixel(150),
    width: layout.widthPixel(200),
    borderRadius: layout.fontPixel(8),
    padding: layout.pixelSizeVertical(10),
    paddingVertical: layout.pixelSizeVertical(20),
  },
  image: {
    height: layout.heightPixel(25),
    width: layout.widthPixel(25),
    borderRadius: layout.fontPixel(5),
    marginBottom: layout.pixelSizeVertical(7),
  },
  brand: {
    marginBottom: layout.pixelSizeVertical(6),
    fontFamily: "Nunito_600SemiBold",
    fontSize: layout.size.h4,
  },
  timesRemaining: {
    marginBottom: layout.pixelSizeVertical(10),
    color: color.gray3,
    fontSize: layout.size.h5,
    fontFamily: "Nunito_400Regular",
  },
  price: {
    fontSize: layout.size.h4,
    color: color.dark,
    fontFamily: "Nunito_600SemiBold",
  },
  monthly: {
    fontFamily: "Nunito_400Regular",
    fontSize: layout.size.h6,
    color: color.gray3,
    marginLeft: layout.pixelSizeHorizontal(5),
  },
});
