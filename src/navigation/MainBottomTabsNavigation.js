import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home, Cart, Stat, Setting } from "../screens";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { color } from "../constants";

const Tabs = createMaterialBottomTabNavigator();

const MainBottomTabsNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
      barStyle={{
        backgroundColor: color.light,
      }}
      activeColor={color.dark}
      inactiveColor={color.gray3}
      labeled={false}
      initialRouteName="Home"
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Entypo size={20} color={color} name="home" />
            ) : (
              <AntDesign size={20} color={color} name="home" />
            ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              color={color}
              size={20}
              name={focused ? "cart-sharp" : "cart-outline"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Stat"
        component={Stat}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              color={color}
              size={20}
              name={focused ? "ios-bar-chart-sharp" : "ios-bar-chart-outline"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              color={color}
              size={20}
              name={focused ? "settings" : "settings-outline"}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default MainBottomTabsNavigation;
