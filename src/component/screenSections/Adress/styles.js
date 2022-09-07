import { StyleSheet } from "react-native";
import { color } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  container: {
    marginTop: layout.pixelSizeVertical(60),
  },
  adressContainer: {
    alignItems: "center",
  },
  icon: {
    borderColor: "lightblue",
    borderWidth: 1,
    padding: layout.pixelSizeHorizontal(5),
    borderRadius: layout.fontPixel(5),
  },
  adress: {
    marginLeft: layout.pixelSizeHorizontal(15),
  },
  area: {
    fontFamily: "Nunito_500Medium",
    fontSize: layout.size.h4,
  },
  state: {
    fontFamily: "Nunito_400Regular",
    fontSize: layout.size.h5,
    color: color.gray3,
  },
  deliveryAdressText: {
    fontFamily: "Nunito_700Bold",
    fontSize: layout.size.h4,
    marginVertical: layout.pixelSizeVertical(10),
  },
});
