import { View } from "react-native";
import React from "react";
import { Styles } from "./styles";
import { Text } from "../../common";
import { globalStyles } from "../../../globalStyles";
import { Button } from "../../common";
import { useNavigation } from "@react-navigation/native";

export const ProductFooter = ({ productInfo, price, title }) => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      color: "#8f554a",
      due: "Today",
    },
    {
      id: 2,
      color: "#916f44",
      due: "In a month",
    },
    {
      id: 3,
      color: "#888c49",
      due: "In 2 months",
    },
    {
      id: 4,
      color: "#82ba6e",
      due: "In 3 months",
    },
  ];
  return (
    <View>
      <View style={Styles.container}>
        <Text textStyle={Styles.productText} text="Product info" />
        <Text textStyle={Styles.productInfo} text={productInfo} />
      </View>
      <View style={[Styles.paymentContainer]}>
        <Text textStyle={Styles.productText} text="4x interest-free payment" />
        <View style={[Styles.borderContainer, globalStyles.rowBetween]}>
          {data.map((item, index) => {
            return (
              <View key={index} style={{ alignItems: "center" }}>
                <View style={[Styles.border, { borderColor: item.color }]}>
                  <View
                    style={[
                      Styles.borderContent,
                      { backgroundColor: item.color },
                    ]}
                  />
                </View>
                <Text textStyle={Styles.due} text={item.due} />
                <Text textStyle={Styles.dividedPrice} text={`$${price / 4}`} />
              </View>
            );
          })}
        </View>
      </View>
      <View style={[globalStyles.rowBetween]}>
        <Button
          onPress={() => navigation.navigate("Order", { price, title })}
          btnTextStyle={Styles.payLaterTextBtn}
          btnContainer={Styles.payLaterContainer}
          btnText="buy now pay later"
        />
        <Button
          btnContainer={Styles.priceContainer}
          btnTextStyle={Styles.priceTextBtn}
          btnText={`$${price}`}
        />
      </View>
    </View>
  );
};
