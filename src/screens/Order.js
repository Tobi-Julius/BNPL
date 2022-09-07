import React from "react";
import { Adress, PaymentMethod } from "../component/screenSections";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../globalStyles";
import { ScrollView, View } from "react-native";
import { layout } from "../utils";
import { useRoute } from "@react-navigation/native";

export const Order = () => {
  const route = useRoute();
  const { price, title } = route.params;

  return (
    <ScrollView>
      <SafeAreaView style={[globalStyles.rowCenter]}>
        <View style={{ width: layout.width * 0.9 }}>
          <Adress />
          <PaymentMethod price={price} title={title} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
