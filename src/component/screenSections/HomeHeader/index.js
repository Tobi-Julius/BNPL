import { View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../common";
import React from "react";
import { styles } from "./Style";
import { Text } from "../../common/Text";
import { globalStyles } from "../../../globalStyles";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { color } from "../../../constants";
import { layout } from "../../../utils";

export const HomeHeader = () => {
  const data = [
    {
      id: 1,
      name: "Payment",
      iconName: "cash-outline",
    },
    {
      id: 2,
      name: "Reward",
      iconName: "gift-outline",
    },
    {
      id: 3,
      name: "Purchase",
      iconName: "cart-outline",
    },
    {
      id: 4,
      name: "Scan QR",
      iconName: "md-qr-code-sharp",
    },
  ];

  return (
    <View style={[styles.container]}>
      <SafeAreaView style={{ marginVertical: layout.pixelSizeVertical(10) }}>
        <View style={[styles.contentContainer, globalStyles.rowBetween]}>
          <View style={[globalStyles.rowCenter, styles.imageTextContainer]}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
              }}
              style={styles.image}
            />
            <View
              style={{
                marginLeft: layout.pixelSizeHorizontal(5),
                maxWidth: layout.width * 0.35,
              }}
            >
              <Text textStyle={styles.nameText} text="Mark Rudson" />
              <Text textStyle={styles.account} text="Pro Account" />
            </View>
          </View>
          <View style={[globalStyles.rowEnd, styles.claimNotifyContainer]}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={[globalStyles.rowCenter, styles.claim]}
            >
              <FontAwesome5 name="coins" color={color.gray2} size={17} />
              <Text textStyle={styles.claimText} text="Claim $10" />
            </TouchableOpacity>
            <Ionicons
              name="notifications-outline"
              color={color.light}
              size={25}
            />
          </View>
        </View>
        <View style={[styles.secondContainer]}>
          <Text textStyle={styles.limit} text="Pay later limit" />
          <View style={[styles.balanceUpgrade, globalStyles.rowBetween]}>
            <Text textStyle={styles.balanceText} text="$250.000,00" />
            <TouchableOpacity activeOpacity={0.7} style={[styles.upgrade]}>
              <Text textStyle={styles.upgradeText} text="upgrade" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.thirdContainer, globalStyles.rowBetween]}>
          {data.map((item, index) => (
            <View style={{ alignItems: "center" }} key={index}>
              <Ionicons
                name={item.iconName}
                style={styles.icon}
                color={color.light}
                size={20}
              />
              <Text textStyle={styles.iconName} text={item.name} />
            </View>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
};
