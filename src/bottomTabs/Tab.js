import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Product, Order } from "../screens";

const Tabs = createBottomTabNavigator();

export const Tab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Product" component={Product} />
      <Tabs.Screen name="Order" component={Order} />
    </Tabs.Navigator>
  );
};
