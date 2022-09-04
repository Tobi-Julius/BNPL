import { ScrollView, View } from "react-native";
import React, { useContext } from "react";
import { Featured, Card } from "../../common";
import { Styles } from "./style";
import { globalStyles } from "../../../globalStyles";
import { GlobalProvider } from "../../../context/GlobalState";

export const HomeBody = () => {
  const { store } = useContext(GlobalProvider);

  return (
    <ScrollView contentContainerStyle={[globalStyles.columnCenter]}>
      <View style={[Styles.container]}>
        <Featured leftText="Ongoing purchase" />
        <ScrollView horizontal>
          {store.map((item, index) => {
            const { color, image, monthlyPayment, remaining, name, id } = item;
            return (
              <Card
                store={store}
                key={index}
                color={color}
                image={image}
                timesRemaining={remaining}
                brand={name}
                price={monthlyPayment}
                id={id}
                index={index}
              />
            );
          })}
        </ScrollView>
        <Featured leftText="Shop In Apps" />
      </View>
      {/* <View style={{ marginTop: layout.pixelSizeVertical(300) }} /> */}
    </ScrollView>
  );
};



