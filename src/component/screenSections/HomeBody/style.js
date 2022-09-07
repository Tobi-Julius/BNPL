import { StyleSheet } from "react-native";
import { layout } from "../../../utils";

export const Styles = StyleSheet.create({
  container: {
    width: layout.width * 0.9,
  },
  scrollContainer: {
    height: layout.heightPixel(150),
  },
  bottom: {
    marginBottom: layout.pixelSizeVertical(320),
  },
});
