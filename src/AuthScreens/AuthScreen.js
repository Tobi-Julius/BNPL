import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn, Register } from "../screens";

const Stack = createNativeStackNavigator();

export const AuthScreen = () => {
  return (
      <Stack.Navigator
          screenOptions={{
          headerShown: false
      }}
      >
      <Stack.Screen name="SigIn" component={SignIn} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
