import { StyleSheet } from "react-native";
import { color } from "../../../constants";
import { layout } from "../../../utils";
color;

export const styles = StyleSheet.create({
  container: {
    marginVertical: layout.pixelSizeVertical(20),
  },
  paymentHeader: {
    fontFamily: "Nunito_700Bold",
    fontSize: layout.size.h4,
  },
  paymentContainer: {
    alignItems: "center",
    marginVertical: layout.pixelSizeVertical(10),
  },
  payment: {
    marginLeft: layout.pixelSizeHorizontal(15),
  },
  title: {
    fontFamily: "Nunito_500Medium",
    fontSize: layout.size.h4,
  },
  subTitle: {
    fontFamily: "Nunito_400Regular",
    fontSize: layout.size.h5,
    color: color.gray3,
  },
});
