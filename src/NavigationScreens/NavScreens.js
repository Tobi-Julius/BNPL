import { View } from "react-native";
import React from "react";
import { Auth } from "../firebase/firebase-config";
import { AuthScreen } from "../AuthScreens/AuthScreen";
import { Tab } from "../bottomTabs";

export const NavScreens = () => {
  return <View>{Auth ? <Tab /> : <AuthScreen />}</View>;
};
