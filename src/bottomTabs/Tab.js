import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../screens/Home";
import Order from "../screens/Order";
import Product from "../screens/Product";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

export const Tab = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({});
