import { Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import { StyleSheet } from "react-native";
import { color } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: layout.pixelSizeVertical(30),
    backgroundColor: color.gray1,
    paddingHorizontal: layout.pixelSizeHorizontal(10),
    borderRadius: layout.fontPixel(15),
  },
  icon: {
    borderColor: "lightblue",
    borderWidth: 1,
    padding: layout.pixelSizeHorizontal(5),
    borderRadius: layout.fontPixel(5),
  },
  title: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: layout.size.h4,
    marginLeft: layout.pixelSizeHorizontal(13),
  },
  price: {
    fontFamily: "Nunito_500Medium",
    fontSize: layout.size.h4,
  },
  payment: {
    fontFamily: "Nunito_500Medium",
    fontSize: layout.size.h4,
  },
  due: {
    fontFamily: "Nunito_500Medium",
    fontSize: layout.size.h5,
    color: color.gray2,
  },
  interestFree: {
    textAlign: "center",
    color: color.gray3,
    fontSize: layout.size.h4,
    fontFamily: "Nunito_600SemiBold",
  },
  separator: {
    borderWidth: 0.5,
    width: "80%",
    alignSelf: "center",
    borderColor: color.gray2,
    marginVertical: layout.pixelSizeVertical(10),
  },
  btnContainer: {
    backgroundColor: color.dark,
    borderRadius: layout.fontPixel(25),
    marginVertical: layout.pixelSizeVertical(10),
  },
  btnText: {
    color: color.light,
    fontSize: layout.size.h4,
    fontFamily: "Nunito_600SemiBold",
    padding: layout.pixelSizeHorizontal(14),
  },
  date: {
    alignItems: "center",
    paddingVertical: layout.pixelSizeVertical(20),
  },
  dateText: {
    fontFamily: "Nunito_500Medium",
    fontSize: layout.size.h4,
    textAlign: "left",
  },
});
