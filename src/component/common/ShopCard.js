import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Text } from "./Text";
import { globalStyles } from "../../globalStyles";
import { layout } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { color } from "../../constants";

export const ShopCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Product", { item })}
      accessibilityHint="View Product"
      activeOpacity={0.6}
      style={[styles.container, globalStyles.rowBetween]}
    >
      <Image source={{ uri: item.imageUri1 }} style={[styles.image]} />
      <View
        style={{ flex: 2, marginHorizontal: layout.pixelSizeHorizontal(4) }}
      >
        <Text
          textStyle={styles.title}
          text={
            item.title.length >= 18
              ? `${item.title.slice(0, 18)}...`
              : item.title
          }
        />
        <Text textStyle={styles.subTitle} text={item.subTitle} />
        <View style={styles.calculatedAmount}>
          <Text textStyle={styles.price} text={`$${item.price}`} />
          <Text
            textStyle={styles.divided}
            text={`Pay 4x for $${parseFloat(item.price) / 4}`}
          />
        </View>
      </View>
      <Image source={{ uri: item.imageUri2 }} style={[styles.image]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: layout.pixelSizeVertical(10),
  },
  image: {
    width: layout.widthPixel(70),
    height: layout.heightPixel(70),
    borderRadius: layout.fontPixel(10),
    flex: 1,
  },
  title: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: layout.size.h4,
  },
  subTitle: {
    color: color.gray2,
    fontSize: layout.size.h5,
    fontFamily: "Nunito_400Regular",
  },
  price: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: layout.fontPixel(13),
    marginVertical: layout.pixelSizeVertical(7),
    marginRight: layout.pixelSizeHorizontal(4),
  },
  calculatedAmount: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  divided: {
    color: color.gray2,
    fontSize: layout.size.h5,
    fontFamily: "Nunito_400Regular",
  },
});
