import { View } from "react-native";
import React from "react";
import { Button, Text } from "../../common";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../../../globalStyles";
import { layout } from "../../../utils";

export const DisplayPayment = ({ displayingData, title, price }) => {
  const paymentData = [
    {
      id: 1,
      color: "#8f554a",
      due: "Today",
      time: "1st",
    },
    {
      id: 2,
      color: "#916f44",
      due: "In a month",
      time: "2nd",
    },
    {
      id: 3,
      color: "#888c49",
      due: "In 2 months",
      time: "3rd",
    },
    {
      id: 4,
      color: "#82ba6e",
      due: "In 3 months",
      time: "4th",
    },
  ];

  return (
    <View>
      <View style={styles.container}>
        <View style={[globalStyles.rowBetween, { alignItems: "center" }]}>
          <View style={[globalStyles.rowBetween, { alignItems: "center" }]}>
            <AntDesign
              name="shoppingcart"
              style={styles.icon}
              color="black"
              size={26}
            />
            <Text textStyle={styles.title} text={title} />
          </View>
          <Text textStyle={styles.price} text={`$${price}`} />
        </View>
        <View style={styles.separator} />
        <View>
          <Text
            textStyle={styles.interestFree}
            text={displayingData.subTitle}
          />
        </View>
        {displayingData.subTitle === "4x interest-free payment" ? (
          <View>
            {paymentData.flatMap((item, index) => {
              return (
                <View
                  key={index}
                  style={[
                    globalStyles.rowBetween,
                    {
                      alignItems: "center",
                      paddingVertical: layout.pixelSizeVertical(8),
                    },
                  ]}
                >
                  <View
                    style={[globalStyles.rowBetween, { alignItems: "center" }]}
                  >
                    <View
                      style={{
                        borderColor: item.color,
                        borderWidth: 1,
                        padding: layout.pixelSizeHorizontal(1),
                        borderRadius: layout.pixelSizeHorizontal(30),
                      }}
                    >
                      <View
                        style={{
                          padding: layout.pixelSizeHorizontal(20),
                          backgroundColor: item.color,
                          borderRadius: layout.pixelSizeHorizontal(30),
                        }}
                      />
                    </View>
                    <View
                      style={{ marginLeft: layout.pixelSizeHorizontal(10) }}
                    >
                      <Text
                        textStyle={styles.payment}
                        text={`${item.time} Payment`}
                      />
                      <Text textStyle={styles.due} text={`${item.due}`} />
                    </View>
                  </View>
                  <Text textStyle={styles.price} text={`$${price / 4}`} />
                </View>
              );
            })}
          </View>
        ) : (
          <View style={styles.date}>
            <Text
              textStyle={styles.dateText}
              text={`Product(s) bought with "${displayingData.title}" method are to be paid for after 30days the product(s) is being delivered`}
            />
          </View>
        )}
      </View>
      <Button
        btnContainer={styles.btnContainer}
        btnTextStyle={styles.btnText}
        btnText="Confirm Order"
      />
    </View>
  );
};
