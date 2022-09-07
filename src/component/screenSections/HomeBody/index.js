import { ScrollView, View } from "react-native";
import React, { useContext } from "react";
import { Featured, Card, ShopCard } from "../../common";
import { Styles } from "./style";
import { globalStyles } from "../../../globalStyles";
import { GlobalProvider } from "../../../context/GlobalState";

export const HomeBody = () => {
  const { store, shopProduct } = useContext(GlobalProvider);

  return (
    <ScrollView contentContainerStyle={[globalStyles.columnCenter]}>
      <View style={[Styles.container]}>
        <Featured leftText="Ongoing purchase" />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[Styles.scrollContainer]}
          horizontal
        >
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
        <ScrollView
          scrollEnabled
          fadingEdgeLength={1}
          showsVericalScrollIndicator={false}
        >
          {shopProduct.map((item, index) => {
            return <ShopCard key={`${item.id}$${index}`} item={item} />;
          })}
        </ScrollView>
      </View>
      <View style={[Styles.bottom]} />
    </ScrollView>
  );
};
