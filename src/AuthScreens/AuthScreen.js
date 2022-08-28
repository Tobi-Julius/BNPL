import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import SignIn from "../screens/SignIn";
import Register from "../screens/Register";

export const AuthScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      
    >
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
