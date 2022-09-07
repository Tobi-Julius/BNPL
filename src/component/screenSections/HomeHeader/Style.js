import { StyleSheet } from "react-native";
import { color } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.dark,
    padding: layout.pixelSizeVertical(2),
    alignItems: "center",
  },
  contentContainer: {
    width: layout.width * 0.9,
    alignItems: "center",
  },
  image: {
    width: layout.heightPixel(50),
    height: layout.heightPixel(50),
    borderRadius: layout.fontPixel(8),
  },
  imageTextContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: layout.pixelSizeVertical(10),
  },
  nameText: {
    fontSize: layout.size.h4,
    fontWeight: "600",
    fontFamily: "Nunito_500Medium",
    color: color.light,
  },
  account: {
    fontFamily: "Nunito_500Medium",
    fontSize: layout.size.h6,
    color: color.gray2,
  },
  claimNotifyContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  claim: {
    paddingHorizontal: layout.pixelSizeHorizontal(14),
    paddingVertical: layout.pixelSizeVertical(5),
    backgroundColor: color.gray3,
    borderRadius: layout.fontPixel(15),
    marginRight: layout.pixelSizeHorizontal(10),
    justifyContent: "center",
    alignItems: "center",
  },
  claimText: {
    marginLeft: layout.pixelSizeHorizontal(10),
    color: color.light,
    fontFamily: "Nunito_500Medium",
    fontSize: layout.fontPixel(9),
  },
  secondContainer: {
    marginVertical: layout.pixelSizeVertical(18),
  },
  limit: {
    fontSize: layout.size.h5,
    color: color.gray1,
    fontFamily: "Nunito_500Medium",
  },
  balanceUpgrade: {
    alignItems: "center",
  },
  balanceText: {
    color: color.light,
    fontFamily: "Nunito_700Bold",
    letterSpacing: 1,
    fontSize: layout.size.h1,
  },
  upgrade: {
    paddingHorizontal: layout.pixelSizeHorizontal(14),
    paddingVertical: layout.pixelSizeVertical(5),
    backgroundColor: color.gray3,
    borderRadius: layout.fontPixel(15),
  },
  upgradeText: {
    color: color.light,
    fontFamily: "Nunito_500Medium",
    fontSize: layout.size.h5,
  },
  thirdContainer: {
    marginVertical: layout.pixelSizeVertical(10),
    flexDirection: "row",
  },
  iconName: {
    color: color.light,
    fontFamily: "Nunito_500Medium",
    fontSize: layout.size.h5,
  },
  icon: {
    padding: layout.pixelSizeVertical(10),
    backgroundColor: color.gray3,
    borderRadius: layout.fontPixel(20),
    marginBottom: layout.pixelSizeVertical(10),
  },
});
