import { TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { Text } from "../../common";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { color } from "../../../constants";
import { GlobalProvider } from "../../../context/GlobalState";
import { globalStyles } from "../../../globalStyles";

export const Adress = () => {
  const { deliveryAdress } = useContext(GlobalProvider);
  const { area, state } = deliveryAdress;

  return (
    <View style={styles.container}>
      <Text textStyle={styles.deliveryAdressText} text="Delivery adress" />
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.adressContainer, globalStyles.rowBetween]}
      >
        <View style={[globalStyles.rowBetween, { alignItems: "center" }]}>
          <Entypo name="location" color={color.dark} size={24} />
          <View style={styles.adress}>
            <Text textStyle={styles.area} text={area} />
            <Text textStyle={styles.state} text={state} />
          </View>
        </View>
        <Entypo name="chevron-small-right" color={color.dark} size={24} />
      </TouchableOpacity>
    </View>
  );
};
