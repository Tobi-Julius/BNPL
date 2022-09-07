import { StyleSheet } from "react-native";
import { color } from "../../../constants";
import { layout } from "../../../utils";

export const Styles = StyleSheet.create({
  container: {
    marginVertical: layout.pixelSizeVertical(10),
  },
  paymentContainer: {
    marginVertical: layout.pixelSizeVertical(10),
  },
  productText: {
    fontSize: layout.size.h3,
    fontFamily: "Nunito_500Medium",
    marginBottom: layout.pixelSizeHorizontal(5),
  },
  productInfo: {
    fontSize: layout.size.h4,
    fontFamily: "Nunito_400Regular",
    lineHeight: layout.heightPixel(20),
    color: "gray",
  },
  border: {
    borderWidth: 1,
    padding: layout.pixelSizeHorizontal(1),
    borderRadius: layout.fontPixel(30),
  },
  borderContent: {
    padding: layout.pixelSizeHorizontal(20),
    borderRadius: layout.fontPixel(30),
  },
  borderContainer: {
    marginVertical: layout.pixelSizeVertical(10),
  },
  due: {
    fontSize: layout.size.h4,
    fontFamily: "Nunito_500Medium",
    lineHeight: layout.heightPixel(20),
    color: color.dark,
  },
  dividedPrice: {
    fontSize: layout.size.h5,
    fontFamily: "Nunito_400Regular",
    lineHeight: layout.heightPixel(20),
    color: "gray",
  },
  priceTextBtn: {
    color: color.dark,
  },
  payLaterTextBtn: {
    color: color.light,
    fontFamily: "Nunito_600SemiBold",
    paddingVertical: layout.pixelSizeVertical(13),
    paddingHorizontal: layout.pixelSizeHorizontal(20),
    textTransform: "capitalize",
    fontSize: layout.size.h3,
  },
  payLaterContainer: {
    borderRadius: layout.fontPixel(30),
    backgroundColor: color.dark,
    paddingVertical: layout.pixelSizeVertical(4),
    paddingHorizontal: layout.pixelSizeHorizontal(8),
  },
  priceTextBtn: {
    color: color.dark,
    fontFamily: "Nunito_600SemiBold",
    paddingVertical: layout.pixelSizeVertical(13),
    paddingHorizontal: layout.pixelSizeHorizontal(20),
    textTransform: "capitalize",
    fontSize: layout.size.h3,
  },
  priceContainer: {
    borderRadius: layout.fontPixel(30),
    backgroundColor: color.light,
    paddingVertical: layout.pixelSizeVertical(4),
    paddingHorizontal: layout.pixelSizeHorizontal(7),
  },
});
