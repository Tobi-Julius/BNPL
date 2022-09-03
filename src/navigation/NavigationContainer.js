import React from "react";
import { NavigationContainer as BaseNavigationContainer } from "@react-navigation/native";
import RootNavigation from "./RootNavigation";

const NavigationContainer = () => {
  return (
    <BaseNavigationContainer>
      <RootNavigation />
    </BaseNavigationContainer>
  );
};

export default NavigationContainer;
