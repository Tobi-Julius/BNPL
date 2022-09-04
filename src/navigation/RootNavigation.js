import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Order, Product } from "../screens";
import MainBottomTabsNavigation from "./MainBottomTabsNavigation";
import { globalStyles } from "../globalStyles";
import { layout } from "../utils";
import { color, icon } from "../constants";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stack = createSharedElementStackNavigator();

const RootNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MainBottomTabsNavigation"
        component={MainBottomTabsNavigation}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        // sharedElements={(route, otherRoute, showing) => {
        //   const {id} = route.params
        //   return [
        //     {
        //       id:,
        //       animation:,
        //       align:,
        //       resize:,
        //     },
        //   ]
        // }}

        options={{
          animationEnabled: true,

          headerTransparent: true,
          headerShown: true,
          gestureEnabled: false,
          animation: "slide_from_right",
          animationDuration: 350,
          animationTypeForReplace: "push",
          customAnimationOnGesture: true,
          title: "",
          presentation: "card",
          cardStyleInterpolator: ({ current, next }) => {
            const opacity = current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: "clamp",
            });
            next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                  extrapolate: "clamp",
                })
              : 0;
            return {
              cardStyle: {
                opacity: opacity,
              },
            };
          },
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              style={[
                globalStyles.rowCenter,
                {
                  marginLeft: layout.width * 0.05,
                  backgroundColor: color.light,
                  padding: layout.pixelSizeVertical(10),
                  borderRadius: layout.fontPixel(7),
                },
              ]}
            >
              <Ionicons name="arrow-back" size={20} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={[
                globalStyles.rowBetween,
                {
                  width: layout.widthPixel(70),
                  marginRight: layout.width * 0.05,
                },
              ]}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {}}
                style={[
                  globalStyles.rowCenter,
                  {
                    backgroundColor: color.light,
                    padding: layout.pixelSizeVertical(11),
                    borderRadius: layout.fontPixel(7),
                  },
                ]}
              >
                <Entypo name="share-alternative" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {}}
                style={[
                  globalStyles.rowCenter,
                  {
                    backgroundColor: color.light,
                    padding: layout.pixelSizeVertical(11),
                    borderRadius: layout.fontPixel(7),
                  },
                ]}
              >
                <Image
                  source={icon.menu}
                  style={{
                    width: layout.heightPixel(20),
                    height: layout.widthPixel(20),
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        // sharedElements={(route, otherRoute, showing) => {
        //   const {id} = route.params
        //   return [
        //     {
        //       id:,
        //       animation:,
        //       align:,
        //       resize:,
        //     },
        //   ]
        // }}

        options={{
          headerTransparent: true,
          headerShown: true,
          gestureEnabled: false,
          animation: "slide_from_right",
          animationDuration: 350,
          animationTypeForReplace: "push",
          customAnimationOnGesture: true,
          title: "",
          presentation: "card",
          cardStyleInterpolator: ({ current, next }) => {
            const opacity = current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: "clamp",
            });
            next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                  extrapolate: "clamp",
                })
              : 0;
            return {
              cardStyle: {
                opacity: opacity,
              },
            };
          },
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              style={[
                globalStyles.rowCenter,
                {
                  marginLeft: layout.width * 0.05,
                  backgroundColor: color.light,
                  padding: layout.pixelSizeVertical(10),
                  borderRadius: layout.fontPixel(7),
                },
              ]}
            >
              <Ionicons name="arrow-back" size={20} color="black" />
            </TouchableOpacity>
          ),

          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {}}
              style={[
                globalStyles.rowCenter,
                {
                  backgroundColor: color.light,
                  padding: layout.pixelSizeVertical(11),
                  borderRadius: layout.fontPixel(7),
                  marginRight: layout.width * 0.05,
                },
              ]}
            >
              <Image
                source={icon.menu}
                style={{
                  width: layout.heightPixel(21),
                  height: layout.widthPixel(21),
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
