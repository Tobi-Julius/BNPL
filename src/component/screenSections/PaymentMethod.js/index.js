import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text } from "../../common";
import { styles } from "./styles";
import { globalStyles } from "../../../globalStyles";
import { color } from "../../../constants";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { layout } from "../../../utils";
import { DisplayPayment } from "../DisplayPayment";

export const PaymentMethod = ({ title, price }) => {
  const [paymentId, setPaymentId] = useState(2);
  const data = [
    {
      id: 1,
      title: "Pay 30 days after",
      subTitle: "interest-free payment after 30 days",
    },
    {
      id: 2,
      title: "Split in 4x payments",
      subTitle: "4x interest-free payment",
    },
  ];
  const displayingData = data.find((item, index) => {
    return item.id === paymentId;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.paymentHeader} text="Payment methods" />
      <View style={{ marginVertical: layout.pixelSizeVertical(15) }}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => setPaymentId(item.id)}
              key={index}
              activeOpacity={0.5}
              style={[styles.paymentContainer, globalStyles.rowBetween]}
            >
              <View style={[globalStyles.rowBetween, { alignItems: "center" }]}>
                <FontAwesome name="cc-mastercard" color="blue" size={27} />
                <View style={styles.payment}>
                  <Text textStyle={styles.title} text={item.title} />
                  <Text textStyle={styles.subTitle} text={item.subTitle} />
                </View>
              </View>
              {paymentId === item.id ? (
                <AntDesign name="checkcircle" color={color.dark} size={24} />
              ) : (
                <MaterialIcons
                  name="radio-button-unchecked"
                  color={color.dark}
                  size={24}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      <DisplayPayment
        displayingData={displayingData}
        price={price}
        title={title}
      />
    </View>
  );
};
